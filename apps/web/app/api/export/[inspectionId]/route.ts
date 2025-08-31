import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ inspectionId: string }> }
) {
  try {
    const resolvedParams = await params;
    const supabase = createSupabaseServerClient();
    
    // Check if user is authenticated
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user has paid access
    const { data: entitlement } = await supabase
      .from('entitlements')
      .select('paid')
      .eq('user_id', user.id)
      .single();

    if (!entitlement?.paid) {
      return NextResponse.json({ error: 'Payment required' }, { status: 402 });
    }

    // Get the inspection with all related data
    const { data: inspection, error: inspectionError } = await supabase
      .from('inspections')
      .select(`
        *,
        properties (
          name,
          address
        ),
        photos (*),
        signatures (*),
        exports (*)
      `)
      .eq('id', resolvedParams.inspectionId)
      .eq('user_id', user.id)
      .single();

    if (inspectionError || !inspection) {
      return NextResponse.json({ error: 'Inspection not found' }, { status: 404 });
    }

    // Log the export attempt
    await supabase
      .from('events')
      .insert({
        user_id: user.id,
        name: 'pdf_export_attempted',
        meta: {
          inspection_id: inspection.id,
          property_name: inspection.properties?.name || 'Unknown Property',
          status: 'temporarily_disabled'
        },
      });

    // TODO: PDF generation temporarily disabled during deployment
    // This will be re-enabled once the PDF package React type conflicts are resolved
    
    // For now, return a placeholder response
    return NextResponse.json({ 
      error: 'PDF generation temporarily unavailable',
      message: 'PDF export feature is being updated and will be available soon.',
      inspection_id: inspection.id,
      property_name: inspection.properties?.name || 'Unknown Property'
    }, { status: 503 });

  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

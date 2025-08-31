import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase';
import { InspectionDocument } from '@landlord/pdf';
import { renderToBuffer } from '@react-pdf/renderer';

export async function GET(
  request: NextRequest,
  { params }: { params: { inspectionId: string } }
) {
  try {
    const supabase = await createSupabaseServerClient();
    
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
      .eq('id', params.inspectionId)
      .eq('user_id', user.id)
      .single();

    if (inspectionError || !inspection) {
      return NextResponse.json({ error: 'Inspection not found' }, { status: 404 });
    }

    // Check if PDF already exists and is recent (within 1 hour)
    const recentExport = inspection.exports?.find((exp: any) => {
      const exportTime = new Date(exp.created_at);
      const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
      return exportTime > oneHourAgo;
    });

    if (recentExport) {
      // Return existing PDF URL
      const { data: signedUrl } = await supabase.storage
        .from('exports')
        .createSignedUrl(recentExport.storage_path, 60 * 60 * 24 * 7); // 7 days

      if (signedUrl) {
        return NextResponse.json({ 
          url: signedUrl.signedUrl,
          cached: true 
        });
      }
    }

    // Generate new PDF
    const pdfBuffer = await renderToBuffer(
      InspectionDocument({
        inspection: {
          id: inspection.id,
          type: inspection.type,
          date: inspection.date,
          notes: inspection.notes,
          payload: inspection.payload,
          property: {
            name: inspection.properties.name,
            address: inspection.properties.address,
          },
          photos: inspection.photos || [],
          signatures: inspection.signatures || [],
        },
        watermark: false, // Pro users get no watermark
      })
    );

    // Upload PDF to Supabase Storage
    const fileName = `${user.id}/${inspection.id}/${Date.now()}.pdf`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('exports')
      .upload(fileName, pdfBuffer, {
        contentType: 'application/pdf',
        cacheControl: '3600',
      });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      return NextResponse.json({ error: 'Failed to save PDF' }, { status: 500 });
    }

    // Record the export in the database
    const { error: recordError } = await supabase
      .from('exports')
      .insert({
        inspection_id: inspection.id,
        storage_path: fileName,
      });

    if (recordError) {
      console.error('Record error:', recordError);
    }

    // Create signed URL for download
    const { data: signedUrl, error: signedUrlError } = await supabase.storage
      .from('exports')
      .createSignedUrl(fileName, 60 * 60 * 24 * 7); // 7 days

    if (signedUrlError || !signedUrl) {
      return NextResponse.json({ error: 'Failed to create download link' }, { status: 500 });
    }

    // Log the export event
    await supabase
      .from('events')
      .insert({
        user_id: user.id,
        name: 'pdf_export',
        meta: {
          inspection_id: inspection.id,
          property_name: inspection.properties.name,
        },
      });

    return NextResponse.json({ 
      url: signedUrl.signedUrl,
      cached: false 
    });

  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

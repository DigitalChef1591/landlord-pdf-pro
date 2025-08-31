import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  const supabase = await createSupabaseServerClient();
  
  // Sign out the user
  await supabase.auth.signOut();
  
  // Redirect to home page
  return NextResponse.redirect(new URL('/', request.url));
}

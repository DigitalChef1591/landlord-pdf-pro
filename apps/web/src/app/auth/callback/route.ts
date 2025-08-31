import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const supabase = await createSupabaseServerClient();
    
    // Exchange the code for a session
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    
    if (!error) {
      // Get the user to create their profile if needed
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        // Ensure user exists in our users table
        const { error: insertError } = await supabase
          .from('users')
          .upsert({
            id: user.id,
            email: user.email!,
          }, {
            onConflict: 'id'
          });

        if (insertError) {
          console.error('Error creating user profile:', insertError);
        }

        // Check if user has paid status
        const { data: entitlement } = await supabase
          .from('entitlements')
          .select('paid')
          .eq('user_id', user.id)
          .single();

        // Redirect based on payment status
        if (entitlement?.paid) {
          return NextResponse.redirect(new URL('/dashboard', requestUrl.origin));
        } else {
          return NextResponse.redirect(new URL('/purchase', requestUrl.origin));
        }
      }
    }
  }

  // If there's an error or no code, redirect to login
  return NextResponse.redirect(new URL('/auth/login', requestUrl.origin));
}

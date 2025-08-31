import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { getStripe } from '@/lib/stripe'
import { createSupabaseServerClient } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 })
  }

  let event

  try {
    // Get Stripe instance (lazy initialization)
    const stripe = getStripe()
    
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
    if (!webhookSecret) {
      throw new Error('STRIPE_WEBHOOK_SECRET is not set')
    }
    
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    )
  } catch (error) {
    console.error('Webhook signature verification failed:', error)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object
      
      // Get customer email from session
      const customerEmail = session.customer_details?.email
      
      if (customerEmail) {
        try {
          const supabase = await createSupabaseServerClient()
          
          // Create or get user
          const { data: user, error: userError } = await supabase
            .from('users')
            .upsert({ email: customerEmail })
            .select()
            .single()

          if (userError) {
            console.error('Error creating user:', userError)
            return NextResponse.json({ error: 'User creation failed' }, { status: 500 })
          }

          // Update entitlements
          const { error: entitlementError } = await supabase
            .from('entitlements')
            .upsert({
              user_id: user.id,
              paid: true,
              source: 'stripe',
              updated_at: new Date().toISOString(),
            })

          if (entitlementError) {
            console.error('Error updating entitlements:', entitlementError)
            return NextResponse.json({ error: 'Entitlement update failed' }, { status: 500 })
          }

          console.log(`Payment successful for user: ${customerEmail}`)
        } catch (error) {
          console.error('Error processing payment:', error)
          return NextResponse.json({ error: 'Payment processing failed' }, { status: 500 })
        }
      }
      break

    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}

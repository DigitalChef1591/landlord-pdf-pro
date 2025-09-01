import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(request: NextRequest) {
  try {
    const { successUrl, cancelUrl } = await request.json()

    // Initialize Stripe directly
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2025-08-27.basil',
    })

    // Create checkout session with explicit configuration
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Landlord PDF Pro',
              description: 'Professional property inspection reports with unlimited features',
            },
            unit_amount: 2900, // $29.00
          },
          quantity: 1,
        },
      ],
      success_url: successUrl || `${process.env.NEXT_PUBLIC_SITE_URL || 'https://landlordpdfpro.net'}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_SITE_URL || 'https://landlordpdfpro.net'}/purchase`,
      metadata: {
        product: 'landlord-pdf-pro',
      },
    })

    return NextResponse.json({ 
      sessionId: session.id,
      url: session.url 
    })
  } catch (error: any) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to create checkout session',
        details: error.message 
      },
      { status: 500 }
    )
  }
}

import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
  typescript: true,
})

export const STRIPE_CONFIG = {
  priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID!,
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
  webhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
}

// Validate required environment variables
if (!STRIPE_CONFIG.priceId) {
  throw new Error('NEXT_PUBLIC_STRIPE_PRICE_ID is not set')
}

if (!STRIPE_CONFIG.publishableKey) {
  throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set')
}

if (!STRIPE_CONFIG.webhookSecret) {
  throw new Error('STRIPE_WEBHOOK_SECRET is not set')
}

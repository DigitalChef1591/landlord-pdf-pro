import Stripe from 'stripe'

// Only initialize Stripe if environment variables are available
let stripe: Stripe | null = null

if (process.env.STRIPE_SECRET_KEY) {
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-08-27.basil',
    typescript: true,
  })
}

export const STRIPE_CONFIG = {
  priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID || 'price_demo_fallback',
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
  webhookSecret: process.env.STRIPE_WEBHOOK_SECRET || '',
}

// Helper functions that validate at runtime when needed
export const getStripe = () => {
  if (!stripe) {
    throw new Error('STRIPE_SECRET_KEY is not set')
  }
  return stripe
}

export const getStripeClient = () => {
  if (!stripe) {
    throw new Error('STRIPE_SECRET_KEY is not set')
  }
  return stripe
}

export const validateStripeConfig = () => {
  if (!STRIPE_CONFIG.priceId) {
    throw new Error('NEXT_PUBLIC_STRIPE_PRICE_ID is not set')
  }
  if (!STRIPE_CONFIG.publishableKey) {
    throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set')
  }
  if (!STRIPE_CONFIG.webhookSecret) {
    throw new Error('STRIPE_WEBHOOK_SECRET is not set')
  }
}

// Export stripe for backward compatibility (but it might be null)
export { stripe }

import Stripe from 'stripe'
import { loadStripe } from '@stripe/stripe-js'

// Server-side Stripe instance
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
})

// Client-side Stripe instance
export const getStripe = () => {
  return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
}

// Product configuration
export const STRIPE_CONFIG = {
  PRICE_ID: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID!,
  PRODUCT_NAME: 'Landlord PDF Pro',
  AMOUNT: 2900, // $29.00 in cents
  CURRENCY: 'usd',
}

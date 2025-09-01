# 🚨 STRIPE PRICE ID FIX NEEDED

## Issue Identified
You've set up Stripe environment variables correctly, but you used the **Product ID** instead of the **Price ID**.

## The Problem
- **Product ID**: Identifies the product (starts with `prod_`)
- **Price ID**: Identifies the specific price for that product (starts with `price_`)

Stripe needs the **Price ID** to create checkout sessions, not the Product ID.

## How to Fix

### Step 1: Find the Correct Price ID
1. Go to your **Stripe Dashboard**
2. Navigate to **Products**
3. Click on your "Landlord PDF Pro" product
4. Look for the **Pricing** section
5. You'll see a price entry (probably $29)
6. Copy the ID that starts with `price_` (NOT the one that starts with `prod_`)

The Price ID should look like: `price_1ABC123def456GHI789`

### Step 2: Update Vercel Environment Variable
1. Go to your **Vercel Dashboard**
2. Find your project settings
3. Go to **Environment Variables**
4. Find `NEXT_PUBLIC_STRIPE_PRICE_ID`
5. Replace the current value with the correct Price ID (starts with `price_`)
6. Save and redeploy

### Step 3: Test
After updating, the Buy Now button should redirect to Stripe Checkout instead of showing "Something went wrong."

## Quick Visual Guide
```
❌ WRONG: prod_ABC123 (Product ID)
✅ CORRECT: price_1ABC123def456GHI789 (Price ID)
```

## Current Status
- ✅ Stripe environment variables are set up
- ❌ Wrong ID type is being used (Product ID instead of Price ID)
- 🔄 Need to update `NEXT_PUBLIC_STRIPE_PRICE_ID` with correct Price ID

Once you update this, the payment flow will work perfectly!

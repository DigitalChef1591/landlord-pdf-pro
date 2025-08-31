# 🔑 How to Get Stripe API Keys

## 🎯 CURRENT STATUS
You're in the Stripe onboarding process. Here's how to get your API keys:

## 📋 STEP-BY-STEP STRIPE SETUP

### 1. **Complete Stripe Onboarding**
- Fill in the business website field (you can use a placeholder like `https://example.com` for now)
- Complete the business information form
- Click **Continue** to finish setup

### 2. **Access Your Dashboard**
After completing onboarding, you'll be taken to the Stripe Dashboard.

### 3. **Get Your API Keys**
1. **In Stripe Dashboard**, look for **"Developers"** in the left sidebar
2. **Click "API Keys"**
3. **You'll see two keys:**
   - **Publishable key** (starts with `pk_test_...`) - This is safe to use in frontend
   - **Secret key** (starts with `sk_test_...`) - Keep this private

### 4. **Create a Product and Price**
1. **Go to "Products"** in the left sidebar
2. **Click "Add Product"**
3. **Fill in:**
   - **Name**: `Landlord Move-In/Out PDF Pro`
   - **Description**: `Professional property inspection PDF reports`
4. **Add Pricing:**
   - **Price**: `$29.00`
   - **Billing**: `One time`
5. **Save** - You'll get a **Price ID** (starts with `price_...`)

## 🚀 QUICK DEPLOYMENT OPTION

**If you want to deploy immediately while setting up Stripe:**

Use these placeholder values in Vercel → Settings → Environment Variables:

```
STRIPE_SECRET_KEY=sk_test_placeholder
STRIPE_WEBHOOK_SECRET=whsec_placeholder
NEXT_PUBLIC_STRIPE_PRICE_ID=price_placeholder
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_placeholder
NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder_anon_key
SUPABASE_SERVICE_ROLE_KEY=placeholder_service_key
```

This will get your site deployed immediately, then you can update with real keys later.

## 📝 WHAT YOU'LL NEED FOR VERCEL

Once you have your Stripe account set up, you'll need these 4 values:

1. **STRIPE_SECRET_KEY**: `sk_test_...` (from API Keys page)
2. **NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY**: `pk_test_...` (from API Keys page)  
3. **NEXT_PUBLIC_STRIPE_PRICE_ID**: `price_...` (from your product)
4. **STRIPE_WEBHOOK_SECRET**: `whsec_...` (we'll set this up after deployment)

## 🎯 RECOMMENDED APPROACH

1. **Use placeholder values now** to get the site deployed
2. **Complete Stripe setup** in parallel
3. **Update environment variables** with real keys
4. **Set up webhook** with the live URL
5. **Test payments** with Stripe test cards

This way you can see your live site immediately while finishing the payment setup!

## 🔗 USEFUL LINKS

- **Stripe Dashboard**: https://dashboard.stripe.com
- **Stripe Test Cards**: https://stripe.com/docs/testing#cards
- **API Keys Location**: Dashboard → Developers → API Keys
- **Products Location**: Dashboard → Products

Would you like to use placeholder values to deploy now, or wait until you have the real Stripe keys?

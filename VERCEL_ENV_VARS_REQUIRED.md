# 🔑 Required Environment Variables for Vercel

## 🚨 BUILD ERROR RESOLVED - NOW NEED ENV VARS

Great news! The build commands are working perfectly:
- ✅ Dependencies installed successfully
- ✅ Next.js compiled without errors
- ❌ Build failing due to missing environment variables

## 📋 REQUIRED ENVIRONMENT VARIABLES

You need to add these in **Vercel Dashboard → Settings → Environment Variables**:

### Supabase Variables
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### Stripe Variables (CRITICAL - causing current build failure)
```
STRIPE_SECRET_KEY=sk_test_...your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_...your_webhook_secret
NEXT_PUBLIC_STRIPE_PRICE_ID=price_...your_price_id
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...your_publishable_key
```

## 🎯 HOW TO ADD ENVIRONMENT VARIABLES

1. **Go to Vercel Dashboard** → Your Project → **Settings**
2. **Click "Environment Variables"** in the left sidebar
3. **Add each variable:**
   - **Name**: `STRIPE_SECRET_KEY`
   - **Value**: `sk_test_...` (your actual Stripe secret key)
   - **Environment**: Select **Production**, **Preview**, and **Development**
   - Click **Save**
4. **Repeat for all variables above**

## 🔍 WHERE TO GET THESE VALUES

### Supabase:
- Go to https://supabase.com/dashboard
- Select your project → Settings → API
- Copy the values for URL, anon key, and service role key

### Stripe:
- Go to https://dashboard.stripe.com
- Developers → API Keys
- Copy publishable key and secret key
- Create a product/price and copy the price ID
- Webhook secret comes from webhook configuration

## ⚡ QUICK TEST VALUES (for immediate deployment)

If you want to deploy immediately for testing, you can use these placeholder values:

```
STRIPE_SECRET_KEY=sk_test_placeholder
STRIPE_WEBHOOK_SECRET=whsec_placeholder
NEXT_PUBLIC_STRIPE_PRICE_ID=price_placeholder
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_placeholder
NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder_anon_key
SUPABASE_SERVICE_ROLE_KEY=placeholder_service_key
```

**Note**: With placeholder values, the app will deploy but payment/auth won't work until you add real values.

## 🚀 NEXT STEPS

1. **Add environment variables** (at minimum the Stripe ones to fix the build error)
2. **Redeploy** the project
3. **Build should complete successfully**
4. **Get your live URL!**

The build process is working perfectly now - just need those environment variables!

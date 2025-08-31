# 🔧 Minimal Environment Variables for Deployment

## 🚨 ISSUE IDENTIFIED
- Supabase placeholder values will cause build errors
- Webhook not needed for initial deployment
- Variable name validation error in Vercel

## ✅ MINIMAL WORKING ENVIRONMENT VARIABLES

**Add only these 3 Stripe variables for now:**

```
STRIPE_SECRET_KEY=sk_test_...your_actual_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...your_actual_publishable_key
NEXT_PUBLIC_STRIPE_PRICE_ID=price_...your_actual_price_id
```

## 🔧 FIX THE VARIABLE NAME ERROR

I see the error: "The name contains invalid characters. Only letters, digits, and underscores are allowed."

**The variable name should be:**
```
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

**NOT:**
```
Next Public Supabase Anon Key
```

## 🎯 CORRECTED STEPS

1. **Delete the current variable** with the invalid name
2. **Add only these 3 Stripe variables:**
   - Name: `STRIPE_SECRET_KEY`
   - Name: `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - Name: `NEXT_PUBLIC_STRIPE_PRICE_ID`
3. **Skip Supabase variables for now** (they'll cause build errors with placeholder values)
4. **Skip webhook secret** (not needed yet)

## 🚀 AFTER ADDING STRIPE VARIABLES

1. **Save all 3 variables**
2. **Go to Deployments tab**
3. **Redeploy with "Use existing Build Cache: No"**

## ✅ EXPECTED RESULT

With just the 3 Stripe variables:
- ✅ Build should complete successfully
- ✅ Site will deploy with working Stripe checkout
- ✅ Demo mode will work
- ⚠️ Auth features won't work (but that's OK for now)

## 🎉 NEXT STEPS AFTER DEPLOYMENT

1. **Get your live URL**
2. **Test the demo and purchase flow**
3. **Set up Supabase later** (optional)
4. **Add webhook after testing**

This minimal approach will get your site live immediately!

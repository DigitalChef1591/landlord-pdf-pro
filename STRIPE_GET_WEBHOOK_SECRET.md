# 🔑 Get Your Stripe Webhook Secret

## ✅ Webhook Created Successfully!
Great job! Your webhook is now created and visible in your Stripe dashboard.

## 🔍 Finding Your Webhook Secret

### Method 1: Click on Your Webhook
1. In your Stripe dashboard, you should see your webhook listed
2. Click on the webhook you just created (probably named "land-lord")
3. Look for a section called **"Signing secret"**
4. Click **"Reveal"** or **"Click to reveal"**
5. Copy the secret (starts with `whsec_...`)

### Method 2: From Webhook Details Page
1. Go to Stripe Dashboard → Webhooks
2. Find your webhook in the list
3. Click on it to open the details
4. Scroll down to find the "Signing secret" section
5. Reveal and copy the secret

## 📋 What You Need to Add to Vercel
Once you have the webhook secret, you need to add these 4 Stripe environment variables to Vercel:

### 1. Webhook Secret (you just got this)
- **Key**: `STRIPE_WEBHOOK_SECRET`
- **Value**: `whsec_...` (the secret you just copied)

### 2. Stripe Secret Key
- **Key**: `STRIPE_SECRET_KEY`
- **Value**: Go to Stripe → Developers → API Keys → Secret key (starts with `sk_test_...`)

### 3. Stripe Publishable Key
- **Key**: `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- **Value**: Go to Stripe → Developers → API Keys → Publishable key (starts with `pk_test_...`)

### 4. Stripe Price ID (need to create a product first)
- **Key**: `NEXT_PUBLIC_STRIPE_PRICE_ID`
- **Value**: Create a $29 product in Stripe → Products, copy the price ID (starts with `price_...`)

## 🚀 Next Steps
1. Find and copy your webhook secret
2. Get your Stripe API keys
3. Create a $29 product in Stripe
4. Add all 4 environment variables to Vercel
5. Test your payment flow!

---

**Current Step**: Find your webhook secret by clicking on the webhook in your Stripe dashboard

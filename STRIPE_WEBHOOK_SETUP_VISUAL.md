# 🔗 Stripe Webhook Setup - Visual Guide

## ✅ You're in the Right Place!
I can see you're in Stripe Dashboard → Webhooks section. Perfect!

## 📍 Step-by-Step Instructions

### 1. Click the Purple Button
Click the **"+ Add destination"** button (the purple button you can see in your screenshot)

### 2. Fill in the Webhook Details
When the form opens, enter:

**Endpoint URL:**
```
https://your-vercel-url.vercel.app/api/stripe/webhook
```
*(Replace `your-vercel-url` with your actual Vercel deployment URL)*

**Description:** (optional)
```
Landlord PDF Pro Payment Webhook
```

### 3. Select Events to Listen For
In the "Events to send" section:
- Click "Select events"
- Search for: `checkout.session.completed`
- Check the box next to it
- Click "Add events"

### 4. Create the Webhook
- Click "Add endpoint" or "Create webhook"

### 5. Copy the Webhook Secret
After creating the webhook:
- You'll see a "Signing secret" section
- Click "Reveal" or "Click to reveal"
- Copy the secret (starts with `whsec_...`)
- Add this to Vercel as `STRIPE_WEBHOOK_SECRET`

## 🎯 What You Need for Vercel
After setting up the webhook, you'll have all the Stripe environment variables:

1. **STRIPE_SECRET_KEY** - from Stripe → Developers → API Keys
2. **NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY** - from Stripe → Developers → API Keys  
3. **NEXT_PUBLIC_STRIPE_PRICE_ID** - from creating a $29 product
4. **STRIPE_WEBHOOK_SECRET** - from the webhook you just created

## 🚀 Next Steps
1. Click that purple "Add destination" button
2. Set up the webhook endpoint
3. Copy the webhook secret
4. Add all Stripe variables to Vercel
5. Test your payment flow!

---

**Current Step**: Click the purple "+ Add destination" button in your Stripe dashboard

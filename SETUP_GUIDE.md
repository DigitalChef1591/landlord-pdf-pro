# 🚀 Complete Setup Guide - Landlord PDF Pro

This guide will walk you through setting up everything from scratch, including getting all the API keys and deploying to production.

## 📋 Prerequisites

- GitHub account
- Credit card for Stripe (no charges during setup)
- Email address for Supabase account

## 🗄️ Step 1: Set Up Supabase Database (10 minutes)

### 1.1 Create Supabase Account
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project" 
3. Sign up with GitHub or email
4. Create a new organization (use your name)

### 1.2 Create New Project
1. Click "New Project"
2. Choose your organization
3. **Project Name**: `landlord-pdf-pro`
4. **Database Password**: Generate a strong password (save this!)
5. **Region**: Choose closest to your users
6. Click "Create new project"
7. Wait 2-3 minutes for setup

### 1.3 Get Your Supabase Keys
1. In your project dashboard, go to **Settings** → **API**
2. Copy these values (save them!):
   - **Project URL** (starts with `https://`)
   - **anon public key** (starts with `eyJ`)
   - **service_role key** (starts with `eyJ`) - click "Reveal" first

### 1.4 Set Up Database Schema
1. Go to **SQL Editor** in the left sidebar
2. Click "New query"
3. Copy the entire contents of `infra/supabase/schema.sql` from this project
4. Paste it into the SQL editor
5. Click "Run" (bottom right)
6. You should see "Success. No rows returned"

### 1.5 Create Storage Buckets
1. Go to **Storage** in the left sidebar
2. Click "Create a new bucket"
3. Create these 3 buckets (one by one):
   - **Name**: `photos`, **Public**: OFF
   - **Name**: `signatures`, **Public**: OFF  
   - **Name**: `exports`, **Public**: OFF

## 💳 Step 2: Set Up Stripe Payments (10 minutes)

### 2.1 Create Stripe Account
1. Go to [stripe.com](https://stripe.com)
2. Click "Start now"
3. Sign up with email
4. Complete business verification (can skip for testing)

### 2.2 Create Product
1. In Stripe Dashboard, go to **Products**
2. Click "Add product"
3. **Name**: `Landlord PDF Pro`
4. **Description**: `Professional property inspection reports - one-time purchase`
5. **Pricing**: 
   - **Price**: `$29.00`
   - **Billing**: `One time`
   - **Currency**: `USD`
6. Click "Save product"
7. **Copy the Price ID** (starts with `price_`) - save this!

### 2.3 Get Stripe Keys
1. Go to **Developers** → **API keys**
2. Copy these values (save them!):
   - **Publishable key** (starts with `pk_test_`)
   - **Secret key** (starts with `sk_test_`) - click "Reveal token"

### 2.4 Set Up Webhook (We'll do this after deployment)

## 🌐 Step 3: Deploy to Vercel (5 minutes)

### 3.1 Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Connect your GitHub account

### 3.2 Deploy Project
1. Push this project to your GitHub repository
2. In Vercel dashboard, click "New Project"
3. Import your GitHub repository
4. **Framework Preset**: Next.js
5. **Root Directory**: `apps/web`
6. Click "Deploy"
7. Wait for deployment (2-3 minutes)
8. **Copy your deployment URL** (e.g., `https://your-app.vercel.app`)

### 3.3 Add Environment Variables
1. In Vercel project dashboard, go to **Settings** → **Environment Variables**
2. Add these variables one by one:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ... (your anon key)
SUPABASE_SERVICE_ROLE_KEY=eyJ... (your service role key)
STRIPE_SECRET_KEY=sk_test_... (your stripe secret key)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_... (your stripe publishable key)
NEXT_PUBLIC_STRIPE_PRICE_ID=price_... (your stripe price ID)
```

3. Click "Save" for each variable
4. Go to **Deployments** tab
5. Click "..." on latest deployment → "Redeploy"

## 🔗 Step 4: Complete Stripe Webhook Setup (5 minutes)

### 4.1 Create Webhook Endpoint
1. Back in Stripe Dashboard, go to **Developers** → **Webhooks**
2. Click "Add endpoint"
3. **Endpoint URL**: `https://your-vercel-app.vercel.app/api/stripe/webhook`
4. **Events to send**: Select `checkout.session.completed`
5. Click "Add endpoint"

### 4.2 Get Webhook Secret
1. Click on your newly created webhook
2. Go to **Signing secret** section
3. Click "Reveal" and copy the webhook secret (starts with `whsec_`)

### 4.3 Add Webhook Secret to Vercel
1. Back in Vercel, go to **Settings** → **Environment Variables**
2. Add: `STRIPE_WEBHOOK_SECRET=whsec_...` (your webhook secret)
3. Redeploy again

## 🔧 Step 5: Configure Supabase Auth (3 minutes)

### 5.1 Set Auth Redirect URLs
1. In Supabase dashboard, go to **Authentication** → **URL Configuration**
2. **Site URL**: `https://your-vercel-app.vercel.app`
3. **Redirect URLs**: Add these (one per line):
   ```
   https://your-vercel-app.vercel.app/auth/callback
   http://localhost:3000/auth/callback
   ```
4. Click "Save"

## ✅ Step 6: Test Everything (5 minutes)

### 6.1 Test the Website
1. Visit your Vercel URL
2. Click "Try Free Demo" - should work without login
3. Click "Sign In" - should show login page
4. Enter your email - should send magic link
5. Check email and click link - should redirect to purchase page

### 6.2 Test Payment Flow
1. Click "Buy Now - $29"
2. Use Stripe test card: `4242 4242 4242 4242`
3. Any future date, any CVC, any ZIP
4. Complete purchase
5. Should redirect to thank you page
6. Check Stripe dashboard for successful payment

### 6.3 Test Dashboard Access
1. After purchase, you should be redirected to dashboard
2. Dashboard should show "Pro Account" badge
3. All features should be accessible

## 🎉 You're Live!

Your app is now live and ready to make money! Here's what you have:

- ✅ Professional landing page
- ✅ Working payment system ($29 one-time)
- ✅ User authentication
- ✅ Protected dashboard
- ✅ PDF generation system
- ✅ Secure database with user data

## 💰 Start Making Money

1. **Share your Vercel URL** with potential customers
2. **Set up Google Analytics** (optional):
   - Create GA4 property
   - Add tracking code to `apps/web/src/app/layout.tsx`
3. **Go live with Stripe**:
   - In Stripe dashboard, toggle to "Live mode"
   - Get live API keys and update Vercel environment variables
4. **Custom domain** (optional):
   - Buy domain from Namecheap/GoDaddy
   - In Vercel, go to Settings → Domains
   - Add your custom domain

## 🆘 Troubleshooting

**Can't sign in?**
- Check Supabase auth redirect URLs
- Verify environment variables in Vercel

**Payment not working?**
- Check Stripe webhook is receiving events
- Verify webhook secret in Vercel
- Check Stripe dashboard for errors

**PDF generation failing?**
- Check Vercel function logs
- Verify Supabase storage buckets exist

**Need help?**
- Check Vercel deployment logs
- Check Supabase logs in dashboard
- All error messages will show in browser console

## 📈 Next Steps for Growth

1. **SEO**: Add meta tags, sitemap, blog content
2. **Marketing**: Social media, property management forums
3. **Features**: Mobile apps, team accounts, integrations
4. **Analytics**: Track conversion rates, user behavior
5. **Support**: Add help docs, email support

You now have a complete SaaS business ready to generate revenue! 🚀

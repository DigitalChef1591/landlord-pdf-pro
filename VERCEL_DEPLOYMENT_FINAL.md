# Vercel Deployment - Final Steps

## Current Status
- ✅ Application builds successfully locally
- ✅ TypeScript compilation passes
- ✅ All components and pages are working
- 🔄 Vercel deployment needs Git repository connection

## Option 1: Connect Git Repository (Recommended)

### Step 1: Create GitHub Repository
1. Go to GitHub and create a new repository named `landlord-pdf-pro`
2. Make it public or private (your choice)
3. Don't initialize with README (we already have files)

### Step 2: Connect Local Repository
```bash
# From the root directory (c:/LandLord)
git init
git add .
git commit -m "Initial commit - Landlord PDF Pro monorepo"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/landlord-pdf-pro.git
git push -u origin main
```

### Step 3: Connect to Vercel
1. In the Vercel dashboard, click "Connect Git Repository"
2. Select your GitHub repository `landlord-pdf-pro`
3. Configure the project settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `apps/web`
   - **Build Command**: `cd ../.. && pnpm install && cd apps/web && pnpm run build`
   - **Install Command**: `cd ../.. && pnpm install`
   - **Output Directory**: `.next` (default)

### Step 4: Environment Variables
Add these in Vercel dashboard under Settings > Environment Variables:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_STRIPE_PRICE_ID=your_stripe_price_id
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

## Option 2: Manual Deployment Fix

If you prefer to continue with the current setup:

1. Go to Vercel Project Settings
2. Set **Root Directory** to `apps/web`
3. Set **Install Command** to `cd ../.. && pnpm install`
4. Set **Build Command** to `pnpm run build`
5. Redeploy

## Expected URLs After Successful Deployment

- **Production URL**: `https://landlord-pdf-pro.vercel.app`
- **Stripe Webhook URL**: `https://landlord-pdf-pro.vercel.app/api/stripe/webhook`

## Post-Deployment Setup

### 1. Configure Stripe Webhook
- Go to Stripe Dashboard > Webhooks
- Add endpoint: `https://your-domain.vercel.app/api/stripe/webhook`
- Select events: `checkout.session.completed`

### 2. Test the Application
- Visit the deployed URL
- Test the demo functionality
- Test the purchase flow
- Verify webhook integration

### 3. Mobile App Deployment
```bash
cd apps/mobile
eas build --platform all
```

## Troubleshooting

If deployment still fails:
1. Check Vercel build logs for specific errors
2. Ensure all environment variables are set
3. Verify the root directory is set to `apps/web`
4. Check that pnpm is being used instead of npm

## Success Criteria
- ✅ Web app loads at production URL
- ✅ Landing page displays correctly
- ✅ Demo functionality works with watermarks
- ✅ Purchase flow redirects to Stripe
- ✅ Authentication system works
- ✅ Dashboard loads for authenticated users

The application is production-ready and will generate revenue immediately upon successful deployment!

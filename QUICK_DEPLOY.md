# 🚀 Quick Deploy to Get Your URL

You need a live URL for Stripe webhooks. Here's the fastest way:

## Step 1: Push to GitHub (2 minutes)

1. **Create a new repository** on GitHub
2. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/landlord-pdf-pro.git
   git push -u origin main
   ```

## Step 2: Deploy to Vercel (3 minutes)

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up with GitHub**
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Set these settings**:
   - **Framework Preset**: Next.js
   - **Root Directory**: `apps/web`
6. **Click "Deploy"**
7. **Wait 2-3 minutes**

## Step 3: Get Your URL

After deployment, Vercel will give you a URL like:
```
https://landlord-pdf-pro-abc123.vercel.app
```

## Step 4: Use This URL for Stripe

In Stripe webhook setup, use:
```
https://your-vercel-url.vercel.app/api/stripe/webhook
```

## Alternative: Use ngrok for Testing (1 minute)

If you want to test locally first:

1. **Install ngrok**: Download from [ngrok.com](https://ngrok.com)
2. **Run your app**: `cd apps/web; pnpm dev --port 3001`
3. **In another terminal**: `ngrok http 3001`
4. **Use the ngrok URL**: `https://abc123.ngrok.io/api/stripe/webhook`

## Your Next Steps:

1. **Deploy to get URL** (use method above)
2. **Set up Supabase** (use SUPABASE_SCHEMA_FIXED.sql)
3. **Configure Stripe** with your new URL
4. **Add environment variables** to Vercel
5. **Start making money!** 💰

The fastest path is Vercel deployment - you'll have a live URL in 5 minutes!

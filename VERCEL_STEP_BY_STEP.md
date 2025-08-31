# 📱 Vercel Deployment - Step by Step Screenshots Guide

## Step 1: Go to Vercel Website

1. **Open your web browser**
2. **Type**: `vercel.com` in the address bar
3. **Press Enter**

## Step 2: Sign Up with GitHub

1. **You'll see the Vercel homepage**
2. **Look for a button that says "Start Deploying" or "Sign Up"**
3. **Click it**
4. **You'll see login options**
5. **Click "Continue with GitHub"** (it has the GitHub logo)
6. **If you don't have GitHub account**: 
   - Click "Create account" on GitHub
   - Use your email and create password
   - Verify your email

## Step 3: Authorize Vercel

1. **GitHub will ask "Authorize Vercel?"**
2. **Click "Authorize vercel"** (green button)
3. **You'll be redirected back to Vercel**

## Step 4: Create New Project

1. **You'll see your Vercel dashboard**
2. **Look for a button "Add New..." or "New Project"**
3. **Click "New Project"**

## Step 5: Import Repository

1. **You'll see "Import Git Repository" page**
2. **If you haven't pushed to GitHub yet, do this first**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```
3. **Click "Import" next to your repository**
4. **If you don't see it, click "Adjust GitHub App Permissions"**

## Step 6: Configure Project

1. **Project Name**: Leave as is or change
2. **Framework Preset**: Should auto-detect "Next.js"
3. **Root Directory**: Click "Edit" and type `apps/web`
4. **Build and Output Settings**: Leave default
5. **Environment Variables**: Skip for now (we'll add later)

## Step 7: Deploy

1. **Click "Deploy"** (big blue button)
2. **Wait 2-3 minutes** (you'll see build logs)
3. **When done, you'll see "🎉 Your project has been deployed"**

## Step 8: Get Your URL

1. **You'll see your live URL**: `https://your-project-name.vercel.app`
2. **Click "Visit" to test it**
3. **Copy this URL** - you need it for Stripe!

## What If It Doesn't Work?

**Common Issues:**

1. **Build fails**: Check that `apps/web` has `package.json`
2. **Can't find repo**: Make sure you pushed to GitHub first
3. **Wrong directory**: Make sure Root Directory is `apps/web`

**Need the URL immediately?** Use ngrok:
1. Download ngrok.com
2. Run: `ngrok http 3001`
3. Use the https URL it gives you

## Your URL for Stripe:

Once deployed, your webhook URL will be:
```
https://your-vercel-url.vercel.app/api/stripe/webhook
```

**That's it! You now have a live URL for Stripe webhooks! 🎉**

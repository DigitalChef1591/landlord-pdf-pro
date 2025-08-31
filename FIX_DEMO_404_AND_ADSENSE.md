# 🚨 Fix Demo 404 Error + Add Real AdSense Code

## 🎯 TWO ISSUES TO FIX:

### 1. Demo Page 404 Error
The `/demo` page exists but shows 404 - likely due to missing environment variable causing build failure.

### 2. AdSense Verification
Google provided your real AdSense code: `ca-pub-3590755249240804`

---

## 🔧 SOLUTION: Update Vercel Environment Variables

### Step 1: Go to Vercel Dashboard
1. Go to **Vercel.com** → **Dashboard**
2. Click on **landlordpdfpro.net** project
3. Click **Settings** tab
4. Click **Environment Variables** in sidebar

### Step 2: Add/Update These Variables
```
NEXT_PUBLIC_ADSENSE_CLIENT_ID = ca-pub-3590755249240804
NEXT_PUBLIC_SUPABASE_URL = (your existing value)
NEXT_PUBLIC_SUPABASE_ANON_KEY = (your existing value)
SUPABASE_SERVICE_ROLE_KEY = (your existing value)
STRIPE_SECRET_KEY = (your existing value)
STRIPE_WEBHOOK_SECRET = (your existing value)
NEXT_PUBLIC_STRIPE_PRICE_ID = (your existing value)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = (your existing value)
```

### Step 3: Redeploy
1. After adding the AdSense variable, click **Redeploy** 
2. Or go to **Deployments** tab → click **⋯** on latest → **Redeploy**

---

## ✅ EXPECTED RESULTS:

### After Redeployment:
- ✅ `https://landlordpdfpro.net/demo` will work (no more 404)
- ✅ Real AdSense code will be in your site's `<head>`
- ✅ Google can verify your site ownership

### Then Complete AdSense Verification:
1. Go back to Google AdSense verification page
2. Check **"I've placed the code"** checkbox
3. Click **"Verify"** button
4. Google will confirm your site is ready for ads

---

## 💰 REVENUE IMPACT:

Once verified:
- **Real AdSense ads** will start showing (not demo placeholders)
- **Revenue generation** begins immediately
- **$1-5 per 1000 visitors** potential earnings

---

## 🚀 QUICK ACTION STEPS:

1. **Add AdSense variable** to Vercel: `ca-pub-3590755249240804`
2. **Redeploy** the site
3. **Test** `https://landlordpdfpro.net/demo` (should work)
4. **Verify** with Google AdSense
5. **Start making money!**

**ACTION NEEDED**: Add the AdSense environment variable to Vercel now!

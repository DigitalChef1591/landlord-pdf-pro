# 🔧 Vercel Build Commands - PowerShell Compatible

## Issue
The build commands with `&&` syntax don't work on Windows PowerShell. Vercel runs on Linux, so we need different commands.

## ✅ CORRECT BUILD COMMANDS FOR VERCEL

### Build Command:
```
pnpm run build
```

### Install Command:
```
pnpm install
```

### Output Directory:
```
.next
```

## 🎯 STEP-BY-STEP FIX

1. **Go to Vercel Dashboard** → Your Project → **Settings** → **Build & Development Settings**

2. **Set these exact values:**
   - **Build Command**: `pnpm run build`
   - **Install Command**: `pnpm install`  
   - **Output Directory**: `.next`
   - **Root Directory**: `apps/web` (already correct)

3. **Save Settings**

4. **Go to Deployments Tab** → **Redeploy** → **Use existing Build Cache: No** → **Redeploy**

## 🔍 WHY THIS WORKS

- **Root Directory**: `apps/web` tells Vercel to run commands from inside the web app directory
- **Install Command**: `pnpm install` installs dependencies from the web app's package.json
- **Build Command**: `pnpm run build` builds the Next.js app (dependencies already installed by Install Command)
- **Output Directory**: `.next` is where Next.js puts the built files

## 🚨 ALTERNATIVE: Use Turbo Commands

If the above doesn't work, try these Turbo-specific commands:

### Build Command:
```
turbo run build --filter=web
```

### Install Command:
```
pnpm install
```

## 📋 EXPECTED RESULT

After fixing the build commands:
- Deployment should start successfully
- Build logs should show pnpm installing dependencies
- Next.js build should complete without errors
- You'll get a live URL like: `https://landlord-pdf-pro-[hash].vercel.app`

## 🎉 NEXT STEPS AFTER SUCCESSFUL DEPLOYMENT

1. **Add Environment Variables** (in Vercel Settings → Environment Variables)
2. **Configure Stripe Webhook** with the live URL
3. **Set up Supabase Database** using the SQL schema
4. **Test the live application**

The PowerShell syntax issue was preventing deployment - these Linux-compatible commands should work perfectly in Vercel's build environment!

# VERCEL DEPLOYMENT - FINAL SOLUTION

## The Issue
Vercel cannot detect Next.js in our monorepo structure, even with Root Directory set to `apps/web`.

## SOLUTION: Deploy Only the Web App

### Step 1: Create a Separate Repository for Web App Only

1. **Create new GitHub repository**: `landlord-pdf-pro-web`

2. **Copy only the web app files**:
```bash
# Create new directory
mkdir landlord-pdf-pro-web
cd landlord-pdf-pro-web

# Copy web app files
cp -r ../LandLord/apps/web/* .
cp -r ../LandLord/apps/web/.* . 2>/dev/null || true

# Copy shared packages (flatten them)
mkdir -p lib/shared
cp -r ../LandLord/packages/core/src/* lib/shared/
cp -r ../LandLord/packages/ui/src/* lib/shared/

# Initialize git
git init
git add .
git commit -m "Standalone web app for Vercel deployment"
git branch -M main
git remote add origin https://github.com/DigitalChef1591/landlord-pdf-pro-web.git
git push -u origin main
```

### Step 2: Update package.json Dependencies

Replace workspace dependencies with actual packages:
```json
{
  "dependencies": {
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-slot": "^1.2.3",
    "@react-pdf/renderer": "^3.4.5",
    "@stripe/stripe-js": "^7.9.0",
    "@supabase/ssr": "^0.7.0",
    "@supabase/supabase-js": "^2.38.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.542.0",
    "next": "^15.5.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "stripe": "^18.5.0",
    "tailwind-merge": "^3.3.1",
    "zod": "^3.23.8"
  }
}
```

### Step 3: Deploy to Vercel

1. **Go to Vercel Dashboard**
2. **Import from GitHub**: `landlord-pdf-pro-web`
3. **Leave all settings as default** (no Root Directory needed)
4. **Deploy**

## Alternative: Use Vercel CLI with Specific Configuration

If you want to keep the monorepo:

1. **Create vercel.json in apps/web**:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ]
}
```

2. **Deploy from apps/web directory**:
```bash
cd apps/web
npx vercel --prod
```

## Why This Works

- **Standalone app**: Vercel sees a normal Next.js project
- **No monorepo complexity**: Direct package.json with Next.js dependency
- **Standard structure**: Vercel auto-detects everything correctly

## Expected Result

✅ Next.js detected immediately
✅ Build succeeds
✅ Live URL works
✅ Ready to make money

Choose the approach that works best for you!

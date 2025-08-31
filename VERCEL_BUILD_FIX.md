# Vercel Build Fix Guide

## Issues Fixed

The Vercel deployment was failing with "Command 'turbo run build' exited with 2" because:

1. **Missing Build Scripts**: Some packages didn't have `build` scripts defined
2. **Incorrect Package Exports**: Core and PDF packages were pointing to source files instead of built files
3. **Turbo Configuration**: Missing output directories for TypeScript compilation

## Changes Made

### 1. Updated turbo.json
- Added `dist/**` and `lib/**` to build outputs
- Added `typecheck` task for consistency

### 2. Fixed Package Configurations

**packages/core/package.json**:
- Changed `main` from `./src/index.ts` to `./dist/index.js`
- Changed `types` from `./src/index.ts` to `./dist/index.d.ts`
- Added proper `exports` field

**packages/pdf/package.json**:
- Changed `main` from `./src/index.ts` to `./dist/index.js`
- Changed `types` from `./src/index.ts` to `./dist/index.d.ts`
- Added proper `exports` field

**packages/ui/package.json**:
- Added `build` script (no-op since UI components don't need compilation)

**packages/eslint-config/package.json**:
- Added `build`, `lint`, and `check-types` scripts (no-ops)

**packages/typescript-config/package.json**:
- Added `build`, `lint`, and `check-types` scripts (no-ops)

## Vercel Deployment Steps

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Import Project**: Click "Add New..." → "Project"
3. **Select Repository**: Choose `DigitalChef1591/landlord-pdf-pro`
4. **Configure Build Settings**:
   - Framework Preset: `Next.js`
   - Root Directory: `apps/web`
   - Build Command: `cd ../.. && pnpm run build --filter=web`
   - Output Directory: `apps/web/.next`
   - Install Command: `cd ../.. && pnpm install`

## Environment Variables for Vercel

Add these in Vercel Dashboard → Project Settings → Environment Variables:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_STRIPE_PRICE_ID=your_stripe_price_id
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

## Alternative: Deploy Only Web App

If the monorepo build continues to have issues, you can deploy just the web app:

1. **Create a new branch with just the web app**:
```bash
git checkout -b web-only
mkdir temp-web
cp -r apps/web/* temp-web/
rm -rf *
mv temp-web/* .
rm -rf temp-web
```

2. **Update package.json** (remove workspace dependencies):
```json
{
  "dependencies": {
    "@landlord/core": "file:./lib/core",
    "@landlord/pdf": "file:./lib/pdf"
  }
}
```

3. **Copy shared code to lib folders**:
```bash
mkdir -p lib/core lib/pdf
cp -r ../packages/core/src lib/core/
cp -r ../packages/pdf/src lib/pdf/
```

## Testing the Build Locally

Before deploying, test the build locally:

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Check if web app builds successfully
cd apps/web
pnpm run build
```

## Common Issues and Solutions

### Issue: "Module not found" errors
**Solution**: Ensure all workspace dependencies are properly built and exported

### Issue: "TypeScript compilation errors"
**Solution**: Run `pnpm run check-types` to identify and fix type errors

### Issue: "Turbo cache issues"
**Solution**: Clear Turbo cache with `pnpm exec turbo clean`

## Next Steps After Successful Deployment

1. **Get the Vercel URL** (e.g., `https://your-app.vercel.app`)
2. **Configure Stripe Webhook**:
   - Go to Stripe Dashboard → Webhooks
   - Add endpoint: `https://your-app.vercel.app/api/stripe/webhook`
   - Select events: `checkout.session.completed`
3. **Test the payment flow**
4. **Set up Supabase database** using the provided schema

The build should now work correctly with these fixes!

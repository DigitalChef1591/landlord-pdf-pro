# VERCEL NEXT.JS DETECTION FIX

## The Problem
Vercel shows: "No Next.js version detected. Make sure your package.json has "next" in either "dependencies" or "devDependencies". Also check your Root Directory setting matches the directory of your package.json file."

## The Solution

### Step 1: Go to Vercel Project Settings
1. Go to your Vercel dashboard
2. Click on your `landlord-pdf-pro` project
3. Click "Settings" tab
4. Click "General" in the left sidebar

### Step 2: Configure Root Directory
1. Scroll down to "Root Directory"
2. **IMPORTANT**: Set it to `apps/web` (not empty, not `.`)
3. Click "Save"

### Step 3: Configure Build Settings
1. Still in Settings, scroll to "Build & Development Settings"
2. Set these values:
   - **Framework Preset**: `Next.js`
   - **Build Command**: Leave empty (use default)
   - **Install Command**: Leave empty (use default)
   - **Output Directory**: Leave empty (use default)

### Step 4: Redeploy
1. Go to "Deployments" tab
2. Click "..." on the latest deployment
3. Click "Redeploy"
4. OR trigger a new deployment by pushing a small change to GitHub

## Alternative: Delete and Recreate Project

If the above doesn't work:

### Step 1: Delete Current Project
1. Go to Settings > General
2. Scroll to bottom
3. Click "Delete Project"
4. Type project name to confirm

### Step 2: Create New Project
1. Go to Vercel dashboard
2. Click "Add New..." > "Project"
3. Import from GitHub: `DigitalChef1591/landlord-pdf-pro`
4. **CRITICAL**: Set Root Directory to `apps/web` BEFORE clicking Deploy
5. Configure build settings as above
6. Click "Deploy"

## Why This Happens
- Vercel defaults to looking in the root directory
- Our Next.js app is in `apps/web` subdirectory
- Without proper Root Directory setting, Vercel can't find package.json with Next.js dependency

## Expected Result
After fixing, you should see:
- ✅ "Next.js detected"
- ✅ Build starts successfully
- ✅ Deployment completes
- ✅ Live URL works

## Verification
The fix worked if you see in build logs:
```
✓ Next.js build successful
✓ Deployment completed
```

Instead of:
```
❌ No Next.js version detected

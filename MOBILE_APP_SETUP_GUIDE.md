# 📱 Mobile App Setup Guide - Landlord PDF Pro

This guide will walk you through setting up the mobile app with all required services: Supabase, RevenueCat, and AdMob.

## 📋 Prerequisites

- Completed web app setup (see SETUP_GUIDE.md)
- Apple Developer Account ($99/year) for iOS
- Google Play Console Account ($25 one-time) for Android
- RevenueCat account (free)
- AdMob account (free)

## 🗄️ Step 1: Use Existing Supabase Configuration (2 minutes)

Since you already have Supabase set up for the web app, we'll use the same configuration:

### 1.1 Get Your Supabase Values
From your existing Supabase project:
1. Go to **Settings** → **API**
2. Copy these values:
   - **Project URL**: `https://your-project-id.supabase.co`
   - **anon public key**: `eyJ...`

### 1.2 Update Mobile Environment Variables
1. Open `apps/mobile/.env`
2. Replace the Supabase values:
```env
EXPO_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=eyJ...your-anon-key...
```

## 💰 Step 2: Set Up RevenueCat (15 minutes)

RevenueCat handles in-app purchases and subscription management across iOS and Android.

### 2.1 Create RevenueCat Account
1. Go to [revenuecat.com](https://revenuecat.com)
2. Sign up with email
3. Create a new app:
   - **App name**: `Landlord PDF Pro`
   - **Bundle ID**: `com.landlordpdfpro.app` (or your preferred bundle ID)

### 2.2 Configure iOS App Store Connect
1. **Create App in App Store Connect**:
   - Go to [appstoreconnect.apple.com](https://appstoreconnect.apple.com)
   - Click "My Apps" → "+" → "New App"
   - **Platform**: iOS
   - **Name**: `Landlord PDF Pro`
   - **Bundle ID**: Same as RevenueCat
   - **SKU**: `landlord-pdf-pro-ios`
   - **User Access**: Full Access

2. **Create In-App Purchase**:
   - In your app, go to **Features** → **In-App Purchases**
   - Click "+" → **Non-Consumable**
   - **Product ID**: `landlord_pro_unlock`
   - **Reference Name**: `Pro Unlock`
   - **Price**: Tier 30 ($29.99)
   - **Display Name**: `Landlord PDF Pro`
   - **Description**: `Unlock all professional features including unlimited exports, no watermarks, and premium templates.`
   - Submit for review (can take 24-48 hours)

3. **Connect to RevenueCat**:
   - In RevenueCat dashboard, go to **App settings** → **Apple App Store**
   - **App Store Connect Issuer ID**: Get from App Store Connect → Users and Access → Keys → Issuer ID
   - **Key ID**: Create new API key in App Store Connect
   - **Private Key**: Download .p8 file and paste contents
   - **Bundle ID**: Your app's bundle ID

### 2.3 Configure Google Play Console
1. **Create App in Google Play Console**:
   - Go to [play.google.com/console](https://play.google.com/console)
   - Click "Create app"
   - **App name**: `Landlord PDF Pro`
   - **Default language**: English (United States)
   - **App or game**: App
   - **Free or paid**: Free
   - **Package name**: `com.landlordpdfpro.app`

2. **Create In-App Product**:
   - Go to **Monetize** → **Products** → **In-app products**
   - Click "Create product"
   - **Product ID**: `landlord_pro_unlock`
   - **Name**: `Landlord PDF Pro`
   - **Description**: `Unlock all professional features`
   - **Price**: $29.99
   - **Status**: Active

3. **Connect to RevenueCat**:
   - In RevenueCat dashboard, go to **App settings** → **Google Play Store**
   - **Package name**: Your app's package name
   - **Service account key**: Create in Google Cloud Console and upload JSON

### 2.4 Create RevenueCat Entitlement
1. In RevenueCat dashboard, go to **Entitlements**
2. Click "New entitlement"
3. **Identifier**: `landlord_pro`
4. **Description**: `Landlord PDF Pro Features`
5. Attach products:
   - iOS: `landlord_pro_unlock`
   - Android: `landlord_pro_unlock`

### 2.5 Get RevenueCat API Keys
1. Go to **App settings** → **API keys**
2. Copy these values:
   - **iOS API Key**: `appl_...`
   - **Android API Key**: `goog_...`

### 2.6 Update Mobile Environment Variables
```env
EXPO_PUBLIC_REVENUECAT_API_KEY_IOS=appl_...your-ios-key...
EXPO_PUBLIC_REVENUECAT_API_KEY_ANDROID=goog_...your-android-key...
```

## 📱 Step 3: Set Up AdMob (10 minutes)

AdMob provides banner ads for additional revenue.

### 3.1 Create AdMob Account
1. Go to [admob.google.com](https://admob.google.com)
2. Sign in with Google account
3. Click "Get started"
4. Choose "I haven't published my app on Google Play or the App Store yet"

### 3.2 Add Your Apps
1. Click "Apps" → "Add app"
2. **For iOS**:
   - **Platform**: iOS
   - **App name**: `Landlord PDF Pro`
   - **App store URL**: Leave blank for now
3. **For Android**:
   - **Platform**: Android  
   - **App name**: `Landlord PDF Pro`
   - **Google Play URL**: Leave blank for now

### 3.3 Create Ad Units
For each app (iOS and Android):
1. Click on your app → "Ad units" → "Add ad unit"
2. **Format**: Banner
3. **Ad unit name**: `Main Banner`
4. Click "Create ad unit"
5. **Copy the Ad unit ID** (ca-app-pub-...)

### 3.4 Get AdMob App IDs
1. In AdMob, go to **Apps**
2. Click on each app to get the **App ID** (ca-app-pub-...)

### 3.5 Update Mobile Environment Variables
```env
EXPO_PUBLIC_ADMOB_APP_ID_IOS=ca-app-pub-...your-ios-app-id...
EXPO_PUBLIC_ADMOB_APP_ID_ANDROID=ca-app-pub-...your-android-app-id...
EXPO_PUBLIC_ADMOB_BANNER_UNIT_ID_IOS=ca-app-pub-...your-ios-banner-unit...
EXPO_PUBLIC_ADMOB_BANNER_UNIT_ID_ANDROID=ca-app-pub-...your-android-banner-unit...
```

## 🔗 Step 4: Set Up RevenueCat Webhook (5 minutes)

This connects RevenueCat purchases to your Supabase database.

### 4.1 Create Supabase Edge Function
1. In Supabase dashboard, go to **Edge Functions**
2. Click "Create a new function"
3. **Function name**: `revenuecat-webhook`
4. Replace the code with:

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const body = await req.json()
    
    // RevenueCat webhook event
    if (body.event && body.event.type === 'INITIAL_PURCHASE') {
      const userId = body.event.app_user_id
      
      // Update user entitlements
      const { error } = await supabaseClient
        .from('entitlements')
        .upsert({
          user_id: userId,
          paid: true,
          source: 'revenuecat',
          updated_at: new Date().toISOString()
        })

      if (error) {
        console.error('Error updating entitlements:', error)
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
```

5. Click "Deploy function"

### 4.2 Configure RevenueCat Webhook
1. In RevenueCat dashboard, go to **Integrations** → **Webhooks**
2. Click "Add webhook"
3. **URL**: `https://your-project-id.supabase.co/functions/v1/revenuecat-webhook`
4. **Events**: Select `INITIAL_PURCHASE`
5. **Authorization header**: `Bearer your-supabase-anon-key`
6. Click "Add webhook"

## 🚀 Step 5: Test Mobile App (10 minutes)

### 5.1 Start Development Server
```bash
cd apps/mobile
npx expo start
```

### 5.2 Test on Device/Simulator
1. Install Expo Go app on your phone
2. Scan QR code from terminal
3. Or press 'i' for iOS simulator, 'a' for Android emulator

### 5.3 Test Core Features
1. **App Launch**: Should show onboarding screen
2. **Sign In**: Should work with magic link
3. **Paywall**: Should show RevenueCat purchase screen
4. **AdMob**: Should show banner ads (test ads initially)
5. **Navigation**: Should navigate between tabs

## 📦 Step 6: Build for App Stores (20 minutes)

### 6.1 Configure EAS Build
```bash
cd apps/mobile
npx eas build:configure
```

### 6.2 Update app.json
Make sure your `app.json` has correct values:
```json
{
  "expo": {
    "name": "Landlord PDF Pro",
    "slug": "landlord-pdf-pro",
    "version": "1.0.0",
    "ios": {
      "bundleIdentifier": "com.landlordpdfpro.app"
    },
    "android": {
      "package": "com.landlordpdfpro.app"
    }
  }
}
```

### 6.3 Build for iOS
```bash
npx eas build --platform ios
```

### 6.4 Build for Android
```bash
npx eas build --platform android
```

## 📱 Step 7: Submit to App Stores (30 minutes)

### 7.1 iOS App Store
1. **Upload to TestFlight**:
   ```bash
   npx eas submit --platform ios
   ```
2. **App Store Connect**:
   - Add app description, screenshots, keywords
   - Set pricing (Free with in-app purchase)
   - Submit for review

### 7.2 Google Play Store
1. **Upload to Play Console**:
   ```bash
   npx eas submit --platform android
   ```
2. **Play Console**:
   - Add app description, screenshots, feature graphic
   - Set content rating
   - Submit for review

## ✅ Final Environment Variables

Your complete `apps/mobile/.env` should look like:

```env
# Supabase Configuration
EXPO_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=eyJ...your-anon-key...

# RevenueCat Configuration
EXPO_PUBLIC_REVENUECAT_API_KEY_IOS=appl_...your-ios-key...
EXPO_PUBLIC_REVENUECAT_API_KEY_ANDROID=goog_...your-android-key...

# Deep Link Configuration
EXPO_PUBLIC_DEEPLINK_SCHEME=landlordpro

# AdMob Configuration
EXPO_PUBLIC_ADMOB_APP_ID_IOS=ca-app-pub-...your-ios-app-id...
EXPO_PUBLIC_ADMOB_APP_ID_ANDROID=ca-app-pub-...your-android-app-id...
EXPO_PUBLIC_ADMOB_BANNER_UNIT_ID_IOS=ca-app-pub-...your-ios-banner-unit...
EXPO_PUBLIC_ADMOB_BANNER_UNIT_ID_ANDROID=ca-app-pub-...your-android-banner-unit...
```

## 🎉 You're Ready!

Your mobile app is now configured with:
- ✅ Supabase backend integration
- ✅ RevenueCat in-app purchases ($29.99)
- ✅ AdMob banner ads for additional revenue
- ✅ Cross-platform iOS and Android builds
- ✅ App store submission ready

## 💰 Revenue Streams

1. **In-App Purchases**: $29.99 one-time unlock
2. **Banner Ads**: Revenue from free users
3. **Cross-Platform**: Same purchase unlocks web + mobile

## 🆘 Troubleshooting

**RevenueCat not working?**
- Check API keys are correct
- Verify in-app products are approved
- Test with sandbox accounts

**AdMob not showing ads?**
- Use test ad units during development
- Verify app IDs are correct
- Check AdMob account is approved

**Build failing?**
- Check all environment variables are set
- Verify bundle IDs match across services
- Update Expo SDK if needed

**App store rejection?**
- Ensure in-app purchases work correctly
- Add privacy policy and terms of service
- Test on actual devices, not just simulators

You now have a complete mobile app ready to generate revenue across iOS and Android! 🚀

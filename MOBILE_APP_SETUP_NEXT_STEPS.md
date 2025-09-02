# 🚀 Mobile App Setup - Next Steps Guide

## Current Status: Ready for Service Configuration

The mobile app foundation is complete with all dependencies installed (181 packages). Now we need to configure the external services to make the app fully functional.

## 📋 Required Service Configurations

### 1. 🗄️ Supabase Configuration (REQUIRED)

**Status**: ✅ Database schema already deployed  
**Action**: Copy credentials from web app to mobile app

```bash
# From your Supabase dashboard (https://supabase.com/dashboard)
# Project: [Your Project Name]
# Settings > API

EXPO_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 2. 💰 RevenueCat Setup (REQUIRED for In-App Purchases)

**Status**: ❌ Needs setup  
**Priority**: HIGH - Required for mobile monetization

#### Step 1: Create RevenueCat Account
1. Go to https://www.revenuecat.com/
2. Sign up for free account
3. Create new project: "Landlord PDF Pro"

#### Step 2: Configure Products
1. In RevenueCat dashboard:
   - **Product ID**: `landlord_pro_unlock`
   - **Type**: Non-consumable
   - **Price**: $29.99
   - **Entitlement**: `pro_features`

#### Step 3: Get API Keys
```bash
# From RevenueCat dashboard > Apps > API Keys
EXPO_PUBLIC_REVENUECAT_API_KEY_IOS=appl_your_ios_key_here
EXPO_PUBLIC_REVENUECAT_API_KEY_ANDROID=goog_your_android_key_here
```

### 3. 📱 App Store Connect & Google Play Console

#### iOS App Store Connect
1. Go to https://appstoreconnect.apple.com/
2. Create new app: "Landlord PDF Pro"
3. Bundle ID: `com.landlordpdfpro.app`
4. Configure in-app purchase: `landlord_pro_unlock` ($29.99)

#### Google Play Console
1. Go to https://play.google.com/console/
2. Create new app: "Landlord PDF Pro"
3. Package name: `com.landlordpdfpro.app`
4. Configure in-app product: `landlord_pro_unlock` ($29.99)

### 4. 📊 AdMob Setup (OPTIONAL - Additional Revenue)

**Status**: ❌ Optional setup  
**Priority**: MEDIUM - Additional revenue stream

#### Step 1: Create AdMob Account
1. Go to https://admob.google.com/
2. Create account and new app
3. App name: "Landlord PDF Pro"

#### Step 2: Create Ad Units
- **Banner Ad Unit**: For bottom banner ads
- **Interstitial Ad Unit**: For full-screen ads (optional)

#### Step 3: Get AdMob IDs
```bash
EXPO_PUBLIC_ADMOB_APP_ID_IOS=ca-app-pub-1234567890123456~1234567890
EXPO_PUBLIC_ADMOB_APP_ID_ANDROID=ca-app-pub-1234567890123456~1234567890
EXPO_PUBLIC_ADMOB_BANNER_UNIT_ID_IOS=ca-app-pub-1234567890123456/1234567890
EXPO_PUBLIC_ADMOB_BANNER_UNIT_ID_ANDROID=ca-app-pub-1234567890123456/1234567890
```

## 🔧 Configuration Steps

### Step 1: Create Mobile App Environment File

```bash
# Navigate to mobile app directory
cd apps/mobile

# Copy environment template
cp .env.example .env

# Edit with your actual credentials
# (Use the values from the services above)
```

### Step 2: Configure EAS Build

The `eas.json` file is already configured. You'll need:

```bash
# Install EAS CLI globally
npm install -g @expo/eas-cli

# Login to Expo account
eas login

# Configure project
eas build:configure
```

### Step 3: Test Mobile App Locally

```bash
# Start development server
cd apps/mobile
npx expo start

# Test on device/simulator
# - Scan QR code with Expo Go app (iOS/Android)
# - Or press 'i' for iOS simulator
# - Or press 'a' for Android emulator
```

## 🚀 Build & Deploy Process

### Development Builds
```bash
# Build for internal testing
eas build --platform ios --profile preview
eas build --platform android --profile preview
```

### Production Builds
```bash
# Build for app stores
eas build --platform ios --profile production
eas build --platform android --profile production
```

### Submit to App Stores
```bash
# Submit to App Store (iOS)
eas submit --platform ios

# Submit to Google Play (Android)
eas submit --platform android
```

## 📱 App Store Assets Needed

### Screenshots (6 required for each platform)
- iPhone 6.7" (1290x2796): 6 screenshots
- iPhone 6.5" (1242x2688): 6 screenshots  
- iPad Pro 12.9" (2048x2732): 6 screenshots
- Android Phone: 6 screenshots
- Android Tablet: 6 screenshots

### App Icons
- iOS: 1024x1024 PNG
- Android: 512x512 PNG

### App Store Descriptions
- **Title**: Landlord PDF Pro
- **Subtitle**: Property Inspection Reports
- **Description**: Create professional move-in/out inspection reports with photos, signatures, and PDF exports. Perfect for landlords, property managers, and real estate professionals.
- **Keywords**: landlord, property, inspection, PDF, rental, real estate

## 🔄 Revenue Integration Flow

### Web Purchase → Mobile Recognition
1. User purchases on web via Stripe
2. Stripe webhook updates Supabase `entitlements` table
3. Mobile app checks Supabase for user's paid status
4. If paid, mobile app unlocks pro features

### Mobile Purchase → Web Recognition  
1. User purchases in mobile app via RevenueCat
2. RevenueCat webhook updates Supabase `entitlements` table
3. Web app checks Supabase for user's paid status
4. Cross-platform pro features unlocked

## ⚡ Quick Start Checklist

- [ ] Set up Supabase credentials (copy from web app)
- [ ] Create RevenueCat account and configure products
- [ ] Set up App Store Connect (iOS) and Google Play Console (Android)
- [ ] Configure mobile app `.env` file with all credentials
- [ ] Test app locally with `npx expo start`
- [ ] Create development builds with EAS
- [ ] Test in-app purchases in sandbox mode
- [ ] Create production builds
- [ ] Submit to app stores for review

## 🎯 Priority Order

1. **HIGH**: Supabase configuration (required for basic functionality)
2. **HIGH**: RevenueCat setup (required for monetization)
3. **HIGH**: App Store/Play Console setup (required for distribution)
4. **MEDIUM**: AdMob setup (additional revenue)
5. **LOW**: Advanced analytics and crash reporting

## 📞 Support Resources

- **Expo Documentation**: https://docs.expo.dev/
- **RevenueCat Documentation**: https://docs.revenuecat.com/
- **Supabase Documentation**: https://supabase.com/docs
- **EAS Build Documentation**: https://docs.expo.dev/build/introduction/

---

**Next Action**: Configure Supabase credentials and test mobile app locally.

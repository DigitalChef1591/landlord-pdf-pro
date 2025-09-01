# Mobile App Development Guide - Landlord PDF Pro

## Overview
This guide outlines the steps to create iOS and Android apps for Landlord PDF Pro using Expo React Native with RevenueCat for in-app purchases.

## Prerequisites
- Node.js 18+ installed
- Expo CLI installed globally: `npm install -g @expo/cli`
- EAS CLI installed globally: `npm install -g eas-cli`
- Apple Developer Account ($99/year) for iOS
- Google Play Console Account ($25 one-time) for Android
- RevenueCat account (free tier available)

## Project Structure
```
apps/mobile/                 # Expo React Native app
├── app/                    # Expo Router pages
├── components/             # Shared components
├── lib/                   # Utilities and services
├── assets/                # Images, fonts, etc.
├── app.json              # Expo configuration
└── package.json          # Dependencies
```

## Step 1: Initialize Mobile App

```bash
cd apps/
npx create-expo-app mobile --template tabs@50
cd mobile
```

## Step 2: Install Dependencies

```bash
# Core dependencies
npx expo install expo-router expo-constants expo-linking expo-status-bar
npx expo install @expo/vector-icons expo-font expo-splash-screen

# UI and styling
npm install nativewind tailwindcss react-native-reanimated
npm install react-native-safe-area-context react-native-screens

# Authentication and data
npm install @supabase/supabase-js @react-native-async-storage/async-storage
npm install react-native-url-polyfill

# Camera and media
npx expo install expo-camera expo-media-library expo-image-picker
npx expo install expo-image-manipulator

# Payments
npm install react-native-purchases

# PDF and sharing
npm install react-native-pdf react-native-share
npx expo install expo-sharing expo-file-system

# Signatures
npm install react-native-signature-canvas

# Forms and validation
npm install react-hook-form @hookform/resolvers zod
```

## Step 3: Configure Expo App

Update `app.json`:
```json
{
  "expo": {
    "name": "Landlord PDF Pro",
    "slug": "landlord-pdf-pro",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.landlordpdfpro.app",
      "buildNumber": "1"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.landlordpdfpro.app",
      "versionCode": 1
    },
    "web": {
      "favicon": "./assets/favicon.png",
      "bundler": "metro"
    },
    "plugins": [
      "expo-router",
      [
        "expo-camera",
        {
          "cameraPermission": "Allow Landlord PDF Pro to access your camera to take photos for property inspections."
        }
      ],
      [
        "expo-media-library",
        {
          "photosPermission": "Allow Landlord PDF Pro to access your photos to include them in inspection reports.",
          "savePhotosPermission": "Allow Landlord PDF Pro to save inspection photos to your device."
        }
      ]
    ],
    "scheme": "landlordpro",
    "extra": {
      "router": {
        "origin": false
      },
      "eas": {
        "projectId": "your-project-id-here"
      }
    }
  }
}
```

## Step 4: Set up EAS Build

```bash
eas login
eas build:configure
```

Update `eas.json`:
```json
{
  "cli": {
    "version": ">= 5.2.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "ios": {
        "resourceClass": "m-medium"
      }
    },
    "production": {
      "ios": {
        "resourceClass": "m-medium"
      }
    }
  },
  "submit": {
    "production": {}
  }
}
```

## Step 5: RevenueCat Setup

1. Create RevenueCat account at https://app.revenuecat.com
2. Create a new project
3. Add iOS and Android apps with bundle IDs
4. Create a product: "landlord_pro" (non-consumable)
5. Create an entitlement: "pro_features"
6. Link the product to the entitlement

## Step 6: App Store Connect Setup (iOS)

1. Log into App Store Connect
2. Create new app with bundle ID: `com.landlordpdfpro.app`
3. Set up in-app purchase:
   - Product ID: `landlord_pro`
   - Type: Non-Consumable
   - Price: $29.99
   - Title: "Landlord PDF Pro - Full Version"
   - Description: "Unlock unlimited inspections, professional PDF exports, and all premium features."

## Step 7: Google Play Console Setup (Android)

1. Log into Google Play Console
2. Create new app with package name: `com.landlordpdfpro.app`
3. Set up in-app product:
   - Product ID: `landlord_pro`
   - Product type: One-time
   - Price: $29.99
   - Title: "Landlord PDF Pro - Full Version"
   - Description: "Unlock unlimited inspections, professional PDF exports, and all premium features."

## Step 8: Core App Structure

Create the following key files:

### `lib/supabase.ts`
```typescript
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
```

### `lib/revenuecat.ts`
```typescript
import Purchases, { PurchasesOffering } from 'react-native-purchases'

export const initRevenueCat = () => {
  const apiKey = Platform.OS === 'ios' 
    ? process.env.EXPO_PUBLIC_REVENUECAT_API_KEY_IOS!
    : process.env.EXPO_PUBLIC_REVENUECAT_API_KEY_ANDROID!
  
  Purchases.configure({ apiKey })
}

export const checkProStatus = async (): Promise<boolean> => {
  try {
    const customerInfo = await Purchases.getCustomerInfo()
    return customerInfo.entitlements.active['pro_features'] !== undefined
  } catch (error) {
    console.error('Error checking pro status:', error)
    return false
  }
}

export const purchasePro = async (): Promise<boolean> => {
  try {
    const offerings = await Purchases.getOfferings()
    const offering = offerings.current
    
    if (offering && offering.availablePackages.length > 0) {
      const purchaseResult = await Purchases.purchasePackage(offering.availablePackages[0])
      return purchaseResult.customerInfo.entitlements.active['pro_features'] !== undefined
    }
    return false
  } catch (error) {
    console.error('Purchase error:', error)
    return false
  }
}

export const restorePurchases = async (): Promise<boolean> => {
  try {
    const customerInfo = await Purchases.restorePurchases()
    return customerInfo.entitlements.active['pro_features'] !== undefined
  } catch (error) {
    console.error('Restore error:', error)
    return false
  }
}
```

## Step 9: Key App Screens

### Authentication Flow
- `app/(auth)/login.tsx` - Magic link login
- `app/(auth)/signup.tsx` - Account creation

### Main App Flow
- `app/(tabs)/index.tsx` - Dashboard/Home
- `app/(tabs)/inspections.tsx` - Inspection list
- `app/(tabs)/settings.tsx` - Settings and account
- `app/inspection/new.tsx` - Create new inspection
- `app/inspection/[id].tsx` - Edit inspection
- `app/paywall.tsx` - RevenueCat paywall

## Step 10: Environment Variables

Create `.env.local`:
```
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
EXPO_PUBLIC_REVENUECAT_API_KEY_IOS=your_ios_api_key
EXPO_PUBLIC_REVENUECAT_API_KEY_ANDROID=your_android_api_key
EXPO_PUBLIC_DEEPLINK_SCHEME=landlordpro
```

## Step 11: Build and Deploy

### Development Build
```bash
eas build --platform all --profile development
```

### Preview Build (Internal Testing)
```bash
eas build --platform all --profile preview
```

### Production Build
```bash
eas build --platform all --profile production
```

### Submit to App Stores
```bash
# iOS
eas submit --platform ios

# Android
eas submit --platform android
```

## Step 12: App Store Assets

### Required Assets
- App Icon (1024x1024)
- Screenshots (6 required for each device type)
- App Preview Videos (optional but recommended)
- App Store Description
- Keywords
- Privacy Policy URL
- Terms of Service URL

### Screenshot Sizes
**iOS:**
- iPhone 6.7": 1290 x 2796
- iPhone 6.5": 1242 x 2688
- iPhone 5.5": 1242 x 2208
- iPad Pro 12.9": 2048 x 2732

**Android:**
- Phone: 1080 x 1920
- 7" Tablet: 1200 x 1920
- 10" Tablet: 1920 x 1200

## Step 13: App Store Descriptions

### iOS App Store
**Title:** Landlord PDF Pro - Property Inspections

**Subtitle:** Professional Move-In/Out Reports

**Description:**
Create professional property inspection reports with ease. Perfect for landlords, property managers, and real estate professionals.

KEY FEATURES:
• Room-by-room inspection templates
• Photo documentation with automatic organization
• Digital signature collection
• Professional PDF report generation
• Cloud sync across all devices
• Offline mode for inspections
• One-time purchase - no subscriptions

PERFECT FOR:
• Landlords managing rental properties
• Property management companies
• Real estate agents and brokers
• Home inspectors
• Insurance adjusters

Transform your property inspections with professional-grade tools trusted by thousands of property professionals worldwide.

**Keywords:** landlord, property, inspection, rental, PDF, report, move-in, move-out, property management, real estate

### Google Play Store
**Short Description:** Professional property inspection reports for landlords and property managers.

**Full Description:** [Same as iOS with Android-specific formatting]

## Step 14: Testing Checklist

### Core Functionality
- [ ] User registration and login
- [ ] Magic link authentication
- [ ] Create new inspection
- [ ] Add photos to inspection
- [ ] Digital signature capture
- [ ] PDF generation and sharing
- [ ] Offline mode functionality
- [ ] Data sync when online

### Payment Flow
- [ ] Paywall displays correctly
- [ ] Purchase flow works
- [ ] Restore purchases works
- [ ] Pro features unlock after purchase
- [ ] Free tier limitations enforced

### Platform Specific
- [ ] iOS: App Store review guidelines compliance
- [ ] Android: Google Play policy compliance
- [ ] Deep linking works correctly
- [ ] Push notifications (if implemented)
- [ ] Camera permissions work
- [ ] File system access works

## Step 15: Launch Strategy

### Pre-Launch
1. Beta testing with TestFlight (iOS) and Internal Testing (Android)
2. Gather feedback and fix critical issues
3. Prepare marketing materials
4. Set up analytics and crash reporting

### Launch
1. Submit to app stores
2. Monitor for approval
3. Coordinate launch with web app updates
4. Prepare customer support

### Post-Launch
1. Monitor reviews and ratings
2. Respond to user feedback
3. Plan feature updates
4. Track key metrics (downloads, purchases, retention)

## Revenue Optimization

### Pricing Strategy
- Match web app pricing ($29)
- Consider regional pricing
- Monitor conversion rates
- A/B test paywall designs

### User Acquisition
- App Store Optimization (ASO)
- Cross-promotion from web app
- Social media marketing
- Property management community outreach

## Maintenance and Updates

### Regular Updates
- Bug fixes and performance improvements
- New features based on user feedback
- OS compatibility updates
- Security patches

### Analytics to Track
- Download numbers
- Conversion rate (free to paid)
- User retention rates
- Feature usage statistics
- Crash reports and error rates

This guide provides a comprehensive roadmap for developing and launching the mobile apps. The key is to maintain feature parity with the web app while optimizing for mobile user experience and app store requirements.

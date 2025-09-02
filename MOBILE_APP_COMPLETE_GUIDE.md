# Landlord PDF Pro - Mobile App Development Guide

## Overview
This guide provides complete instructions for building and deploying the Android and iPhone apps for Landlord PDF Pro using Expo React Native.

## Project Structure
```
apps/mobile/
├── app/                    # Expo Router pages
│   ├── _layout.tsx        # Root layout
│   ├── index.tsx          # Landing/onboarding
│   ├── auth/              # Authentication screens
│   ├── (tabs)/            # Main app tabs
│   ├── paywall.tsx        # RevenueCat paywall
│   └── inspection/        # Inspection flow
├── components/            # Shared components
├── lib/                   # Utilities and services
├── assets/               # Images, icons, splash
├── app.json              # Expo configuration
└── package.json          # Dependencies
```

## Setup Instructions

### 1. Prerequisites
```bash
# Install Expo CLI globally
npm install -g @expo/cli

# Install EAS CLI for building
npm install -g eas-cli

# Login to Expo account
expo login

# Initialize EAS
eas login
```

### 2. Mobile App Configuration

#### package.json
```json
{
  "name": "mobile",
  "version": "1.0.0",
  "main": "index.ts",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "build:android": "eas build --platform android",
    "build:ios": "eas build --platform ios",
    "submit:android": "eas submit --platform android",
    "submit:ios": "eas submit --platform ios"
  },
  "dependencies": {
    "expo": "~53.0.0",
    "expo-status-bar": "~2.2.3",
    "expo-router": "~4.0.9",
    "expo-linking": "~7.0.3",
    "expo-constants": "~17.0.3",
    "expo-splash-screen": "~0.29.13",
    "expo-system-ui": "~4.0.4",
    "expo-web-browser": "~14.0.1",
    "expo-secure-store": "~14.0.0",
    "expo-image-picker": "~16.0.2",
    "expo-image-manipulator": "~13.0.5",
    "expo-file-system": "~18.0.4",
    "expo-sharing": "~13.0.2",
    "react": "18.2.0",
    "react-native": "0.76.3",
    "react-native-safe-area-context": "4.14.0",
    "react-native-screens": "~4.1.0",
    "react-native-gesture-handler": "~2.22.1",
    "react-native-reanimated": "~3.16.1",
    "react-native-svg": "15.9.0",
    "react-native-signature-canvas": "~4.7.2",
    "nativewind": "^2.0.11",
    "@supabase/supabase-js": "^2.39.3",
    "react-native-purchases": "^8.2.1",
    "react-native-url-polyfill": "^2.0.0",
    "@react-native-async-storage/async-storage": "1.23.1",
    "react-hook-form": "^7.49.3",
    "@hookform/resolvers": "^3.3.4",
    "zod": "^3.22.4",
    "date-fns": "^3.3.1"
  },
  "devDependencies": {
    "@babel/core": "^7.25.2",
    "@types/react": "~18.2.79",
    "typescript": "~5.8.3",
    "tailwindcss": "3.3.2"
  },
  "private": true
}
```

#### app.json
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
    "scheme": "landlordpro",
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/splash.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ],
      [
        "react-native-purchases",
        {
          "ios": {
            "usesStoreKit2IfAvailable": false
          }
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true
    },
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

### 3. Core App Structure

#### Root Layout (app/_layout.tsx)
```tsx
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-url-polyfill/auto';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="onboarding" />
          <Stack.Screen name="auth" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="paywall" />
          <Stack.Screen name="inspection" />
        </Stack>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
```

#### Landing Page (app/index.tsx)
```tsx
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LandingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-6">
        <Text className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Landlord PDF Pro
        </Text>
        <Text className="text-lg text-gray-600 mb-8 text-center">
          Professional property inspection reports
        </Text>
        
        <TouchableOpacity
          className="bg-blue-600 px-8 py-4 rounded-lg mb-4 w-full"
          onPress={() => router.push('/auth/login')}
        >
          <Text className="text-white text-center font-semibold text-lg">
            Get Started
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          className="border border-gray-300 px-8 py-4 rounded-lg w-full"
          onPress={() => router.push('/demo')}
        >
          <Text className="text-gray-700 text-center font-semibold text-lg">
            Try Demo
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
```

### 4. Authentication Setup

#### Supabase Configuration (lib/supabase.ts)
```tsx
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
```

### 5. RevenueCat Integration

#### RevenueCat Setup (lib/purchases.ts)
```tsx
import Purchases, { PurchasesOffering } from 'react-native-purchases';
import { Platform } from 'react-native';

const APIKeys = {
  apple: process.env.EXPO_PUBLIC_REVENUECAT_API_KEY_IOS!,
  google: process.env.EXPO_PUBLIC_REVENUECAT_API_KEY_ANDROID!,
};

export const initializePurchases = async () => {
  if (Platform.OS === 'ios') {
    await Purchases.configure({ apiKey: APIKeys.apple });
  } else if (Platform.OS === 'android') {
    await Purchases.configure({ apiKey: APIKeys.google });
  }
};

export const getOfferings = async (): Promise<PurchasesOffering | null> => {
  try {
    const offerings = await Purchases.getOfferings();
    return offerings.current;
  } catch (error) {
    console.error('Error fetching offerings:', error);
    return null;
  }
};

export const purchaseProduct = async (productId: string) => {
  try {
    const { customerInfo } = await Purchases.purchaseProduct(productId);
    return customerInfo;
  } catch (error) {
    console.error('Purchase error:', error);
    throw error;
  }
};

export const restorePurchases = async () => {
  try {
    const customerInfo = await Purchases.restorePurchases();
    return customerInfo;
  } catch (error) {
    console.error('Restore error:', error);
    throw error;
  }
};
```

#### Paywall Screen (app/paywall.tsx)
```tsx
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { getOfferings, purchaseProduct, restorePurchases } from '../lib/purchases';

export default function PaywallScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [offering, setOffering] = useState(null);

  useEffect(() => {
    loadOffering();
  }, []);

  const loadOffering = async () => {
    const currentOffering = await getOfferings();
    setOffering(currentOffering);
  };

  const handlePurchase = async () => {
    if (!offering?.availablePackages[0]) return;
    
    setLoading(true);
    try {
      await purchaseProduct(offering.availablePackages[0].product.identifier);
      Alert.alert('Success', 'Purchase completed!');
      router.replace('/(tabs)');
    } catch (error) {
      Alert.alert('Error', 'Purchase failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRestore = async () => {
    setLoading(true);
    try {
      const customerInfo = await restorePurchases();
      if (customerInfo.entitlements.active['landlord_pro']) {
        Alert.alert('Success', 'Purchases restored!');
        router.replace('/(tabs)');
      } else {
        Alert.alert('No Purchases', 'No active purchases found.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to restore purchases.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-6">
        <Text className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Unlock Full Features
        </Text>
        <Text className="text-lg text-gray-600 mb-8 text-center">
          Get unlimited inspections, professional PDFs, and more
        </Text>
        
        <View className="bg-blue-50 p-6 rounded-lg mb-8 w-full">
          <Text className="text-2xl font-bold text-blue-600 text-center mb-2">
            $29.99
          </Text>
          <Text className="text-gray-600 text-center">One-time purchase</Text>
        </View>

        <TouchableOpacity
          className="bg-blue-600 px-8 py-4 rounded-lg mb-4 w-full"
          onPress={handlePurchase}
          disabled={loading}
        >
          <Text className="text-white text-center font-semibold text-lg">
            {loading ? 'Processing...' : 'Purchase Now'}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          className="border border-gray-300 px-8 py-4 rounded-lg mb-4 w-full"
          onPress={handleRestore}
          disabled={loading}
        >
          <Text className="text-gray-700 text-center font-semibold">
            Restore Purchases
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()}>
          <Text className="text-gray-500 text-center">Maybe Later</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
```

### 6. Building and Deployment

#### EAS Configuration (eas.json)
```json
{
  "cli": {
    "version": ">= 12.0.0"
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

#### Build Commands
```bash
# Development build
eas build --profile development --platform all

# Preview build (for testing)
eas build --profile preview --platform all

# Production build
eas build --profile production --platform all

# Submit to stores
eas submit --platform ios
eas submit --platform android
```

### 7. Environment Variables

Create `.env` file in mobile directory:
```
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
EXPO_PUBLIC_REVENUECAT_API_KEY_IOS=your_ios_api_key
EXPO_PUBLIC_REVENUECAT_API_KEY_ANDROID=your_android_api_key
EXPO_PUBLIC_DEEPLINK_SCHEME=landlordpro
```

### 8. Store Assets Required

#### App Icons
- iOS: 1024x1024 PNG (no transparency)
- Android: 1024x1024 PNG

#### Screenshots (6 required for each platform)
- iPhone: 1290x2796 (iPhone 14 Pro)
- Android: 1080x1920

#### Store Descriptions

**App Store Description:**
```
Landlord PDF Pro - Professional Property Inspections

Create detailed property inspection reports with photos, digital signatures, and professional PDF exports. Perfect for landlords, property managers, and real estate professionals.

Features:
• Room-by-room inspection templates
• Photo documentation with automatic organization
• Digital signature collection
• Professional PDF report generation
• Cloud storage and sync
• Offline draft saving
• One-time purchase, no subscriptions

Streamline your property inspections and create legally compliant documentation with ease.
```

### 9. Testing Checklist

- [ ] App launches successfully
- [ ] Authentication flow works
- [ ] Paywall displays correctly
- [ ] Purchase flow completes
- [ ] Restore purchases works
- [ ] Inspection builder functions
- [ ] Photo capture works
- [ ] Signature collection works
- [ ] PDF export triggers server generation
- [ ] Deep links work for auth callbacks
- [ ] Offline functionality works
- [ ] App handles network errors gracefully

### 10. Deployment Steps

1. **Setup Expo Account**
   ```bash
   expo login
   eas login
   ```

2. **Configure Project**
   ```bash
   eas build:configure
   ```

3. **Build for Testing**
   ```bash
   eas build --profile preview --platform all
   ```

4. **Test on Devices**
   - Install via Expo Go or development build
   - Test all core functionality
   - Verify purchase flow

5. **Production Build**
   ```bash
   eas build --profile production --platform all
   ```

6. **Submit to Stores**
   ```bash
   eas submit --platform ios
   eas submit --platform android
   ```

### 11. RevenueCat Dashboard Setup

1. Create RevenueCat account
2. Add iOS and Android apps
3. Configure products:
   - Product ID: `landlord_pro`
   - Type: Non-consumable
   - Price: $29.99
4. Set up entitlements:
   - Entitlement ID: `landlord_pro`
5. Configure webhooks to Supabase Edge Function

### 12. App Store Connect Setup

1. Create app in App Store Connect
2. Upload screenshots and metadata
3. Set pricing to $29.99
4. Configure in-app purchase
5. Submit for review

### 13. Google Play Console Setup

1. Create app in Google Play Console
2. Upload screenshots and store listing
3. Set pricing to $29.99
4. Configure in-app product
5. Submit for review

## Next Steps

1. Complete the mobile app setup following this guide
2. Test thoroughly on both iOS and Android devices
3. Submit to app stores for review
4. Monitor RevenueCat dashboard for purchase analytics
5. Update web app to recognize mobile purchases

This comprehensive guide provides everything needed to build, test, and deploy the Landlord PDF Pro mobile apps successfully.

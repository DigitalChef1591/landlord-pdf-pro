import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { AdMobBanner } from 'expo-ads-admob'

interface AdBannerProps {
  size?: 'banner' | 'largeBanner' | 'mediumRectangle' | 'fullBanner' | 'leaderboard'
  style?: any
}

export const AdBanner: React.FC<AdBannerProps> = ({ 
  size = 'banner',
  style 
}) => {
  const getAdUnitId = () => {
    if (__DEV__) {
      // Test ad unit IDs for development
      return Platform.OS === 'ios' 
        ? 'ca-app-pub-3940256099942544/2934735716'  // iOS test banner
        : 'ca-app-pub-3940256099942544/6300978111'  // Android test banner
    }
    
    // Production ad unit IDs
    return Platform.OS === 'ios'
      ? process.env.EXPO_PUBLIC_ADMOB_BANNER_UNIT_ID_IOS
      : process.env.EXPO_PUBLIC_ADMOB_BANNER_UNIT_ID_ANDROID
  }

  return (
    <View style={[styles.container, style]}>
      <AdMobBanner
        bannerSize={size}
        adUnitID={getAdUnitId()}
        servePersonalizedAds={true}
        onDidFailToReceiveAdWithError={(error: any) => {
          console.log('AdMob Banner Error:', error)
        }}
      />
    </View>
  )
}

// Specific banner components for different placements
export const HeaderBanner: React.FC = () => (
  <AdBanner size="banner" style={styles.headerBanner} />
)

export const FooterBanner: React.FC = () => (
  <AdBanner size="banner" style={styles.footerBanner} />
)

export const InContentBanner: React.FC = () => (
  <AdBanner size="mediumRectangle" style={styles.inContentBanner} />
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    marginVertical: 10,
  },
  headerBanner: {
    marginTop: 10,
    marginBottom: 0,
  },
  footerBanner: {
    marginTop: 0,
    marginBottom: 10,
  },
  inContentBanner: {
    marginVertical: 20,
  },
})

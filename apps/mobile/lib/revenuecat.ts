import Purchases, { PurchasesOffering } from 'react-native-purchases'
import { Platform } from 'react-native'

const REVENUECAT_API_KEY_IOS = process.env.EXPO_PUBLIC_REVENUECAT_API_KEY_IOS!
const REVENUECAT_API_KEY_ANDROID = process.env.EXPO_PUBLIC_REVENUECAT_API_KEY_ANDROID!

export const initRevenueCat = async () => {
  try {
    // Configure RevenueCat
    await Purchases.configure({
      apiKey: Platform.OS === 'ios' ? REVENUECAT_API_KEY_IOS : REVENUECAT_API_KEY_ANDROID,
    })
    
    console.log('RevenueCat configured successfully')
  } catch (error) {
    console.error('Error configuring RevenueCat:', error)
  }
}

export const getOfferings = async (): Promise<PurchasesOffering | null> => {
  try {
    const offerings = await Purchases.getOfferings()
    return offerings.current
  } catch (error) {
    console.error('Error getting offerings:', error)
    return null
  }
}

export const purchaseProduct = async (productId: string) => {
  try {
    const purchaseResult = await Purchases.purchaseProduct(productId)
    return purchaseResult
  } catch (error) {
    console.error('Error purchasing product:', error)
    throw error
  }
}

export const restorePurchases = async () => {
  try {
    const customerInfo = await Purchases.restorePurchases()
    return customerInfo
  } catch (error) {
    console.error('Error restoring purchases:', error)
    throw error
  }
}

export const getCustomerInfo = async () => {
  try {
    const customerInfo = await Purchases.getCustomerInfo()
    return customerInfo
  } catch (error) {
    console.error('Error getting customer info:', error)
    return null
  }
}

export const checkProStatus = async (): Promise<boolean> => {
  try {
    const customerInfo = await getCustomerInfo()
    return customerInfo?.entitlements.active['landlord_pro'] !== undefined
  } catch (error) {
    console.error('Error checking pro status:', error)
    return false
  }
}

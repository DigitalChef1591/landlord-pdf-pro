import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function PaywallScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setLoading(true);
    try {
      // TODO: Implement RevenueCat purchase
      // const offerings = await Purchases.getOfferings();
      // const purchaserInfo = await Purchases.purchaseProduct(productId);
      
      Alert.alert('Success', 'Purchase completed! You now have full access.', [
        { text: 'OK', onPress: () => router.replace('/(tabs)') }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Purchase failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRestore = async () => {
    setLoading(true);
    try {
      // TODO: Implement RevenueCat restore
      // const purchaserInfo = await Purchases.restorePurchases();
      
      Alert.alert('Success', 'Purchases restored!', [
        { text: 'OK', onPress: () => router.replace('/(tabs)') }
      ]);
    } catch (error) {
      Alert.alert('No Purchases', 'No active purchases found.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 24 }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#111827', marginBottom: 16, textAlign: 'center' }}>
          Unlock Full Features
        </Text>
        <Text style={{ fontSize: 18, color: '#6B7280', marginBottom: 32, textAlign: 'center' }}>
          Get unlimited inspections, professional PDFs, and more
        </Text>
        
        <View style={{ backgroundColor: '#EFF6FF', padding: 24, borderRadius: 16, marginBottom: 32 }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#2563EB', textAlign: 'center', marginBottom: 8 }}>
            $29.99
          </Text>
          <Text style={{ fontSize: 16, color: '#6B7280', textAlign: 'center', marginBottom: 24 }}>
            One-time purchase • Lifetime access
          </Text>
          
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 16, color: '#374151', marginBottom: 8 }}>✓ Unlimited inspections</Text>
            <Text style={{ fontSize: 16, color: '#374151', marginBottom: 8 }}>✓ Professional PDF reports</Text>
            <Text style={{ fontSize: 16, color: '#374151', marginBottom: 8 }}>✓ Digital signatures</Text>
            <Text style={{ fontSize: 16, color: '#374151', marginBottom: 8 }}>✓ Photo documentation</Text>
            <Text style={{ fontSize: 16, color: '#374151', marginBottom: 8 }}>✓ Cloud storage & sync</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: loading ? '#9CA3AF' : '#2563EB',
            paddingVertical: 16,
            borderRadius: 12,
            marginBottom: 16
          }}
          onPress={handlePurchase}
          disabled={loading}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600', fontSize: 18 }}>
            {loading ? 'Processing...' : 'Purchase Now'}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: '#D1D5DB',
            paddingVertical: 16,
            borderRadius: 12,
            marginBottom: 16
          }}
          onPress={handleRestore}
          disabled={loading}
        >
          <Text style={{ color: '#374151', textAlign: 'center', fontWeight: '600', fontSize: 16 }}>
            Restore Purchases
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={{ color: '#6B7280', textAlign: 'center', fontSize: 16 }}>
            Maybe Later
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

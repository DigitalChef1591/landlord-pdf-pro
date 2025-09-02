import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderBanner, InContentBanner, FooterBanner } from '../../components/AdBanner';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <HeaderBanner />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 24 }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#111827', marginBottom: 8 }}>
            Welcome to Landlord PDF Pro
          </Text>
          <Text style={{ fontSize: 16, color: '#6B7280', marginBottom: 32 }}>
            Create professional property inspection reports
          </Text>

          <View style={{ marginBottom: 24 }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#2563EB',
                paddingVertical: 20,
                paddingHorizontal: 24,
                borderRadius: 12,
                marginBottom: 16
              }}
              onPress={() => router.push('/paywall')}
            >
              <Text style={{ color: 'white', fontSize: 18, fontWeight: '600', textAlign: 'center' }}>
                Start New Inspection
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: '#D1D5DB',
                paddingVertical: 20,
                paddingHorizontal: 24,
                borderRadius: 12,
                marginBottom: 16
              }}
              onPress={() => router.push('/(tabs)/library')}
            >
              <Text style={{ color: '#374151', fontSize: 18, fontWeight: '600', textAlign: 'center' }}>
                View Library
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: '#F9FAFB', padding: 20, borderRadius: 12, marginBottom: 24 }}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: '#111827', marginBottom: 12 }}>
              Quick Stats
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2563EB' }}>0</Text>
                <Text style={{ fontSize: 14, color: '#6B7280' }}>Inspections</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#059669' }}>0</Text>
                <Text style={{ fontSize: 14, color: '#6B7280' }}>Properties</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#DC2626' }}>0</Text>
                <Text style={{ fontSize: 14, color: '#6B7280' }}>Reports</Text>
              </View>
            </View>
          </View>

          <InContentBanner />

          <View style={{ backgroundColor: '#EFF6FF', padding: 20, borderRadius: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#1D4ED8', marginBottom: 8 }}>
              💡 Pro Tip
            </Text>
            <Text style={{ fontSize: 14, color: '#1E40AF' }}>
              Take photos as you inspect each room to create comprehensive documentation for your reports.
            </Text>
          </View>
        </View>
        <FooterBanner />
      </ScrollView>
    </SafeAreaView>
  );
}

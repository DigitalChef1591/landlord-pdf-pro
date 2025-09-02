import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LandingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24 }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#111827', marginBottom: 16, textAlign: 'center' }}>
          Landlord PDF Pro
        </Text>
        <Text style={{ fontSize: 18, color: '#6B7280', marginBottom: 32, textAlign: 'center' }}>
          Professional property inspection reports
        </Text>
        
        <TouchableOpacity
          style={{ backgroundColor: '#2563EB', paddingHorizontal: 32, paddingVertical: 16, borderRadius: 8, marginBottom: 16, width: '100%' }}
          onPress={() => router.push('/auth/login')}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600', fontSize: 18 }}>
            Get Started
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={{ borderWidth: 1, borderColor: '#D1D5DB', paddingHorizontal: 32, paddingVertical: 16, borderRadius: 8, width: '100%' }}
          onPress={() => router.push('/demo')}
        >
          <Text style={{ color: '#374151', textAlign: 'center', fontWeight: '600', fontSize: 18 }}>
            Try Demo
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

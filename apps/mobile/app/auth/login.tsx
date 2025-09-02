import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    setLoading(true);
    try {
      // TODO: Implement Supabase magic link auth
      // const { error } = await supabase.auth.signInWithOtp({ email });
      // if (error) throw error;
      
      Alert.alert('Success', 'Check your email for the login link!');
      // For now, simulate success and navigate to tabs
      setTimeout(() => {
        router.replace('/(tabs)');
      }, 2000);
    } catch (error) {
      Alert.alert('Error', 'Failed to send login link');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 24 }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#111827', marginBottom: 8, textAlign: 'center' }}>
          Welcome Back
        </Text>
        <Text style={{ fontSize: 16, color: '#6B7280', marginBottom: 32, textAlign: 'center' }}>
          Sign in to your account
        </Text>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 16, fontWeight: '600', color: '#374151', marginBottom: 8 }}>
            Email Address
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: '#D1D5DB',
              borderRadius: 8,
              paddingHorizontal: 16,
              paddingVertical: 12,
              fontSize: 16,
              backgroundColor: 'white'
            }}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: loading ? '#9CA3AF' : '#2563EB',
            paddingVertical: 16,
            borderRadius: 8,
            marginBottom: 24
          }}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600', fontSize: 16 }}>
            {loading ? 'Sending...' : 'Send Magic Link'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={{ color: '#6B7280', textAlign: 'center', fontSize: 16 }}>
            Back to Home
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

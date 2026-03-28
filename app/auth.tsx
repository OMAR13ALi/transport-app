import { router } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { OtpInput } from '@/components/ui/otp-input';
import { PhoneInput } from '@/components/ui/phone-input';
import { PrimaryButton } from '@/components/ui/primary-button';
import { SecondaryButton } from '@/components/ui/secondary-button';

type Step = 'phone' | 'otp';

export default function AuthScreen() {
  const [step, setStep] = useState<Step>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSendCode() {
    if (phone.length < 8) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('otp');
    }, 800);
  }

  function handleVerify() {
    if (otp.length < 6) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.replace('/(tabs)' as any);
    }, 800);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Connexion</Text>
          <Text style={styles.subtitle}>
            {step === 'phone'
              ? 'Entrez votre numéro de téléphone tunisien'
              : `Code envoyé au +216 ${phone}`}
          </Text>
        </View>

        <View style={styles.form}>
          {step === 'phone' ? (
            <>
              <PhoneInput value={phone} onChangeText={setPhone} />
              <PrimaryButton
                label="Envoyer le code"
                onPress={handleSendCode}
                loading={loading}
                disabled={phone.length < 8}
              />
            </>
          ) : (
            <>
              <OtpInput value={otp} onChange={setOtp} />
              <PrimaryButton
                label="Vérifier"
                onPress={handleVerify}
                loading={loading}
                disabled={otp.length < 6}
              />
              <SecondaryButton
                label="Modifier le numéro"
                onPress={() => { setStep('phone'); setOtp(''); }}
              />
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1B2A',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    gap: 40,
  },
  header: {
    gap: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    color: '#94A3B8',
    fontWeight: '400',
  },
  form: {
    gap: 16,
  },
});

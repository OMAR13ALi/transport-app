import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, QrCode } from 'lucide-react-native';
import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { PrimaryButton } from '@/components/ui/primary-button';
import { useAppContext } from '@/context/app-context';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useEffect } from 'react';

function SenderQR() {
  const secondary = useThemeColor({}, 'textSecondary');

  // Simple static QR-like placeholder using nested views
  return (
    <View style={styles.qrWrapper}>
      <View style={styles.qrBox}>
        <QrCode size={160} color="#1A2E5A" strokeWidth={1.5} />
      </View>
      <Text style={[styles.qrLabel, { color: secondary }]}>Montrez ce code au chauffeur</Text>
    </View>
  );
}

function DriverScanner({ onConfirm }: { onConfirm: () => void }) {
  const pulse = useSharedValue(1);
  const secondary = useThemeColor({}, 'textSecondary');

  useEffect(() => {
    pulse.value = withRepeat(
      withTiming(1.08, { duration: 800, easing: Easing.inOut(Easing.ease) }),
      -1,
      true
    );
  }, []);

  const animStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pulse.value }],
    opacity: 2 - pulse.value,
  }));

  return (
    <View style={styles.scannerWrapper}>
      <Animated.View style={[styles.scanRing, animStyle]} />
      <View style={styles.scanInner}>
        <QrCode size={64} color="#F97316" />
      </View>
      <Text style={[styles.qrLabel, { color: secondary }]}>
        Scannez le code du destinataire
      </Text>
      <PrimaryButton label="Confirmer la réception" onPress={onConfirm} />
    </View>
  );
}

export default function QRScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { role, updateShipmentStatus } = useAppContext();
  const bg = useThemeColor({}, 'background');

  function confirm() {
    updateShipmentStatus(id, 'arrived');
    router.back();
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bg }]}>
      <View style={styles.navBar}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <ArrowLeft size={22} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.navTitle}>
          {role === 'sender' ? 'Mon QR code' : 'Scanner le code'}
        </Text>
        <View style={{ width: 38 }} />
      </View>

      <View style={styles.content}>
        {role === 'sender' ? (
          <SenderQR />
        ) : (
          <DriverScanner onConfirm={confirm} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1A2E5A',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navTitle: { color: '#FFFFFF', fontSize: 17, fontWeight: '700' },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  qrWrapper: {
    alignItems: 'center',
    gap: 20,
  },
  qrBox: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 8,
  },
  qrLabel: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  scannerWrapper: {
    alignItems: 'center',
    gap: 28,
    width: '100%',
  },
  scanRing: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#F97316',
    position: 'absolute',
  },
  scanInner: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#FFF7ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

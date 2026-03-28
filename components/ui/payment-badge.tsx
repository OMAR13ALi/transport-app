import { Banknote, Wallet } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PaymentMethod } from '@/constants/mock-data';
import { useColorScheme } from '@/hooks/use-color-scheme';

const PAYMENT_CONFIG = {
  cash_pickup: {
    label: 'Payé au départ',
    icon: Banknote,
    bg: { light: '#F0FDF4', dark: '#052e16' },
    text: { light: '#15803D', dark: '#4ADE80' },
  },
  cash_delivery: {
    label: "Payé à l'arrivée",
    icon: Wallet,
    bg: { light: '#EFF6FF', dark: '#1E3A5F' },
    text: { light: '#1A2E5A', dark: '#93C5FD' },
  },
};

interface PaymentBadgeProps {
  method: PaymentMethod;
  size?: 'sm' | 'md';
}

export function PaymentBadge({ method, size = 'md' }: PaymentBadgeProps) {
  const isDark = useColorScheme() === 'dark';
  const config = PAYMENT_CONFIG[method];
  const Icon = config.icon;
  const iconSize = size === 'sm' ? 12 : 14;
  const fontSize = size === 'sm' ? 11 : 12;
  const bgColor = isDark ? config.bg.dark : config.bg.light;
  const textColor = isDark ? config.text.dark : config.text.light;

  return (
    <View style={[styles.badge, { backgroundColor: bgColor }]}>
      <Icon size={iconSize} color={textColor} />
      <Text style={[styles.label, { color: textColor, fontSize }]}>{config.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 100,
    alignSelf: 'flex-start',
  },
  label: {
    fontWeight: '700',
    letterSpacing: 0.1,
  },
});

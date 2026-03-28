import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ShipmentStatus } from '@/constants/mock-data';

const STATUS_CONFIG: Record<ShipmentStatus, { label: string; bg: string; text: string }> = {
  at_station: { label: 'À la station', bg: '#EFF6FF', text: '#1A2E5A' },
  on_the_road: { label: 'En route', bg: '#FFF7ED', text: '#C2410C' },
  arrived: { label: 'Livré', bg: '#F0FDF4', text: '#15803D' },
};

const STATUS_CONFIG_DARK: Record<ShipmentStatus, { bg: string; text: string }> = {
  at_station: { bg: '#1E3A5F', text: '#93C5FD' },
  on_the_road: { bg: '#431407', text: '#FB923C' },
  arrived: { bg: '#052e16', text: '#4ADE80' },
};

interface BadgeProps {
  status: ShipmentStatus;
  dark?: boolean;
}

export function Badge({ status, dark = false }: BadgeProps) {
  const config = STATUS_CONFIG[status];
  const darkConfig = STATUS_CONFIG_DARK[status];

  return (
    <View style={[styles.badge, { backgroundColor: dark ? darkConfig.bg : config.bg }]}>
      <Text style={[styles.text, { color: dark ? darkConfig.text : config.text }]}>
        {config.label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});

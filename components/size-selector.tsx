import { Box, Package, PackagePlus } from 'lucide-react-native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { PackageSize, SIZE_CAPACITY_UNITS } from '@/constants/mock-data';
import { useThemeColor } from '@/hooks/use-theme-color';

const SIZES: { key: PackageSize; label: string; icon: React.ComponentType<{ size: number; color: string }> }[] = [
  { key: 'petit', label: 'Petit', icon: Package },
  { key: 'moyen', label: 'Moyen', icon: PackagePlus },
  { key: 'grand', label: 'Grand', icon: Box },
];

interface SizeSelectorProps {
  value: PackageSize;
  onChange: (size: PackageSize) => void;
}

export function SizeSelector({ value, onChange }: SizeSelectorProps) {
  const card = useThemeColor({}, 'card');
  const border = useThemeColor({}, 'border');
  const text = useThemeColor({}, 'text');

  return (
    <View style={styles.row}>
      {SIZES.map(({ key, label, icon: Icon }) => {
        const selected = value === key;
        const units = SIZE_CAPACITY_UNITS[key];
        return (
          <Pressable
            key={key}
            style={[
              styles.tile,
              { backgroundColor: selected ? '#FFF7ED' : card, borderColor: selected ? '#F97316' : border },
            ]}
            onPress={() => onChange(key)}
          >
            <Icon size={24} color={selected ? '#F97316' : '#94A3B8'} />
            <Text style={[styles.label, { color: selected ? '#F97316' : text }]}>{label}</Text>
            <Text style={[styles.units, { color: selected ? '#C2410C' : '#94A3B8' }]}>
              {units} unité{units > 1 ? 's' : ''}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  tile: {
    flex: 1,
    borderWidth: 1.5,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    gap: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
  },
  units: {
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
});

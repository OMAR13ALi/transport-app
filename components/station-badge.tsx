import { MapPin } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface StationBadgeProps {
  name: string;
}

export function StationBadge({ name }: StationBadgeProps) {
  return (
    <View style={styles.badge}>
      <MapPin size={14} color="#F97316" />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FFF7ED',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 100,
    alignSelf: 'flex-start',
  },
  text: {
    color: '#C2410C',
    fontSize: 13,
    fontWeight: '700',
  },
});

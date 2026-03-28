import { ArrowRight } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Station } from '@/constants/mock-data';

interface RouteHeaderProps {
  from: Station;
  to: Station;
}

export function RouteHeader({ from, to }: RouteHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.station}>
        <Text style={styles.city}>{from.city}</Text>
        <Text style={styles.stationName}>{from.name}</Text>
      </View>
      <ArrowRight size={24} color="#F97316" />
      <View style={[styles.station, styles.stationRight]}>
        <Text style={styles.city}>{to.city}</Text>
        <Text style={styles.stationName}>{to.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: '#1A2E5A',
  },
  station: {
    flex: 1,
    gap: 2,
  },
  stationRight: {
    alignItems: 'flex-end',
  },
  city: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.3,
  },
  stationName: {
    fontSize: 12,
    color: '#93C5FD',
    fontWeight: '500',
  },
});

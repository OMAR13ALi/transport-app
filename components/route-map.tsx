import { MapPin } from 'lucide-react-native';
import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { Station } from '@/constants/mock-data';
import { useColorScheme } from '@/hooks/use-color-scheme';

const DARK_MAP_STYLE = [
  { elementType: 'geometry', stylers: [{ color: '#0D1B2A' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#64748B' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#162236' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#1E3A5F' }] },
  { featureType: 'poi', stylers: [{ visibility: 'off' }] },
];

interface RouteMapProps {
  from: Station;
  to: Station;
  style?: StyleProp<ViewStyle>;
}

export function RouteMap({ from, to, style }: RouteMapProps) {
  const isDark = useColorScheme() === 'dark';

  if (!from.latitude || !to.latitude) {
    return (
      <View style={[styles.fallback, style]}>
        <Text style={styles.fallbackText}>{from.city} → {to.city}</Text>
      </View>
    );
  }

  const latDelta = Math.max(Math.abs(from.latitude - to.latitude) * 1.5, 0.5);
  const lngDelta = Math.max(Math.abs(from.longitude - to.longitude) * 1.5, 0.5);

  const region = {
    latitude: (from.latitude + to.latitude) / 2,
    longitude: (from.longitude + to.longitude) / 2,
    latitudeDelta: latDelta,
    longitudeDelta: lngDelta,
  };

  return (
    <View style={[styles.container, style]}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        region={region}
        customMapStyle={isDark ? DARK_MAP_STYLE : []}
        scrollEnabled={false}
        zoomEnabled={false}
        rotateEnabled={false}
        pitchEnabled={false}
      >
        <Marker coordinate={{ latitude: from.latitude, longitude: from.longitude }}>
          <View style={styles.markerFrom}>
            <MapPin size={16} color="#FFFFFF" />
          </View>
          <Text style={styles.markerLabel}>{from.city}</Text>
        </Marker>

        <Marker coordinate={{ latitude: to.latitude, longitude: to.longitude }}>
          <View style={styles.markerTo}>
            <MapPin size={16} color="#FFFFFF" />
          </View>
          <Text style={styles.markerLabel}>{to.city}</Text>
        </Marker>

        <Polyline
          coordinates={[
            { latitude: from.latitude, longitude: from.longitude },
            { latitude: to.latitude, longitude: to.longitude },
          ]}
          strokeColor="#F97316"
          strokeWidth={3}
          lineDashPattern={[8, 4]}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
  },
  fallback: {
    height: 200,
    borderRadius: 16,
    backgroundColor: '#1A2E5A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallbackText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  markerFrom: {
    backgroundColor: '#1A2E5A',
    borderRadius: 20,
    padding: 6,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  markerTo: {
    backgroundColor: '#F97316',
    borderRadius: 20,
    padding: 6,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  markerLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1A2E5A',
    textAlign: 'center',
    marginTop: 2,
    backgroundColor: 'rgba(255,255,255,0.85)',
    paddingHorizontal: 4,
    borderRadius: 4,
  },
});

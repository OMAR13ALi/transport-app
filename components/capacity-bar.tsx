import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useThemeColor } from '@/hooks/use-theme-color';

interface CapacityBarProps {
  used: number;
  max: number;
}

function getFillColor(ratio: number): string {
  if (ratio >= 1) return '#EF4444';
  if (ratio >= 0.85) return '#EF4444';
  if (ratio >= 0.5) return '#F97316';
  return '#22C55E';
}

export function CapacityBar({ used, max }: CapacityBarProps) {
  const border = useThemeColor({}, 'border');
  const secondary = useThemeColor({}, 'textSecondary');
  const ratio = max > 0 ? Math.min(used / max, 1) : 0;
  const fillColor = getFillColor(ratio);
  const isFull = used >= max;

  const fillWidth = useSharedValue(0);

  useEffect(() => {
    fillWidth.value = withSpring(ratio * 100, { damping: 20, stiffness: 200 });
  }, [ratio]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${fillWidth.value}%` as unknown as number,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text style={[styles.label, { color: secondary }]}>Capacité du coffre</Text>
        <Text style={[styles.value, { color: isFull ? '#EF4444' : fillColor, fontWeight: '700' }]}>
          {isFull ? 'Coffre plein' : `${used}/${max} unités`}
        </Text>
      </View>
      <View style={[styles.track, { backgroundColor: border }]}>
        <Animated.View style={[styles.fill, animatedStyle, { backgroundColor: fillColor }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
  },
  value: {
    fontSize: 13,
  },
  track: {
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 4,
  },
});

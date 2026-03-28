import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useThemeColor } from '@/hooks/use-theme-color';

export function Divider() {
  const border = useThemeColor({}, 'border');
  return <View style={[styles.line, { backgroundColor: border }]} />;
}

const styles = StyleSheet.create({
  line: {
    height: StyleSheet.hairlineWidth,
    width: '100%',
  },
});

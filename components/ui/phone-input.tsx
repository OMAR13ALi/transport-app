import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useThemeColor } from '@/hooks/use-theme-color';

interface PhoneInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export function PhoneInput({ value, onChangeText }: PhoneInputProps) {
  const card = useThemeColor({}, 'card');
  const border = useThemeColor({}, 'border');
  const text = useThemeColor({}, 'text');
  const secondary = useThemeColor({}, 'textSecondary');

  return (
    <View style={[styles.container, { backgroundColor: card, borderColor: border }]}>
      <View style={[styles.prefix, { borderRightColor: border }]}>
        <Text style={[styles.prefixText, { color: secondary }]}>🇹🇳 +216</Text>
      </View>
      <TextInput
        style={[styles.input, { color: text }]}
        value={value}
        onChangeText={onChangeText}
        keyboardType="phone-pad"
        placeholder="XX XXX XXX"
        placeholderTextColor={secondary}
        maxLength={8}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 14,
    overflow: 'hidden',
  },
  prefix: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRightWidth: 1,
  },
  prefixText: {
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 2,
  },
});

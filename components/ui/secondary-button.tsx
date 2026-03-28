import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useThemeColor } from '@/hooks/use-theme-color';

interface SecondaryButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}

export function SecondaryButton({ label, onPress, disabled = false }: SecondaryButtonProps) {
  const border = useThemeColor({}, 'border');
  const text = useThemeColor({}, 'text');

  return (
    <Pressable
      style={({ pressed }) => [styles.button, { borderColor: border }, disabled && styles.disabled, pressed && styles.pressed]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.label, { color: text }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1.5,
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  disabled: {
    opacity: 0.4,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});

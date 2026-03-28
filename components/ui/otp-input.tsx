import React, { createRef, useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useThemeColor } from '@/hooks/use-theme-color';

interface OtpInputProps {
  value: string;
  onChange: (val: string) => void;
}

export function OtpInput({ value, onChange }: OtpInputProps) {
  const digits = value.split('').concat(Array(6).fill('')).slice(0, 6);
  const refs = useRef(Array.from({ length: 6 }, () => createRef<TextInput>()));

  const card = useThemeColor({}, 'card');
  const border = useThemeColor({}, 'border');
  const text = useThemeColor({}, 'text');

  function handleChange(char: string, index: number) {
    const next = digits.slice();
    next[index] = char.replace(/[^0-9]/g, '').slice(-1);
    const newVal = next.join('');
    onChange(newVal);
    if (char && index < 5) {
      refs.current[index + 1].current?.focus();
    }
  }

  function handleKeyPress(key: string, index: number) {
    if (key === 'Backspace' && !digits[index] && index > 0) {
      refs.current[index - 1].current?.focus();
      const next = digits.slice();
      next[index - 1] = '';
      onChange(next.join(''));
    }
  }

  return (
    <View style={styles.row}>
      {Array.from({ length: 6 }).map((_, i) => (
        <TextInput
          key={i}
          ref={refs.current[i]}
          style={[styles.box, { backgroundColor: card, borderColor: digits[i] ? '#F97316' : border, color: text }]}
          value={digits[i]}
          onChangeText={char => handleChange(char, i)}
          onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, i)}
          keyboardType="number-pad"
          maxLength={1}
          selectTextOnFocus
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  box: {
    width: 48,
    height: 56,
    borderWidth: 1.5,
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
  },
});

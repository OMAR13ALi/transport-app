import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useAppContext } from '@/context/app-context';

export function RoleToggle() {
  if (!__DEV__) return null;

  const { role, setRole } = useAppContext();

  function toggle() {
    setRole(role === 'sender' ? 'driver' : 'sender');
  }

  return (
    <Pressable style={styles.pill} onPress={toggle}>
      <Text style={styles.text}>{role === 'sender' ? '📦 Expéditeur' : '🚗 Chauffeur'}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pill: {
    position: 'absolute',
    bottom: 90,
    right: 16,
    backgroundColor: '#1A2E5A',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#F97316',
    zIndex: 999,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
});

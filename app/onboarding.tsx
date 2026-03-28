import { router } from 'expo-router';
import { Package2, Truck } from 'lucide-react-native';
import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useAppContext } from '@/context/app-context';
import { UserRole } from '@/constants/mock-data';

interface RoleCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onPress: () => void;
}

function RoleCard({ icon, title, subtitle, onPress }: RoleCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      onPress={onPress}
    >
      <View style={styles.cardIcon}>{icon}</View>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardSubtitle}>{subtitle}</Text>
    </Pressable>
  );
}

export default function OnboardingScreen() {
  const { setRole } = useAppContext();

  function selectRole(role: UserRole) {
    setRole(role);
    router.replace('/auth');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.logo}>Louage Express</Text>
          <Text style={styles.tagline}>Envoyez vos colis avec les louagistes</Text>
        </View>

        <View style={styles.cards}>
          <RoleCard
            icon={<Package2 size={36} color="#F97316" />}
            title="Je suis Expéditeur"
            subtitle="Envoyez un colis vers n'importe quelle ville"
            onPress={() => selectRole('sender')}
          />
          <RoleCard
            icon={<Truck size={36} color="#F97316" />}
            title="Je suis Chauffeur"
            subtitle="Transportez des colis sur vos trajets habituels"
            onPress={() => selectRole('driver')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1B2A',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    gap: 48,
  },
  header: {
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  tagline: {
    fontSize: 16,
    color: '#94A3B8',
    textAlign: 'center',
    fontWeight: '400',
  },
  cards: {
    gap: 16,
  },
  card: {
    backgroundColor: '#162236',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1.5,
    borderColor: '#1E3A5F',
    gap: 8,
  },
  cardPressed: {
    borderColor: '#F97316',
    opacity: 0.9,
  },
  cardIcon: {
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#94A3B8',
    fontWeight: '400',
  },
});

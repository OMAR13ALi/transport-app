import { router } from 'expo-router';
import { Package2 } from 'lucide-react-native';
import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ShipmentCard } from '@/components/shipment-card';
import { PrimaryButton } from '@/components/ui/primary-button';
import { useAppContext } from '@/context/app-context';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useThemeColor } from '@/hooks/use-theme-color';

function EmptyState() {
  const secondary = useThemeColor({}, 'textSecondary');
  return (
    <View style={styles.empty}>
      <Package2 size={56} color="#94A3B8" />
      <Text style={[styles.emptyTitle, { color: secondary }]}>Aucun envoi en cours</Text>
      <Text style={[styles.emptySubtitle, { color: secondary }]}>
        Créez votre premier envoi pour commencer
      </Text>
    </View>
  );
}

export default function SenderHomeScreen() {
  const { shipments } = useAppContext();
  const bg = useThemeColor({}, 'background');
  const text = useThemeColor({}, 'text');
  const secondary = useThemeColor({}, 'textSecondary');

  const myShipments = shipments.filter(s => s.status !== 'arrived');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bg }]}>
      <FlatList
        data={myShipments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ShipmentCard shipment={item} />}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<EmptyState />}
        ListHeaderComponent={
          <View style={styles.header}>
            <View style={styles.greeting}>
              <Text style={[styles.greetTitle, { color: text }]}>Mes envois</Text>
              <Text style={[styles.greetSub, { color: secondary }]}>
                {myShipments.length} envoi{myShipments.length !== 1 ? 's' : ''} en cours
              </Text>
            </View>
            <PrimaryButton
              label="Envoyer un colis"
              onPress={() => router.push('/shipment/new')}
            />
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 20,
    gap: 12,
  },
  header: {
    gap: 20,
    marginBottom: 8,
  },
  greeting: {
    gap: 4,
  },
  greetTitle: {
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  greetSub: {
    fontSize: 15,
    fontWeight: '400',
  },
  empty: {
    alignItems: 'center',
    gap: 12,
    paddingTop: 60,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  emptySubtitle: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '400',
  },
});

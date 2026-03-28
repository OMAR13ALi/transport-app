import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Phone } from 'lucide-react-native';
import React from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RouteMap } from '@/components/route-map';
import { Badge } from '@/components/ui/badge';
import { PaymentBadge } from '@/components/ui/payment-badge';
import { PrimaryButton } from '@/components/ui/primary-button';
import { RouteHeader } from '@/components/route-header';
import { Divider } from '@/components/ui/divider';
import { PackageCategory } from '@/constants/mock-data';
import { useAppContext } from '@/context/app-context';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useThemeColor } from '@/hooks/use-theme-color';

const STEPS = ['at_station', 'on_the_road', 'arrived'] as const;
const STEP_LABELS = ['À la station', 'En route', 'Livré'];

const CATEGORY_LABELS: Record<PackageCategory, string> = {
  documents: 'Documents',
  fragile: 'Fragile',
  electronique: 'Électronique',
  vetements: 'Vêtements',
  alimentaire: 'Alimentaire',
  autre: 'Autre',
};

function InfoRow({ label, value }: { label: string; value: string }) {
  const text = useThemeColor({}, 'text');
  const secondary = useThemeColor({}, 'textSecondary');
  return (
    <View style={styles.infoRow}>
      <Text style={[styles.infoLabel, { color: secondary }]}>{label}</Text>
      <Text style={[styles.infoValue, { color: text }]}>{value}</Text>
    </View>
  );
}

export default function ShipmentDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { shipments, role, updateShipmentStatus } = useAppContext();
  const isDark = useColorScheme() === 'dark';
  const bg = useThemeColor({}, 'background');
  const card = useThemeColor({}, 'card');
  const border = useThemeColor({}, 'border');
  const secondary = useThemeColor({}, 'textSecondary');
  const text = useThemeColor({}, 'text');

  const shipment = shipments.find(s => s.id === id);

  if (!shipment) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: bg }]}>
        <Text style={{ color: secondary, textAlign: 'center', marginTop: 40 }}>
          Envoi introuvable
        </Text>
      </SafeAreaView>
    );
  }

  const currentStep = STEPS.indexOf(shipment.status);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bg }]}>
      {/* Deep Blue header bar */}
      <View style={styles.navBar}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <ArrowLeft size={22} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.navTitle}>Détail du colis</Text>
        <View style={{ width: 38 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <RouteHeader from={shipment.from} to={shipment.to} />

        {/* Route Map */}
        <RouteMap
          from={shipment.from}
          to={shipment.to}
          style={styles.map}
        />

        {/* Stepper */}
        <View style={[styles.section, { backgroundColor: card, borderColor: border }]}>
          <View style={styles.stepper}>
            {STEPS.map((step, i) => {
              const done = i <= currentStep;
              return (
                <React.Fragment key={step}>
                  <View style={styles.stepItem}>
                    <View style={[styles.stepDot, done && styles.stepDotActive]} />
                    <Text style={[styles.stepLabel, { color: done ? '#F97316' : secondary }]}>
                      {STEP_LABELS[i]}
                    </Text>
                  </View>
                  {i < STEPS.length - 1 && (
                    <View style={[styles.stepLine, done && i < currentStep && styles.stepLineActive]} />
                  )}
                </React.Fragment>
              );
            })}
          </View>
          <Badge status={shipment.status} dark={isDark} />
        </View>

        {/* Info grid */}
        <View style={[styles.section, { backgroundColor: card, borderColor: border }]}>
          <InfoRow label="Expéditeur" value={shipment.senderName} />
          <Divider />
          <InfoRow label="Destinataire" value={shipment.receiverName} />
          <Divider />
          <InfoRow
            label="Taille"
            value={shipment.size.charAt(0).toUpperCase() + shipment.size.slice(1)}
          />
          <Divider />
          <InfoRow label="Catégorie" value={CATEGORY_LABELS[shipment.category]} />
          <Divider />
          <InfoRow label="Prix" value={`${shipment.priceInDT} DT`} />
          <Divider />
          {/* Payment method row */}
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: secondary }]}>Paiement</Text>
            <PaymentBadge method={shipment.paymentMethod} />
          </View>
          <Divider />
          <InfoRow label="Description" value={shipment.description} />
        </View>

        {/* Photo placeholder */}
        <View style={[styles.photoPlaceholder, { backgroundColor: card, borderColor: border }]}>
          <Text style={[styles.photoLabel, { color: secondary }]}>Photo du colis</Text>
          <View style={[styles.photoBox, { backgroundColor: isDark ? '#1E3A5F' : '#F1F5F9' }]} />
        </View>

        {/* CTAs */}
        <View style={styles.ctas}>
          {role === 'sender' && shipment.status === 'at_station' && (
            <PrimaryButton
              label="Afficher le QR code"
              onPress={() => router.push(`/shipment/${id}/qr`)}
            />
          )}
          {role === 'driver' && shipment.status === 'at_station' && (
            <PrimaryButton
              label="Scanner le code — Prise en charge"
              onPress={() => router.push(`/shipment/${id}/qr`)}
            />
          )}
          {role === 'driver' && shipment.status === 'on_the_road' && (
            <View style={styles.callRow}>
              <View style={{ flex: 1 }}>
                <PrimaryButton
                  label="Confirmer la livraison"
                  onPress={() => updateShipmentStatus(id, 'arrived')}
                />
              </View>
              <Pressable style={styles.callBtn}>
                <Phone size={22} color="#F97316" />
              </Pressable>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1A2E5A',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navTitle: { color: '#FFFFFF', fontSize: 17, fontWeight: '700' },
  scroll: { gap: 12, paddingBottom: 40 },
  map: {
    marginHorizontal: 16,
    marginTop: 4,
  },
  section: {
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    gap: 12,
  },
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepItem: {
    alignItems: 'center',
    gap: 4,
  },
  stepDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#E2E8F0',
  },
  stepDotActive: {
    backgroundColor: '#F97316',
  },
  stepLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#E2E8F0',
    marginBottom: 18,
  },
  stepLineActive: {
    backgroundColor: '#F97316',
  },
  stepLabel: {
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
    width: 72,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
  },
  infoLabel: { fontSize: 13, fontWeight: '500' },
  infoValue: { fontSize: 14, fontWeight: '600', maxWidth: '60%', textAlign: 'right' },
  photoPlaceholder: {
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    gap: 8,
  },
  photoLabel: { fontSize: 13, fontWeight: '600' },
  photoBox: {
    height: 160,
    borderRadius: 12,
  },
  ctas: {
    paddingHorizontal: 16,
    gap: 12,
  },
  callRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  callBtn: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: '#FFF7ED',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#F97316',
  },
});

import { router } from 'expo-router';
import { ArrowRight, Box, Package, PackagePlus } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Badge } from '@/components/ui/badge';
import { PaymentBadge } from '@/components/ui/payment-badge';
import { PressableScale } from '@/components/ui/pressable-scale';
import { PackageSize, Shipment } from '@/constants/mock-data';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useThemeColor } from '@/hooks/use-theme-color';

const SIZE_ICONS: Record<PackageSize, React.ComponentType<{ size: number; color: string }>> = {
  petit: Package,
  moyen: PackagePlus,
  grand: Box,
};

function formatRelativeTime(date: Date): string {
  const mins = Math.floor((Date.now() - date.getTime()) / 60000);
  if (mins < 60) return `il y a ${mins} min`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `il y a ${hrs}h`;
  return `il y a ${Math.floor(hrs / 24)}j`;
}

interface ShipmentCardProps {
  shipment: Shipment;
}

export function ShipmentCard({ shipment }: ShipmentCardProps) {
  const isDark = useColorScheme() === 'dark';
  const card = useThemeColor({}, 'card');
  const border = useThemeColor({}, 'border');
  const text = useThemeColor({}, 'text');
  const secondary = useThemeColor({}, 'textSecondary');

  const SizeIcon = SIZE_ICONS[shipment.size];

  return (
    <PressableScale onPress={() => router.push(`/shipment/${shipment.id}`)}>
      <View style={[styles.card, { backgroundColor: card, borderColor: border }]}>
        <View style={styles.header}>
          <View style={styles.route}>
            <Text style={[styles.city, { color: text }]}>{shipment.from.city}</Text>
            <ArrowRight size={16} color="#F97316" />
            <Text style={[styles.city, { color: text }]}>{shipment.to.city}</Text>
          </View>
          <Text style={[styles.price, { color: '#F97316' }]}>{shipment.priceInDT} DT</Text>
        </View>

        <View style={styles.meta}>
          <View style={styles.metaLeft}>
            <SizeIcon size={16} color={secondary} />
            <Text style={[styles.sizeLabel, { color: secondary }]}>
              {shipment.size.charAt(0).toUpperCase() + shipment.size.slice(1)}
            </Text>
            <PaymentBadge method={shipment.paymentMethod} size="sm" />
          </View>
          <Badge status={shipment.status} dark={isDark} />
        </View>

        <View style={styles.footer}>
          <Text style={[styles.senderName, { color: secondary }]}>{shipment.senderName}</Text>
          <Text style={[styles.time, { color: secondary }]}>{formatRelativeTime(shipment.createdAt)}</Text>
        </View>
      </View>
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  route: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  city: {
    fontSize: 17,
    fontWeight: '700',
  },
  price: {
    fontSize: 17,
    fontWeight: '800',
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  metaLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  sizeLabel: {
    fontSize: 13,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  senderName: {
    fontSize: 13,
    fontWeight: '500',
  },
  time: {
    fontSize: 12,
  },
});

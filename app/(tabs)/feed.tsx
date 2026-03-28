import { ChevronDown, Layers, Package2 } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { CapacityBar } from '@/components/capacity-bar';
import { StationBadge } from '@/components/station-badge';
import { Badge } from '@/components/ui/badge';
import { PaymentBadge } from '@/components/ui/payment-badge';
import { PrimaryButton } from '@/components/ui/primary-button';
import { Shipment, SIZE_CAPACITY_UNITS, STATIONS } from '@/constants/mock-data';
import { useAppContext } from '@/context/app-context';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useThemeColor } from '@/hooks/use-theme-color';

function PackageRow({
  shipment,
  onAccept,
  disabled,
}: {
  shipment: Shipment;
  onAccept: () => void;
  disabled: boolean;
}) {
  const card = useThemeColor({}, 'card');
  const border = useThemeColor({}, 'border');
  const text = useThemeColor({}, 'text');
  const secondary = useThemeColor({}, 'textSecondary');
  const isDark = useColorScheme() === 'dark';
  const units = SIZE_CAPACITY_UNITS[shipment.size];

  return (
    <View style={[styles.packageRow, { backgroundColor: card, borderColor: border }]}>
      <View style={styles.packageInfo}>
        <View style={styles.routeRow}>
          <Text style={[styles.routeText, { color: text }]}>
            {shipment.from.city} → {shipment.to.city}
          </Text>
          <Text style={[styles.price, { color: '#F97316' }]}>{shipment.priceInDT} DT</Text>
        </View>
        <Text style={[styles.desc, { color: secondary }]}>{shipment.description}</Text>
        <View style={styles.packageMeta}>
          <Badge status={shipment.status} dark={isDark} />
          <PaymentBadge method={shipment.paymentMethod} size="sm" />
          <View style={styles.capacityChip}>
            <Layers size={12} color={secondary} />
            <Text style={[styles.capacityChipText, { color: secondary }]}>
              {units} unité{units > 1 ? 's' : ''}
            </Text>
          </View>
        </View>
      </View>
      <PrimaryButton label="Accepter" onPress={onAccept} disabled={disabled} />
      {disabled && (
        <Text style={styles.fullText}>Coffre plein</Text>
      )}
    </View>
  );
}

export default function DriverFeedScreen() {
  const {
    shipments,
    acceptShipment,
    canAcceptShipment,
    usedCapacity,
    driverProfile,
    setDriverStation,
  } = useAppContext();
  const [showPicker, setShowPicker] = useState(false);

  const bg = useThemeColor({}, 'background');
  const text = useThemeColor({}, 'text');
  const secondary = useThemeColor({}, 'textSecondary');
  const card = useThemeColor({}, 'card');
  const border = useThemeColor({}, 'border');

  const currentStation = driverProfile.currentStation;

  const available = shipments.filter(
    s => s.status === 'at_station' && s.from.id === currentStation.id
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bg }]}>
      <FlatList
        data={available}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PackageRow
            shipment={item}
            onAccept={() => acceptShipment(item.id)}
            disabled={!canAcceptShipment(item.size)}
          />
        )}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Package2 size={56} color="#94A3B8" />
            <Text style={[styles.emptyTitle, { color: secondary }]}>Aucun colis disponible</Text>
            <Text style={[styles.emptySub, { color: secondary }]}>
              Il n'y a pas de colis à cette station pour le moment
            </Text>
          </View>
        }
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={[styles.title, { color: text }]}>Colis disponibles</Text>
            <Text style={[styles.subtitle, { color: secondary }]}>Vous êtes à :</Text>
            <Pressable
              style={[styles.stationPicker, { backgroundColor: card, borderColor: border }]}
              onPress={() => setShowPicker(true)}
            >
              <StationBadge name={currentStation.name} />
              <ChevronDown size={20} color={secondary} />
            </Pressable>
            <View style={styles.capacityContainer}>
              <CapacityBar used={usedCapacity} max={driverProfile.maxCapacity} />
            </View>
            <Text style={[styles.count, { color: secondary }]}>
              {available.length} colis disponible{available.length !== 1 ? 's' : ''}
            </Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />

      <Modal visible={showPicker} animationType="slide" presentationStyle="pageSheet">
        <SafeAreaView style={[styles.modal, { backgroundColor: card }]}>
          <View style={styles.modalHeader}>
            <Text style={[styles.modalTitle, { color: text }]}>Choisir une station</Text>
            <Pressable onPress={() => setShowPicker(false)}>
              <Text style={styles.closeBtn}>Fermer</Text>
            </Pressable>
          </View>
          <FlatList
            data={STATIONS}
            keyExtractor={s => s.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.stationItem,
                  { borderBottomColor: border },
                  item.id === currentStation.id && styles.stationSelected,
                ]}
                onPress={() => {
                  setDriverStation(item);
                  setShowPicker(false);
                }}
              >
                <Text
                  style={[
                    styles.stationName,
                    { color: text },
                    item.id === currentStation.id && styles.stationNameSelected,
                  ]}
                >
                  {item.name}
                </Text>
                <Text style={[styles.stationCity, { color: secondary }]}>{item.city}</Text>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: 20, gap: 12 },
  header: { gap: 8, marginBottom: 8 },
  title: { fontSize: 28, fontWeight: '800', letterSpacing: -0.5 },
  subtitle: { fontSize: 14, fontWeight: '400' },
  stationPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    marginTop: 4,
  },
  capacityContainer: {
    marginTop: 8,
  },
  count: { fontSize: 13, fontWeight: '500', marginTop: 4 },
  packageRow: {
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    gap: 12,
  },
  packageInfo: { gap: 8 },
  routeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  routeText: { fontSize: 17, fontWeight: '700' },
  price: { fontSize: 17, fontWeight: '800' },
  desc: { fontSize: 13 },
  packageMeta: { flexDirection: 'row', gap: 8, alignItems: 'center', flexWrap: 'wrap' },
  capacityChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  capacityChipText: {
    fontSize: 12,
    fontWeight: '500',
  },
  fullText: {
    color: '#EF4444',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  empty: { alignItems: 'center', gap: 12, paddingTop: 60 },
  emptyTitle: { fontSize: 18, fontWeight: '700' },
  emptySub: { fontSize: 14, textAlign: 'center' },
  modal: { flex: 1 },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E2E8F0',
  },
  modalTitle: { fontSize: 20, fontWeight: '700' },
  closeBtn: { color: '#F97316', fontSize: 16, fontWeight: '600' },
  stationItem: {
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    gap: 2,
  },
  stationSelected: { backgroundColor: '#FFF7ED' },
  stationName: { fontSize: 16, fontWeight: '600' },
  stationNameSelected: { color: '#F97316' },
  stationCity: { fontSize: 13 },
});

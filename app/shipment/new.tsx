import { router } from 'expo-router';
import {
  AlertCircle,
  ArrowLeft,
  Banknote,
  ChevronDown,
  Cpu,
  FileText,
  Package,
  Shirt,
  UtensilsCrossed,
  Wallet,
} from 'lucide-react-native';
import React, { useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SizeSelector } from '@/components/size-selector';
import { Divider } from '@/components/ui/divider';
import { PrimaryButton } from '@/components/ui/primary-button';
import {
  PackageCategory,
  PackageSize,
  PaymentMethod,
  SIZE_CAPACITY_UNITS,
  Station,
  STATIONS,
} from '@/constants/mock-data';
import { useAppContext } from '@/context/app-context';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useThemeColor } from '@/hooks/use-theme-color';

type PickerTarget = 'from' | 'to' | null;

const CATEGORIES: {
  key: PackageCategory;
  label: string;
  icon: React.ComponentType<{ size: number; color: string }>;
}[] = [
  { key: 'documents', label: 'Documents', icon: FileText },
  { key: 'fragile', label: 'Fragile', icon: AlertCircle },
  { key: 'electronique', label: 'Électronique', icon: Cpu },
  { key: 'vetements', label: 'Vêtements', icon: Shirt },
  { key: 'alimentaire', label: 'Alimentaire', icon: UtensilsCrossed },
  { key: 'autre', label: 'Autre', icon: Package },
];

function StationPickerModal({
  visible,
  onClose,
  onSelect,
  selected,
  exclude,
}: {
  visible: boolean;
  onClose: () => void;
  onSelect: (s: Station) => void;
  selected: Station | null;
  exclude: Station | null;
}) {
  const card = useThemeColor({}, 'card');
  const border = useThemeColor({}, 'border');
  const text = useThemeColor({}, 'text');
  const secondary = useThemeColor({}, 'textSecondary');

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet">
      <SafeAreaView style={[styles.modal, { backgroundColor: card }]}>
        <View style={[styles.modalHeader, { borderBottomColor: border }]}>
          <Text style={[styles.modalTitle, { color: text }]}>Choisir une station</Text>
          <Pressable onPress={onClose}>
            <Text style={styles.closeBtn}>Fermer</Text>
          </Pressable>
        </View>
        <FlatList
          data={STATIONS.filter(s => s.id !== exclude?.id)}
          keyExtractor={s => s.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.stationItem,
                { borderBottomColor: border },
                item.id === selected?.id && styles.stationSelected,
              ]}
              onPress={() => { onSelect(item); onClose(); }}
            >
              <Text style={[styles.stationName, { color: text }, item.id === selected?.id && styles.stationNameActive]}>
                {item.name}
              </Text>
              <Text style={[styles.stationCity, { color: secondary }]}>{item.city}</Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </Modal>
  );
}

export default function NewShipmentScreen() {
  const { addShipment } = useAppContext();
  const isDark = useColorScheme() === 'dark';

  const [from, setFrom] = useState<Station>(STATIONS[0]);
  const [to, setTo] = useState<Station | null>(null);
  const [size, setSize] = useState<PackageSize>('moyen');
  const [category, setCategory] = useState<PackageCategory>('autre');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cash_pickup');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [pickerTarget, setPickerTarget] = useState<PickerTarget>(null);
  const [loading, setLoading] = useState(false);

  const card = useThemeColor({}, 'card');
  const border = useThemeColor({}, 'border');
  const text = useThemeColor({}, 'text');
  const secondary = useThemeColor({}, 'textSecondary');
  const bg = useThemeColor({}, 'background');

  const isValid = to !== null && description.trim().length > 0 && Number(price) > 0;
  const capacityUnits = SIZE_CAPACITY_UNITS[size];

  function handleSubmit() {
    if (!isValid || !to) return;
    setLoading(true);
    setTimeout(() => {
      addShipment({
        id: `sh-${Date.now()}`,
        status: 'at_station',
        from,
        to,
        size,
        category,
        paymentMethod,
        priceInDT: Number(price),
        senderName: 'Moi',
        receiverName: 'Destinataire',
        receiverPhone: '',
        description: description.trim(),
        createdAt: new Date(),
      });
      setLoading(false);
      router.replace('/(tabs)' as any);
    }, 600);
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bg }]}>
      {/* Header */}
      <View style={styles.navBar}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <ArrowLeft size={22} color="#FFFFFF" />
        </Pressable>
        <Text style={styles.navTitle}>Nouvel envoi</Text>
        <View style={{ width: 38 }} />
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

          {/* Stations */}
          <View style={[styles.section, { backgroundColor: card, borderColor: border }]}>
            <Text style={[styles.sectionTitle, { color: secondary }]}>TRAJET</Text>

            <Pressable style={styles.fieldRow} onPress={() => setPickerTarget('from')}>
              <Text style={[styles.fieldLabel, { color: secondary }]}>Départ</Text>
              <View style={styles.fieldRight}>
                <Text style={[styles.fieldValue, { color: text }]}>{from.name}</Text>
                <ChevronDown size={16} color={secondary} />
              </View>
            </Pressable>

            <Divider />

            <Pressable style={styles.fieldRow} onPress={() => setPickerTarget('to')}>
              <Text style={[styles.fieldLabel, { color: secondary }]}>Arrivée</Text>
              <View style={styles.fieldRight}>
                <Text style={[styles.fieldValue, { color: to ? text : secondary }]}>
                  {to ? to.name : 'Choisir…'}
                </Text>
                <ChevronDown size={16} color={secondary} />
              </View>
            </Pressable>
          </View>

          {/* Size */}
          <View style={[styles.section, { backgroundColor: card, borderColor: border }]}>
            <Text style={[styles.sectionTitle, { color: secondary }]}>TAILLE DU COLIS</Text>
            <SizeSelector value={size} onChange={setSize} />
            <Text style={[styles.capacityHint, { color: secondary }]}>
              Coût: {capacityUnits} unité{capacityUnits > 1 ? 's' : ''} de coffre
            </Text>
          </View>

          {/* Category */}
          <View style={[styles.section, { backgroundColor: card, borderColor: border }]}>
            <Text style={[styles.sectionTitle, { color: secondary }]}>CATÉGORIE</Text>
            <View style={styles.categoryGrid}>
              {CATEGORIES.map(({ key, label, icon: Icon }) => {
                const selected = category === key;
                const tileBg = selected
                  ? (isDark ? '#431407' : '#FFF7ED')
                  : card;
                const tileColor = selected ? '#F97316' : '#94A3B8';
                const textColor = selected ? '#F97316' : text;
                const tileBorder = selected ? '#F97316' : border;
                return (
                  <Pressable
                    key={key}
                    style={[styles.categoryTile, { backgroundColor: tileBg, borderColor: tileBorder }]}
                    onPress={() => setCategory(key)}
                  >
                    <Icon size={22} color={tileColor} />
                    <Text style={[styles.categoryLabel, { color: textColor }]}>{label}</Text>
                  </Pressable>
                );
              })}
            </View>
          </View>

          {/* Description */}
          <View style={[styles.section, { backgroundColor: card, borderColor: border }]}>
            <Text style={[styles.sectionTitle, { color: secondary }]}>DESCRIPTION</Text>
            <TextInput
              style={[styles.textInput, { color: text, borderColor: border }]}
              placeholder="Ex: Documents administratifs, vêtements…"
              placeholderTextColor={secondary}
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={3}
            />
          </View>

          {/* Price */}
          <View style={[styles.section, { backgroundColor: card, borderColor: border }]}>
            <Text style={[styles.sectionTitle, { color: secondary }]}>PRIX CONVENU</Text>
            <View style={[styles.priceRow, { borderColor: border }]}>
              <TextInput
                style={[styles.priceInput, { color: text }]}
                placeholder="0"
                placeholderTextColor={secondary}
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
              />
              <Text style={styles.priceSuffix}>DT</Text>
            </View>
          </View>

          {/* Payment method */}
          <View style={[styles.section, { backgroundColor: card, borderColor: border }]}>
            <Text style={[styles.sectionTitle, { color: secondary }]}>MODE DE PAIEMENT</Text>
            <View style={styles.paymentRow}>
              {([
                { key: 'cash_pickup' as PaymentMethod, icon: Banknote, label: 'À la station', sub: 'Payé au départ' },
                { key: 'cash_delivery' as PaymentMethod, icon: Wallet, label: 'À la livraison', sub: "Payé à l'arrivée" },
              ] as const).map(({ key, icon: Icon, label, sub }) => {
                const selected = paymentMethod === key;
                const tileBg = selected ? (isDark ? '#431407' : '#FFF7ED') : card;
                const tileColor = selected ? '#F97316' : '#94A3B8';
                const tileBorder = selected ? '#F97316' : border;
                return (
                  <Pressable
                    key={key}
                    style={[styles.paymentTile, { backgroundColor: tileBg, borderColor: tileBorder }]}
                    onPress={() => setPaymentMethod(key)}
                  >
                    <Icon size={22} color={tileColor} />
                    <Text style={[styles.paymentLabel, { color: selected ? '#F97316' : text }]}>{label}</Text>
                    <Text style={[styles.paymentSub, { color: secondary }]}>{sub}</Text>
                  </Pressable>
                );
              })}
            </View>
          </View>

          <PrimaryButton
            label="Créer l'envoi"
            onPress={handleSubmit}
            loading={loading}
            disabled={!isValid}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Station picker modals */}
      <StationPickerModal
        visible={pickerTarget === 'from'}
        onClose={() => setPickerTarget(null)}
        onSelect={setFrom}
        selected={from}
        exclude={to}
      />
      <StationPickerModal
        visible={pickerTarget === 'to'}
        onClose={() => setPickerTarget(null)}
        onSelect={setTo}
        selected={to}
        exclude={from}
      />
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
  scroll: { padding: 16, gap: 12, paddingBottom: 40 },
  section: {
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  fieldRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  fieldLabel: { fontSize: 15, fontWeight: '500' },
  fieldRight: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  fieldValue: { fontSize: 15, fontWeight: '600' },
  capacityHint: {
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  categoryTile: {
    width: '48%',
    borderWidth: 1.5,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    gap: 6,
  },
  categoryLabel: {
    fontSize: 13,
    fontWeight: '600',
  },
  paymentRow: {
    flexDirection: 'row',
    gap: 10,
  },
  paymentTile: {
    flex: 1,
    borderWidth: 1.5,
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
    gap: 4,
  },
  paymentLabel: {
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
  },
  paymentSub: {
    fontSize: 11,
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  priceInput: {
    flex: 1,
    fontSize: 24,
    fontWeight: '700',
    paddingVertical: 12,
  },
  priceSuffix: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F97316',
  },
  // Modal styles
  modal: { flex: 1 },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
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
  stationNameActive: { color: '#F97316' },
  stationCity: { fontSize: 13 },
});

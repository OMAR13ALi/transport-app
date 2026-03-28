import { ChevronDown, ChevronRight, Package2, Truck } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Divider } from '@/components/ui/divider';
import { STATIONS, Station } from '@/constants/mock-data';
import { useAppContext } from '@/context/app-context';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useThemeColor } from '@/hooks/use-theme-color';

const CAPACITY_OPTIONS = [4, 6, 8, 10, 12];

export default function ProfileScreen() {
  const {
    role,
    setRole,
    shipments,
    driverProfile,
    setDriverMaxCapacity,
    setDriverStation,
    usedCapacity,
  } = useAppContext();
  const isDark = useColorScheme() === 'dark';
  const [showStationPicker, setShowStationPicker] = useState(false);

  const bg = useThemeColor({}, 'background');
  const card = useThemeColor({}, 'card');
  const border = useThemeColor({}, 'border');
  const text = useThemeColor({}, 'text');
  const secondary = useThemeColor({}, 'textSecondary');

  const roleLabel = role === 'driver' ? 'Chauffeur' : 'Expéditeur';
  const initials = roleLabel.slice(0, 2).toUpperCase();

  const totalShipments = shipments.length;
  const activeShipments = shipments.filter(s => s.status !== 'arrived').length;
  const deliveredShipments = shipments.filter(s => s.status === 'arrived').length;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bg }]}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>{initials}</Text>
          </View>
          <View style={[styles.roleBadge, { backgroundColor: isDark ? '#1E3A5F' : '#EFF6FF' }]}>
            <Text style={[styles.roleBadgeText, { color: isDark ? '#93C5FD' : '#1A2E5A' }]}>
              {roleLabel}
            </Text>
          </View>
        </View>

        {/* Role Switch */}
        <View style={[styles.section, { backgroundColor: card, borderColor: border }]}>
          <Text style={[styles.sectionTitle, { color: secondary }]}>MODE</Text>
          <View style={styles.roleSwitchRow}>
            <Pressable
              style={[
                styles.roleTile,
                {
                  borderColor: role === 'sender' ? '#F97316' : border,
                  backgroundColor: role === 'sender' ? (isDark ? '#431407' : '#FFF7ED') : card,
                },
              ]}
              onPress={() => setRole('sender')}
            >
              <Package2 size={28} color={role === 'sender' ? '#F97316' : '#94A3B8'} />
              <Text style={[styles.roleTileLabel, { color: role === 'sender' ? '#F97316' : text }]}>
                Expéditeur
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.roleTile,
                {
                  borderColor: role === 'driver' ? '#F97316' : border,
                  backgroundColor: role === 'driver' ? (isDark ? '#431407' : '#FFF7ED') : card,
                },
              ]}
              onPress={() => setRole('driver')}
            >
              <Truck size={28} color={role === 'driver' ? '#F97316' : '#94A3B8'} />
              <Text style={[styles.roleTileLabel, { color: role === 'driver' ? '#F97316' : text }]}>
                Chauffeur
              </Text>
            </Pressable>
          </View>
          <Text style={[styles.roleHint, { color: secondary }]}>
            Changer de mode ne supprime pas vos données
          </Text>
        </View>

        {/* Driver Settings */}
        {role === 'driver' && (
          <View style={[styles.section, { backgroundColor: card, borderColor: border }]}>
            <Text style={[styles.sectionTitle, { color: secondary }]}>PARAMÈTRES CHAUFFEUR</Text>

            {/* Station picker */}
            <Pressable
              style={styles.fieldRow}
              onPress={() => setShowStationPicker(true)}
            >
              <Text style={[styles.fieldLabel, { color: text }]}>Station actuelle</Text>
              <View style={styles.fieldRight}>
                <Text style={[styles.fieldValue, { color: secondary }]}>
                  {driverProfile.currentStation.name}
                </Text>
                <ChevronDown size={16} color={secondary} />
              </View>
            </Pressable>

            <Divider />

            {/* Capacity selector */}
            <View style={styles.capacitySection}>
              <Text style={[styles.fieldLabel, { color: text }]}>Capacité du coffre</Text>
              <View style={styles.capacitySegment}>
                {CAPACITY_OPTIONS.map(val => {
                  const selected = driverProfile.maxCapacity === val;
                  return (
                    <Pressable
                      key={val}
                      style={[
                        styles.capacityOption,
                        {
                          borderColor: selected ? '#F97316' : border,
                          backgroundColor: selected ? (isDark ? '#431407' : '#FFF7ED') : card,
                        },
                      ]}
                      onPress={() => setDriverMaxCapacity(val)}
                    >
                      <Text style={[styles.capacityOptionText, { color: selected ? '#F97316' : text }]}>
                        {val}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
              <Text style={[styles.capacityHint, { color: secondary }]}>
                1 unité = petit · 2 = moyen · 4 = grand{'\n'}
                En charge : {usedCapacity}/{driverProfile.maxCapacity} unités
              </Text>
            </View>
          </View>
        )}

        {/* Sender Stats */}
        {role === 'sender' && (
          <View style={[styles.section, { backgroundColor: card, borderColor: border }]}>
            <Text style={[styles.sectionTitle, { color: secondary }]}>MES STATISTIQUES</Text>
            <View style={styles.statsRow}>
              <View style={[styles.statTile, { backgroundColor: bg, borderColor: border }]}>
                <Text style={[styles.statNumber, { color: text }]}>{totalShipments}</Text>
                <Text style={[styles.statLabel, { color: secondary }]}>Total</Text>
              </View>
              <View style={[styles.statTile, { backgroundColor: bg, borderColor: border }]}>
                <Text style={[styles.statNumber, { color: '#F97316' }]}>{activeShipments}</Text>
                <Text style={[styles.statLabel, { color: secondary }]}>En cours</Text>
              </View>
              <View style={[styles.statTile, { backgroundColor: bg, borderColor: border }]}>
                <Text style={[styles.statNumber, { color: '#22C55E' }]}>{deliveredShipments}</Text>
                <Text style={[styles.statLabel, { color: secondary }]}>Livrés</Text>
              </View>
            </View>
          </View>
        )}

        {/* App Info */}
        <View style={[styles.section, { backgroundColor: card, borderColor: border }]}>
          <Text style={[styles.sectionTitle, { color: secondary }]}>APPLICATION</Text>
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: text }]}>Version</Text>
            <Text style={[styles.infoValue, { color: secondary }]}>1.0.0</Text>
          </View>
          <Divider />
          <Pressable style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: text }]}>À propos</Text>
            <ChevronRight size={16} color={secondary} />
          </Pressable>
        </View>

      </ScrollView>

      {/* Station Picker Modal */}
      <Modal visible={showStationPicker} animationType="slide" presentationStyle="pageSheet">
        <SafeAreaView style={[styles.modal, { backgroundColor: card }]}>
          <View style={[styles.modalHeader, { borderBottomColor: border }]}>
            <Text style={[styles.modalTitle, { color: text }]}>Choisir une station</Text>
            <Pressable onPress={() => setShowStationPicker(false)}>
              <Text style={styles.closeBtn}>Fermer</Text>
            </Pressable>
          </View>
          <FlatList
            data={STATIONS}
            keyExtractor={(s: Station) => s.id}
            renderItem={({ item }: { item: Station }) => (
              <TouchableOpacity
                style={[
                  styles.stationItem,
                  { borderBottomColor: border },
                  item.id === driverProfile.currentStation.id && styles.stationSelected,
                ]}
                onPress={() => {
                  setDriverStation(item);
                  setShowStationPicker(false);
                }}
              >
                <Text
                  style={[
                    styles.stationName,
                    { color: text },
                    item.id === driverProfile.currentStation.id && styles.stationNameActive,
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
  scroll: { padding: 20, gap: 16, paddingBottom: 40 },
  profileHeader: {
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
  },
  avatarCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#1A2E5A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
  },
  roleBadge: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 100,
  },
  roleBadgeText: {
    fontSize: 14,
    fontWeight: '700',
  },
  section: {
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    gap: 14,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  roleSwitchRow: {
    flexDirection: 'row',
    gap: 12,
  },
  roleTile: {
    flex: 1,
    borderWidth: 1.5,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    gap: 8,
  },
  roleTileLabel: {
    fontSize: 14,
    fontWeight: '700',
  },
  roleHint: {
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  fieldRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
  },
  fieldLabel: {
    fontSize: 15,
    fontWeight: '500',
  },
  fieldRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  fieldValue: {
    fontSize: 14,
  },
  capacitySection: {
    gap: 10,
  },
  capacitySegment: {
    flexDirection: 'row',
    gap: 8,
  },
  capacityOption: {
    flex: 1,
    borderWidth: 1.5,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  capacityOptionText: {
    fontSize: 15,
    fontWeight: '700',
  },
  capacityHint: {
    fontSize: 12,
    lineHeight: 18,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  statTile: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    gap: 4,
  },
  statNumber: {
    fontSize: 26,
    fontWeight: '800',
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
  },
  infoLabel: {
    fontSize: 15,
    fontWeight: '500',
  },
  infoValue: {
    fontSize: 14,
  },
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

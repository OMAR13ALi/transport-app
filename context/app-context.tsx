import React, { createContext, useContext, useState } from 'react';
import {
  DEFAULT_DRIVER_MAX_CAPACITY,
  MOCK_DRIVER_NAME,
  MOCK_SHIPMENTS,
  PackageSize,
  Shipment,
  ShipmentStatus,
  SIZE_CAPACITY_UNITS,
  Station,
  STATIONS,
  UserRole,
} from '@/constants/mock-data';

interface DriverProfile {
  maxCapacity: number;
  currentStation: Station;
}

interface AppContextValue {
  role: UserRole | null;
  setRole: (role: UserRole) => void;
  shipments: Shipment[];
  activeShipmentId: string | null;
  setActiveShipmentId: (id: string | null) => void;
  updateShipmentStatus: (id: string, status: ShipmentStatus) => void;
  addShipment: (shipment: Shipment) => void;
  driverProfile: DriverProfile;
  setDriverMaxCapacity: (units: number) => void;
  setDriverStation: (station: Station) => void;
  usedCapacity: number;
  remainingCapacity: number;
  canAcceptShipment: (size: PackageSize) => boolean;
  acceptShipment: (id: string) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<UserRole | null>(null);
  const [shipments, setShipments] = useState<Shipment[]>(MOCK_SHIPMENTS);
  const [activeShipmentId, setActiveShipmentId] = useState<string | null>(null);
  const [driverProfile, setDriverProfile] = useState<DriverProfile>({
    maxCapacity: DEFAULT_DRIVER_MAX_CAPACITY,
    currentStation: STATIONS[0],
  });

  const usedCapacity = shipments
    .filter(s => s.status === 'on_the_road' && s.driverName === MOCK_DRIVER_NAME)
    .reduce((sum, s) => sum + SIZE_CAPACITY_UNITS[s.size], 0);

  const remainingCapacity = driverProfile.maxCapacity - usedCapacity;

  function updateShipmentStatus(id: string, status: ShipmentStatus) {
    setShipments(prev => prev.map(s => (s.id === id ? { ...s, status } : s)));
  }

  function addShipment(shipment: Shipment) {
    setShipments(prev => [shipment, ...prev]);
  }

  function setDriverMaxCapacity(units: number) {
    setDriverProfile(prev => ({ ...prev, maxCapacity: units }));
  }

  function setDriverStation(station: Station) {
    setDriverProfile(prev => ({ ...prev, currentStation: station }));
  }

  function canAcceptShipment(size: PackageSize) {
    return remainingCapacity >= SIZE_CAPACITY_UNITS[size];
  }

  function acceptShipment(id: string) {
    setShipments(prev =>
      prev.map(s =>
        s.id === id ? { ...s, status: 'on_the_road' as ShipmentStatus, driverName: MOCK_DRIVER_NAME } : s
      )
    );
  }

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        shipments,
        activeShipmentId,
        setActiveShipmentId,
        updateShipmentStatus,
        addShipment,
        driverProfile,
        setDriverMaxCapacity,
        setDriverStation,
        usedCapacity,
        remainingCapacity,
        canAcceptShipment,
        acceptShipment,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppContextProvider');
  return ctx;
}

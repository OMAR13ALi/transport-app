export type ShipmentStatus = 'at_station' | 'on_the_road' | 'arrived';
export type PackageSize = 'petit' | 'moyen' | 'grand';
export type UserRole = 'sender' | 'driver';
export type PackageCategory = 'documents' | 'fragile' | 'electronique' | 'vetements' | 'alimentaire' | 'autre';
export type PaymentMethod = 'cash_pickup' | 'cash_delivery';

export interface Station {
  id: string;
  name: string;
  city: string;
  latitude: number;
  longitude: number;
}

export interface Shipment {
  id: string;
  status: ShipmentStatus;
  from: Station;
  to: Station;
  size: PackageSize;
  category: PackageCategory;
  paymentMethod: PaymentMethod;
  priceInDT: number;
  senderName: string;
  receiverName: string;
  receiverPhone: string;
  description: string;
  createdAt: Date;
  driverName?: string;
}

export const SIZE_CAPACITY_UNITS: Record<PackageSize, number> = {
  petit: 1,
  moyen: 2,
  grand: 4,
};

export const DEFAULT_DRIVER_MAX_CAPACITY = 8;
export const MOCK_DRIVER_NAME = 'Vous';

export const STATIONS: Station[] = [
  { id: 'tunis-central', name: 'Tunis Central', city: 'Tunis', latitude: 36.8190, longitude: 10.1658 },
  { id: 'sfax-nord', name: 'Sfax Nord', city: 'Sfax', latitude: 34.7397, longitude: 10.7601 },
  { id: 'sousse-port', name: 'Sousse Port', city: 'Sousse', latitude: 35.8252, longitude: 10.6369 },
  { id: 'monastir-centre', name: 'Monastir Centre', city: 'Monastir', latitude: 35.7773, longitude: 10.8262 },
  { id: 'bizerte-ville', name: 'Bizerte Ville', city: 'Bizerte', latitude: 37.2746, longitude: 9.8739 },
  { id: 'gabes-centrale', name: 'Gabès Centrale', city: 'Gabès', latitude: 33.8830, longitude: 10.0982 },
  { id: 'nabeul-centre', name: 'Nabeul Centre', city: 'Nabeul', latitude: 36.4560, longitude: 10.7349 },
  { id: 'hammamet-nord', name: 'Hammamet Nord', city: 'Hammamet', latitude: 36.4000, longitude: 10.6167 },
  { id: 'gafsa-ville', name: 'Gafsa Ville', city: 'Gafsa', latitude: 34.4300, longitude: 8.7757 },
  { id: 'kairouan-centre', name: 'Kairouan Centre', city: 'Kairouan', latitude: 35.6781, longitude: 10.0963 },
];

const now = new Date();
const hoursAgo = (h: number) => new Date(now.getTime() - h * 60 * 60 * 1000);

export const MOCK_SHIPMENTS: Shipment[] = [
  {
    id: 'sh-001',
    status: 'at_station',
    from: STATIONS[0],
    to: STATIONS[1],
    size: 'moyen',
    category: 'documents',
    paymentMethod: 'cash_pickup',
    priceInDT: 15,
    senderName: 'Karim Mansour',
    receiverName: 'Salma Trabelsi',
    receiverPhone: '+21698765432',
    description: 'Documents administratifs',
    createdAt: hoursAgo(1),
  },
  {
    id: 'sh-002',
    status: 'at_station',
    from: STATIONS[0],
    to: STATIONS[2],
    size: 'petit',
    category: 'autre',
    paymentMethod: 'cash_delivery',
    priceInDT: 10,
    senderName: 'Leila Hamdi',
    receiverName: 'Ahmed Hamdi',
    receiverPhone: '+21697654321',
    description: 'Médicaments urgents',
    createdAt: hoursAgo(2),
  },
  {
    id: 'sh-003',
    status: 'on_the_road',
    from: STATIONS[0],
    to: STATIONS[5],
    size: 'grand',
    category: 'electronique',
    paymentMethod: 'cash_pickup',
    priceInDT: 30,
    senderName: 'Youssef Belhaj',
    receiverName: 'Nadia Belhaj',
    receiverPhone: '+21696543210',
    description: 'Pièces électroniques',
    createdAt: hoursAgo(5),
    driverName: 'Mohamed Chaari',
  },
  {
    id: 'sh-004',
    status: 'arrived',
    from: STATIONS[1],
    to: STATIONS[0],
    size: 'petit',
    category: 'autre',
    paymentMethod: 'cash_delivery',
    priceInDT: 12,
    senderName: 'Rim Khelifi',
    receiverName: 'Omar Khelifi',
    receiverPhone: '+21695432109',
    description: 'Colis personnel',
    createdAt: hoursAgo(24),
    driverName: 'Amine Dridi',
  },
  {
    id: 'sh-005',
    status: 'at_station',
    from: STATIONS[0],
    to: STATIONS[3],
    size: 'moyen',
    category: 'vetements',
    paymentMethod: 'cash_pickup',
    priceInDT: 18,
    senderName: 'Fatma Boukhari',
    receiverName: 'Sami Boukhari',
    receiverPhone: '+21694321098',
    description: 'Vêtements et accessoires',
    createdAt: hoursAgo(0.5),
  },
  {
    id: 'sh-006',
    status: 'at_station',
    from: STATIONS[0],
    to: STATIONS[6],
    size: 'petit',
    category: 'documents',
    paymentMethod: 'cash_delivery',
    priceInDT: 8,
    senderName: 'Hichem Laabidi',
    receiverName: 'Wafa Laabidi',
    receiverPhone: '+21693210987',
    description: 'Livres et fournitures',
    createdAt: hoursAgo(3),
  },
];

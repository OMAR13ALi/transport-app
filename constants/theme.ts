import { Platform } from 'react-native';

const accent = '#F97316'; // Safety Orange

export const Colors = {
  light: {
    text: '#0F172A',
    textSecondary: '#64748B',
    background: '#F8FAFC',
    card: '#FFFFFF',
    border: '#E2E8F0',
    tint: accent,
    icon: '#64748B',
    tabIconDefault: '#94A3B8',
    tabIconSelected: accent,
    primary: accent,
    statusAtStation: '#1A2E5A',
    statusOnRoad: accent,
    statusArrived: '#16A34A',
  },
  dark: {
    text: '#ECEDEE',
    textSecondary: '#94A3B8',
    background: '#0D1B2A',
    card: '#162236',
    border: '#1E3A5F',
    tint: accent,
    icon: '#94A3B8',
    tabIconDefault: '#64748B',
    tabIconSelected: accent,
    primary: accent,
    statusAtStation: '#4A6FA5',
    statusOnRoad: accent,
    statusArrived: '#22C55E',
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

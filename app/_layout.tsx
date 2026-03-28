import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Redirect, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { AppContextProvider, useAppContext } from '@/context/app-context';
import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

function RootRedirect() {
  const { role } = useAppContext();
  if (role === null) {
    return <Redirect href="/onboarding" />;
  }
  return null;
}

function RootStack() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootRedirect />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <Stack.Screen name="shipment/new" options={{ headerShown: false }} />
        <Stack.Screen name="shipment/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="shipment/[id]/qr" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <AppContextProvider>
      <RootStack />
    </AppContextProvider>
  );
}

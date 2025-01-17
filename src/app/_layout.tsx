import { StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from '@expo-google-fonts/amatic-sc';
import { Inter_900Black, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';

export default function RootLayout() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    InterSemiBold: Inter_600SemiBold,
    AmaticSC: AmaticSC_400Regular,
    AmaticSCBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded && !fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'DEVember' }} />
    </Stack>
  );
}

const styles = StyleSheet.create({});

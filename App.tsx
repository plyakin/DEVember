import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { useEffect } from 'react';
import DayListItem from './src/components/core/DayListItem';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from '@expo-google-fonts/amatic-sc';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const days = [...Array(24)].map((_, i) => i + 1);

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
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
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.columnWrapper}
        numColumns={2}
        data={days}
        renderItem={({ item }) => <DayListItem day={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  box: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#F9EDE3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#9b4521',
  },
  text: {
    fontSize: 70,
    color: '#9b4521',
  },
  content: {
    gap: 10,
    padding: 10,
  },
  columnWrapper: {
    gap: 10,
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import DayListItem from './src/components/core/DayListItem';
import React from 'react';

const days = [...Array(24)].map((_, i) => i + 1);

export default function App() {
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

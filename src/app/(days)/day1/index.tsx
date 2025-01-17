import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function index() {
  return (
    <View>
      <Stack.Screen name="index" options={{ title: 'Day 1' }} />
      <Text style={styles.title}>Day Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'AmaticSCBold',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});

import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';

export default function DayDetailsScreen() {
  return (
    <View>
      <Stack.Screen name="index" options={{ title: 'Day 2' }} />
      <Text style={styles.title}>Day Details Screen</Text>

      <Link href="/(days)/day2/onboarding" asChild>
        <Button title="Go to Onboarding" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'AmaticSCBold',
    fontSize: 40,
    textAlign: 'center',
    marginTop: 20,
  },
});

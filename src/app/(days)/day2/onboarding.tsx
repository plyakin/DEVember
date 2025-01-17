import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function OnboardingScreen() {
  return (
    <View style={styles.page}>
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <FontAwesome6 name="people-arrows" size={100} color="white" />
      <Text style={styles.title}>Track every transaction</Text>
      <Text style={styles.description}>
        Monitor your spending and contributions, ensuring every penny aligns
        with your family aspirations.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#15141A',
    padding: 20,
  },
  image: {},
  title: {
    fontFamily: 'InterSemiBold',
    fontSize: 26,
    color: '#FDFDFD',
  },
  description: {
    color: 'gray',
    fontSize: 18,
    fontFamily: 'Inter',
  },
});

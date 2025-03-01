// app/home.tsx
import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation

export default function Home() {
  const router = useRouter(); // Use the useRouter hook for navigation

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Page</Text>

      {/* Buttons to navigate to other pages */}
      <Button title="Go to Past" onPress={() => router.push('pages/past')} />
      <Button title="Go to Present" onPress={() => router.push('pages/present')} />
      <Button title="Go to Future" onPress={() => router.push('pages/future')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

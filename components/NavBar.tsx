// components/NavBar.tsx
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation

const NavBar = () => {
  const router = useRouter(); // Use the useRouter hook for navigation

  return (
    <View style={styles.navContainer}>
      <Button title="Go to Past" onPress={() => router.push('pages/past')} />
      <Button title="Go to Present" onPress={() => router.push('pages/present')} />
      <Button title="Go to Future" onPress={() => router.push('pages/future')} />
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
});

export default NavBar;

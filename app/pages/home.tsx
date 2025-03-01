// app/home.tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NavBar from '../../components/NavBar'; // Import the NavBar component

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Page</Text>

      {/* Include the NavBar component */}
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

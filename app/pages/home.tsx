// app/home.tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NavBar from '../../components/NavBar'; // Import the NavBar component
import styles from '../styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>fluid</Text>
      <Text style={styles.text}>Home Page</Text>

      <NavBar />
    </View>
  );
}

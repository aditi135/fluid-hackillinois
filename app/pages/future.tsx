import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NavBar from '../../components/NavBar'; // Import the NavBar component
import styles from '../styles';

export default function Future() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Future Tab</Text>
      <NavBar />

    </View>
  );
}

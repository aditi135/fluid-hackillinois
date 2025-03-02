import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NavBar from '../../components/NavBar'; // Import the NavBar component
import styles from '../styles';

export default function Present() {
  return (
    <View style={styles.container}>
      <div style={styles.banner}>
      <Text style={styles.logo}>fluid</Text>
      </div>
      <Text style={styles.title}>Present Tab</Text>
      <NavBar />

    </View>
  );
}

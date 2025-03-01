import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Animated, Easing } from 'react-native';
import NavBar from '../../components/NavBar'; // Import the NavBar component
import styles from '../styles';


export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>fluid</Text>
      <Text style={styles.title}>Home</Text>
      <NavBar />

    </View>
  );
}

const styles_local = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: 'Lexend',
    fontSize: 20,
    marginBottom: 20,
  },
});

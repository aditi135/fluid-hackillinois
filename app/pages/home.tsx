import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import NavBar from '../../components/NavBar'; // Import the NavBar component
import styles from '../styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <div style={styles.banner}>
      <Text style={styles.logo}>fluid</Text>
      </div>
      <Text style={styles.title}>Home</Text>
      <NavBar />
      <Text style={styles.header}>Your Fish</Text>
      <div style={styles.container}>
        <text style={styles.text}> Default Fish</text>
        <Image source={{uri: 'assets\images\baby-fish.png'}}/>
      </div>
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

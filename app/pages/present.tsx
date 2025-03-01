import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Present() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Present Tab</Text>
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
    fontFamily: 'Lexend',
    fontSize: 20,
  },
});

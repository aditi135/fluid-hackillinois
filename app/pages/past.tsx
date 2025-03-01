import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Past() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Past Tab</Text>
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

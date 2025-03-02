// Debts.js
import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import NavBar from '../../components/NavBar'; // Import the NavBar component
import HealthBar from '../../components/HealthBar'; // Import the Thermometer-themed HealthBar component
import styles from '../styles';

const { height, width } = Dimensions.get('window'); // Get screen dimensions

export default function Debts() {
  // Height of the health bars is set to 1/3 of the screen height
  const healthBarHeight = height / 3;

  // Calculate the width of the space to center the title
  const thermometerWidth = width * 0.3; // 30% of screen width for each thermometer
  const totalThermometerWidth = thermometerWidth * 2 + 20; // 2 thermometers + spacing between them
  const availableSpace = width - totalThermometerWidth; // Space remaining on the left


  return (
    <View style={styles.container}>
      {/* Title container to center the title dynamically */}
      <View style={[styles_local.titleContainer, { width: availableSpace }]}>
        <Text style={styles.title}>Debts</Text>
      </View>

      {/* Health bars container, now stacked horizontally */}
      <View style={styles_local.healthBars}>
        {/* Monthly Debt */}
        <HealthBar label="Monthly Debt" totalDebt={5000} paidAmount={2000} /> {/* Example: $5000 total, $2000 paid */}
        
        {/* Total Debt */}
        <HealthBar label="Total Debt" totalDebt={10000} paidAmount={4590} /> {/* Example: $10000 total, $4590 paid */}
      </View>

      {/* Main content */}
      
      {/* Navigation bar */}
      <div style={styles.banner}>
      <Text style={styles.logo}>fluid</Text>
      </div>
      <Text style={styles.text}>Past</Text>
      
      <NavBar />
    </View>
  );
}

const styles_local = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'center',
    position: 'relative',
    paddingTop: 20,
    paddingHorizontal: 20, // Ensure there is padding to prevent items from touching the edges
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Add space below the title
  },
  title: {
    fontFamily: 'Lexend',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
  },
  healthBars: {
    flexDirection: 'row', // Place the health bars horizontally
    justifyContent: 'space-between', // Space out the bars
    alignItems: 'center', // Center the bars vertically within the container
    width: width * 0.8, // Make sure the health bars fit in the screen
  },
  text: {
    fontFamily: 'Lexend',
    fontSize: 20,
  },
});

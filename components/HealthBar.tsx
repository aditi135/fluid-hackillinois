// HealthBar.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// Get screen width for responsiveness
const { width } = Dimensions.get('window');

const HealthBar = ({ label, totalDebt, paidAmount }) => {
  // Calculate the percentage of paid/debt ratio
  const percentage = totalDebt > 0 ? (paidAmount / totalDebt) * 100 : 0;

  return (
    <View style={styles.healthBarContainer}>
      <Text style={styles.debtText}>{label}</Text>

      {/* Horizontal Thermometer with a clean liquid fill */}
      <View style={styles.thermometer}>
        {/* Empty part of the thermometer tube */}
        <View style={styles.emptyBar}>
          {/* Filled part of the thermometer (liquid) */}
          <View
            style={[styles.filledBar, { width: `${percentage}%` }]} // Dynamically set the width based on the calculated percentage
          />
        </View>
      </View>

      {/* Display the calculated percentage for reference */}
      <Text style={styles.percentageText}>{percentage.toFixed(1)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  healthBarContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20, // Space between bars
  },
  debtText: {
    fontFamily: 'Lexend',
    fontSize: 14,  // Smaller text size for the label
    marginBottom: 5,
    color: '#333',
  },
  thermometer: {
    width: width * 0.3,  // 30% of screen width for the thermometer's width (adjustable)
    height: 30,  // Fixed height for the thermometer
    backgroundColor: '#e0e0e0',  // Light gray background for the thermometer
    borderRadius: 15,  // Rounded corners for the tube
    overflow: 'hidden', // Ensure the filled part stays within the boundaries
    borderWidth: 2, // Optional: border to define the thermometer shape
    borderColor: '#999', // Optional: darker border color
    position: 'relative',
  },
  emptyBar: {
    flex: 1,
    justifyContent: 'flex-start', // Position the liquid from the left
  },
  filledBar: {
    height: '100%',  // Full height of the thermometer tube
    backgroundColor: '#ff7f7f',  // Lighter red for the liquid
    position: 'absolute',
    left: 0,  // Ensure it starts filling from the left
  },
  percentageText: {
    fontFamily: 'Lexend',
    fontSize: 12,
    marginTop: 5,
    color: '#333',
  },
});

export default HealthBar;

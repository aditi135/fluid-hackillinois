import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function Home() {
  // Define the goal data that you want to send to the backend
  const [goal, setGoal] = useState({
    client_id: 'client123',
    saving: [{
      goal_id: 'goal1',
      target_amount: 10000,
      current_amount: 2000,
      deadline: '2025-12-31'
    }],
    debt: [],
    credit_score: [],
  });

  const [financialData, setFinancialData] = useState(null); // To store financial data fetched from backend

  // Function to add the goal to the backend
  const addGoal = () => {
    axios.post('http://localhost:5000/addGoal', { client_id: goal.client_id, goal: goal })
      .then(response => {
        Alert.alert('Success', 'Goal added successfully!');
        console.log('Response:', response.data); // Debugging log
      })
      .catch(error => {
        console.error('Error details:', error.response || error.message); // More error logging
        Alert.alert('Error', error.response ? error.response.data.message : 'Failed to add goal');
      });
  };

  // Function to fetch financial data from the backend
  const fetchFinancialData = () => {
    const customerId = 'client123';  // Assuming the customer ID is 'client123'
    
    axios.get(`http://localhost:5000/api/nessie/accounts/${customerId}`)
      .then(response => {
        setFinancialData(response.data); // Set the financial data in state
        Alert.alert('Success', 'Financial data fetched successfully!');
        console.log('Financial Data:', response.data); // Debugging log
      })
      .catch(error => {
        console.error('Error fetching financial data:', error.response || error.message);
        Alert.alert('Error', error.response ? error.response.data.message : 'Failed to fetch financial data');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Tab</Text>
      
      {/* Button to trigger adding a goal */}
      <Button title="Add Goal" onPress={addGoal} />
      
      {/* Button to fetch financial data */}
      <Button title="Fetch Financial Data" onPress={fetchFinancialData} />

      {/* Display fetched financial data (if any) */}
      {financialData && (
        <View style={styles.dataContainer}>
          <Text style={styles.dataText}>Financial Data:</Text>
          <Text style={styles.dataText}>{JSON.stringify(financialData, null, 2)}</Text>
        </View>
      )}
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
  dataContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '90%',
  },
  dataText: {
    fontSize: 14,
    color: 'black',
  },
});

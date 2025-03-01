import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, Alert, Dimensions } from 'react-native';
import Wave from 'react-native-waves'; // Import the Wave component

export default function Index() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle login
  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert('Error', 'Please enter both username and password');
    } else {
      Alert.alert('Login Successful', `Welcome, ${username}!`);
      // You can perform any additional logic here like redirecting to another screen
    }
  };

  return (
    <View style={styles.container}>
      {/* First Wave container */}
      <View style={styles.waveContainer}>
        <Wave
          placement="bottom"  // Position wave at the bottom of the container
          speed={5}  // Animation speed
          maxPoints={8}  // Number of wave points
          delta={30}  // Wave bounce amount
          color="#507DBC"  // Wave color
          gap={20}  // Gap between waves
        />
      </View>

      {/* Second Wave container, behind the first wave */}
      <View style={styles.secondWaveContainer}>
        <Wave
          placement="bottom"  // Position second wave at the bottom as well
          speed={3}  // Slower animation speed
          maxPoints={5}  // Fewer wave points for subtle effect
          delta={40}  // Larger wave bounce for variation
          color="#4A6F91"  // A different color for the second wave
          gap={30}  // Wider gap between waves
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Fluid</Text>

      {/* Login Section */}
      <View style={styles.loginSection}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}

// Get the screen dimensions
const { height, width } = Dimensions.get('window');

// Define a base constant for wave height and margin values
const waveHeight = height * 0.5;  // Half the screen height for the wave containers
const titleMarginBottom = height * 0.05;  // 5% of the screen height for margin below the title

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#DAE3E5',  // Background color for the page
    padding: 30,
    height: '100%',
    width: '100%'
  },
  waveContainer: {
    position: 'absolute',  // Position the first wave container absolutely
    bottom: 0,  // Position it at the bottom of the screen
    width: '100%',
    height: '50%',  // Half of the screen height
    zIndex: 0,  // Put the first wave behind other elements
  },
  secondWaveContainer: {
    position: 'absolute',  // Position the second wave container absolutely
    bottom: 100,  // Position it at the bottom of the screen, behind the first wave
    width: '100%',
    height: waveHeight,  // Half of the screen height
    zIndex: -1,  // Put the second wave behind the first wave
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#507DBC',  // White text for the title
    padding: 5,
    marginTop: 50,  // Use dynamic margin based on screen height
    zIndex: 1,  // Ensure title is on top of wave
  },
  loginSection: {
    width: '100%',
    maxWidth: 400,  // Limit the width of the login form
    zIndex: 1,  // Ensure the form is on top of the wave
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
    color: '#507DBC',
    backgroundColor: 'white',  // White background for the input fields
  },
});
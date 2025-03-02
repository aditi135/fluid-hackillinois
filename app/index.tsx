import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, Alert, Dimensions } from 'react-native';
import Wave from 'react-native-waves'; // Import the Wave component
import { useRouter } from 'expo-router'; // Importing useRouter for navigation
import axios from 'axios'; // Import axios for making HTTP requests

import secrets from "./secrets.js";

// const dns = require('node:dns');
// const os = require('os');

const options = { family: 4 };


export default function Index() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();  // This is how to get the router instance
    const [failedLogin, setFailedLogin] = useState(false);


  // Function to create a test user
    const createTestUsers = async () => {
        // user 1 - admin
        try {
            const response = await axios.post(`http://localhost:8080/createUser`, {
                username: 'admin',
                password: 'password'
            });
            console.log('Test user created:', response.data);
        } catch (error) {
            console.error('Error creating user:', error);
        }
        // user 2 - herc
        try {
        const response = await axios.post(`http://localhost:8080/createUser`, {
            username: 'herc733',
            password: 'iluvmeg!'
        });
        console.log('Test user created:', response.data);
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    const handleLogin = async () => {
        if (username === '' || password === '') {
            Alert.alert('Error', 'Please enter both username and password');
            return;
        }
        // Send request to backend to check if username exists and validate password
        const response = await fetch(`http://localhost:8080/login`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        if (response.ok) {
            const data = await response.json();  // Await the json() method to resolve the promise
            secrets.customer_id = data.user_info.customer_id;
            secrets.account_id = data.user_info.account_id;
            secrets.user_info = data.user_info;
            router.push("pages/home");
        } else {
            setFailedLogin(true);
        }
    };
  
  // For testing: create the test user on component mount
  React.useEffect(() => {
    // createTestUsers();
  }, []);


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
          color="#A1C6EA"  // A different color for the second wave
          gap={30}  // Wider gap between waves
        />
      </View>

      {/* Third Wave container, behind the first two waves */}
      <View style={styles.thirdWaveContainer}>
        <Wave
          placement="bottom"  // Position third wave at the bottom
          speed={4}  // Faster animation speed
          maxPoints={15}  // More wave points for a larger wave
          delta={20}  // Larger wave bounce for more dynamic movement
          color="#BBD1EA"  // A new color for the third wave
          gap={25}  // Medium gap between waves
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>fluid</Text>

      {/* Login Section */}
      {failedLogin && <View style={styles.loginError}
      >Incorrect username and/or password</View>}
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
        <Button color="#507DBC" title="Login" onPress={handleLogin} />
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
    loginError: {
        color: "red",
        fontFamily: "Arial",
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#DAE3E5',
        padding: 30,
        height: '100%',
        width: '100%'
    },
    waveContainer: {
        position: 'absolute',
        bottom: 0,
        width: width,
        height: waveHeight,
        zIndex: 2,  // First wave is behind
    },
    secondWaveContainer: {
        position: 'absolute',
        bottom: 100,
        width: width,
        height: waveHeight,
        zIndex: 1,  // Second wave is behind the first
    },
    thirdWaveContainer: {
        position: 'absolute',
        bottom: 150,  // Slightly higher than the second wave
        width: width,
        height: waveHeight,
        zIndex: 0,  // Third wave is behind both previous waves
    },
    title: {
        fontSize: 72,
        fontWeight: 'bold',
        color: '#507DBC',
        padding: 5,
        marginTop: 50,
        zIndex: 5,
        fontFamily: 'Zain',
    },
    loginSection: {
        width: '100%',
        maxWidth: 400,
        zIndex: 5,
        fontFamily: 'Lexend',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingLeft: 10,
        borderRadius: 5,
        color: '#507DBC',
        backgroundColor: 'white',
        fontFamily: 'Lexend',
    },
});

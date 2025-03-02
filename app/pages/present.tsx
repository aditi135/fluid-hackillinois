import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NavBar from '../../components/NavBar'; // Import the NavBar component

import secrets from '../secrets';
import styles from '../styles';

export default function Present() {

    const [userData, setUserData] = useState([{"credit_score": "Loading..."}]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://api.nessieisreal.com/accounts/${secrets.account_id}/loans?key=${secrets.NESSIE_KEY}`);
                if (!response.ok) {
                    throw new Error("API request failed");
                }
                const result = await response.json();
                console.log(result);
                setUserData(result);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
  return (
    <View style={styles.container}>
        <Text style={styles.logo}>fluid</Text>
        <Text style={styles.title}>Present</Text>

        <Text style={styles.text}> Credit Score Estimate: &nbsp;
            {
                userData.length === 0 ? (
                    <Text style={styles.text}>No credit score data for this customer.</Text>
                ) : (
                    // You can add the code for the else condition here
                    <Text style={styles.text}>{userData[0].credit_score}</Text>
                  )
            }
        </Text>

        <NavBar />

    </View>
  );
}

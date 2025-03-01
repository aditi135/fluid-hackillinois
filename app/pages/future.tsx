import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NavBar from '../../components/NavBar'; // Import the NavBar component

import secrets from '../secrets';
import styles from '../styles';

export default function Future() {
    const [userData, setUserData] = useState({"balance": 0});
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://api.nessieisreal.com/accounts/${secrets.account_id}?key=${secrets.NESSIE_KEY}`);
                if (!response.ok) {
                    throw new Error("API request failed");
                }
                const result = await response.json();
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
        <Text style={styles.title}>Future</Text>
        <Text style={styles.text}>{userData.balance}</Text>
        <NavBar />
        </View>
    );
}

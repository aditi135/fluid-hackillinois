import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NavBar from '../../components/NavBar'; // Import the NavBar component

import secrets from '../secrets';
import styles from '../styles';
import HealthBar from '@/components/HealthBar';

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
        <div style = {styles.banner}>
      <Text style={styles.logo}>fluid</Text>
      <Text style={styles.title}>Credit Score Tracker</Text>
      </div>
        <Text style={styles.text}>Tracking your credit score is a great way to practice financial literacy. For every 10 points you raise your estimated credit score, you will get one mystery aquatic creature for your aquarium!</Text>

        <Text style={styles.text}> Credit Score Estimate: &nbsp;
            {
                userData.length === 0 ? (
                    <Text style={styles.text}>No credit score data for this customer.</Text>
                ) : (
                    <><><View>
                          </View><Text style={[{alignContent: 'center'}, styles.text]}>{userData[0].credit_score}</Text></>
                          <br/><HealthBar label="Health" totalDebt={850} paidAmount={userData[0].credit_score} /></>

                  )
            }
        </Text>

        <NavBar />

    </View>
  );
}

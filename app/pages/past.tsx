// Debts.js
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import NavBar from '../../components/NavBar'; // Import the NavBar component
import HealthBar from '../../components/HealthBar'; // Import the Thermometer-themed HealthBar component

import secrets from '../secrets';
import styles from '../styles';

const { height, width } = Dimensions.get('window'); // Get screen dimensions

export default function Past() {
    const [userData, setUserData] = useState([{
        "_id": "Loading...",
        "type": "Loading...",
        "status": "Loading...",
        "credit_score": "Loading...",
        "monthly_payment": "Loading...",
        "amount": "Loading...",
        "description": "Loading...",
        "creation_date": "Loading...",
        "account_id": "Loading...",
    }]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://api.nessieisreal.com/accounts/${secrets.account_id}/loans?key=${secrets.NESSIE_KEY}`);
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

    // Calculate the width of the space to center the title
    const thermometerWidth = width * 0.3; // 30% of screen width for each thermometer
    const totalThermometerWidth = thermometerWidth * 2 + 20; // 2 thermometers + spacing between them
    const availableSpace = width - totalThermometerWidth; // Space remaining on the left

    let totalDebt = 5000;
    let totalPaidAmount = 4590;
    let totalMonthlyDebt = 5000;
    let totalMonthlyPaidAmount = 2000;


    return (
        <View style={styles.container}>
            <View style={[styles_local.titleContainer, { width: availableSpace }]}>
                <Text style={styles.title}>Debts</Text>
            </View>
            {/* Health bars container, now stacked horizontally */}
            <View style={styles_local.healthBars}>
                {/* Monthly Debt */}
                <HealthBar label="Monthly Debt" totalDebt={totalMonthlyDebt} paidAmount={totalPaidAmount} />
                
                {/* Total Debt */}
                <HealthBar label="Total Debt" totalDebt={totalDebt} paidAmount={totalMonthlyPaidAmount} />
            </View>
            {/* Navigation bar */}
            <Text style={styles.text}>This Month's Bill</Text>
            <View style={styles_local.healthBars}>
                {
                    userData.map((item) => {
                        // Define the label based on the item.type
                        const label = item.type === "auto" ? "Auto Loan" : item.type === "home" ? "Home Loan" : item.type;
                
                        return (
                          <View key={item.type} style={styles_local.container}>
                            <HealthBar 
                              label={label} 
                              totalDebt={item.monthly_payment} 
                              paidAmount={10} 
                            />
                          </View>
                        );
                      })
                }
            </View>
            <Text style={styles.logo}>fluid</Text>
            <NavBar />
        </View>
    );
};

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

import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
import NavBar from '../../components/NavBar'; // Import the NavBar component
import HealthBar from '../../components/HealthBar'; // Import the Thermometer-themed HealthBar component
import { Picker } from '@react-native-picker/picker';

import secrets from '../secrets';
import styles from '../styles';

const { height, width } = Dimensions.get('window'); // Get screen dimensions

export default function Savings() {
    const [userData, setUserData] = useState({"balance": "Loading..."});
    const [goals, setGoals] = useState([]);

    // set savings goals
    const [modalVisible, setModalVisible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);
    const [goal, setGoal] = useState("");
    const [cost, setCost] = useState("");

    const [selectedValue, setSelectedValue] = useState("");
    
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/login`, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: secrets.user_info.username,
                        password: secrets.user_info.password,
                    }),
                });
                if (response.ok) {
                    const data = await response.json();  // Await the json() method to resolve the promise
                    setGoals(data.user_info.goals);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();     
    }, []);

    useEffect(() => {
        console.log("Updated Goals: ", goals);  // Log goals after they've been updated
    }, [goals]);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    const toggle2Modal = () => {
        setModal2Visible(!modal2Visible);
    };

    const saveGoal = async () => {
        //  update database
        // const response = await fetch(`http://localhost:8080/setgoal`, {
        //     method: 'POST',
        //     headers: {
        //     'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         "account_id": secrets.account_id,
        //         "goal": goal,
        //         "amt": cost,
        //     }),
        // });
        // cheap and dirty solution: 
        goals.push({
            "name": goal,
            "amt": cost,
            "progress": 0,
        });
        // close and reset modal
        toggle2Modal();
        setGoal("");
        setCost("");
    };

    const updateGoal = async () => {
        goals.forEach((item) => {
            console.log(item.name);
            console.log(selectedValue);
            if (item.name == selectedValue) {
                item.progress = cost;
                console.log(13);
            }
        });
        toggleModal();
    }

    return (
        <View style={styles.container}>
                  <div>
        <Text style={styles.logo}>fluid</Text>
        <br/>
      </div>
      <Text style={styles.title}>Future</Text>
            <ScrollView style={styles.stepContainer}>
                <Text style={styles.textContainer}>
                    Current Account Balance: {userData.balance}
                </Text>
                <Text style={styles.textContainer}>
                    What do you want to save for a rainy day?
                </Text>
                <Text style={styles.textContainer}>
                    Use this page to set savings goals and organize your cash into savings buckets.
                    You get rewards for reaching your goals.
                </Text>

                <TouchableOpacity onPress={toggle2Modal} style={styles.button}>
                    <Text style={styles.buttonText}>Add a Savings Goal</Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modal2Visible}
                    onRequestClose={toggle2Modal}
                >
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.textContainer}>What are you saving for?</Text>
                            <TextInput
                                style={styles.inputText}
                                value={goal}
                                onChangeText={setGoal}
                            />

                            <Text style={styles.textContainer}>How much will it cost (in dollars)?</Text>
                            <TextInput
                                style={styles.inputText}
                                keyboardType="numeric"
                                value={cost}
                                onChangeText={setCost}
                            />
                            <TouchableOpacity onPress={saveGoal} style={styles.button}>
                                <Text style={styles.buttonText}>Set Goal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <TouchableOpacity onPress={toggleModal} style={styles.button}>
                    <Text style={styles.buttonText}>Put Money in a Savings Goal</Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={toggleModal}
                >
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.textContainer}>What are you saving for?</Text>
                            <Picker
                                selectedValue={selectedValue}
                                onValueChange={setSelectedValue}
                                style={styles_local.picker}
                            >
                                {
                                    goals.map((item) => {
                                        return (
                                            <Picker.Item label={item.name} value={item.name} style={styles_local.picker_item} />
                                        );
                                    })
                                }
                            </Picker>

                            <Text style={styles.textContainer}>How much are you putting into this goal (in dollars)?</Text>
                            <TextInput
                                style={styles.inputText}
                                keyboardType="numeric"
                                value={cost}
                                onChangeText={setCost}
                            />
                            <TouchableOpacity onPress={updateGoal} style={styles.button}>
                                <Text style={styles.buttonText}>Update Progress</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <View style={styles_local.healthBars}>
                    {
                        goals.map((item) => {
                            return (
                                <View key={item.name} style={styles_local.container}>
                                    <HealthBar 
                                    label={item.name} 
                                    totalDebt={item.amt} 
                                    paidAmount={item.progress} 
                                    />
                                </View>
                            );
                        })
                    }
                </View>
            </ScrollView>
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
        fontFamily: 'Lexend',
        paddingTop: 20,
        paddingHorizontal: 20, // Ensure there is padding to prevent items from touching the edges
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20, // Add space below the title
    },
    title: {
        fontFamily: 'Zain',
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
    picker: {
        height: 50,
        width: 200,
        backgroundColor: '#f8f8f8',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
    },
    pickerItem: {
        fontSize: 22,  // Increase the font size here
        color: 'black',  // Optional: change the text color
      },
});

import React, { useState, useEffect } from 'react';

import { ScrollView, Text, Modal, TouchableOpacity, View, TextInput } from 'react-native';
import NavBar from '../../components/NavBar'; // Import the NavBar component
import secrets from "../globals/secrets"
import styles from "../styles"

const express = require('express');
const app = express();
const internalRoutes = require('../../backend-server/server');

app.use('/api', internalRoutes);

export default function Future() {
    const [modalVisible, setModalVisible] = useState(false);
    const [goal, setGoal] = useState("");
    const [cost, setCost] = useState("");
    const [test, setTest] = useState("");

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const saveGoal = () => {
        // validate data; if invalid, error message and ask for repeat (allow close)
        // if valid, update database
        //
        // close and reset modal
        // fetch("/test");
        toggleModal();
        setGoal("");
        setCost("");
    };

    const fetchGreetMessage = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/greet');
          const data = await response.json();
          setTest(data.message);
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        fetchGreetMessage();
      }, []);
    


    
    return (
        <ScrollView style={styles.stepContainer}>
            <Text style={styles.titleContainer}>
                Future
            </Text>
            <Text style={styles.textContainer}>
                What do you want to save for a rainy day? {test}
            </Text>
            <Text style={styles.textContainer}>
                Use this page to set savings goals and organize your cash into savings buckets.
                You get rewards for reaching your goals.
            </Text>
            <Text style={styles.textContainer}>
                {/*  */}
            </Text>
            <TouchableOpacity onPress={toggleModal} style={styles.button}>
                <Text style={styles.buttonText}>Add a Savings Goal</Text>
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
                        <TextInput
                            style={styles.inputText}
                            placeholder="Concert tickets"
                            value={goal}
                            onChangeText={setGoal}
                        />

                        <Text style={styles.textContainer}>How much will it cost (in dollars)?</Text>
                        <TextInput
                            style={styles.inputText}
                            placeholder="150.00"
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

            <NavBar/>

        </ScrollView>
    );
}

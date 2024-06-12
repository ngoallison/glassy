import { StyleSheet, View, Text, Dimensions, TextInput, Pressable } from 'react-native';
import styles from '../../styles';
import Button from '../../components/Button';
import Ionicons from "react-native-vector-icons/Ionicons"
import Tag from '../../components/Tag';
import React, { useState } from 'react';
import { format } from 'date-fns';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowHeight = Dimensions.get("window").height;

const ProgressModal = ({ handleClosePress, fetchProgress }) => {

    const today = new Date(Date.now());
    const date = format(today, 'EEEE, MMMM d, yyyy');
    const ratings = ["good", "okay", "bad"];

    const [error, setError] = useState("");
    const [notes, setNotes] = useState("");
    const [selected, setSelected] = useState(null);

    const handleSelect = (index) => {
        if (index === selected) {
            // Deselect the button if it's already selected
            setSelected(null);
        } else {
            // Otherwise, select the button
            setSelected(index);
        }
    };

    const handleAdd = async () => {
        try {
            const rating = ratings[selected];
            const token = await AsyncStorage.getItem('token');
            if (!token) {
                console.log('User not authenticated');
                return;
            }
            const response = await axios.post('http://localhost:3000/progress/add', { date, rating, notes }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            // Handle the response as needed
            return true;
        } catch (error) {
            console.error('Error:', error);
            return false;
            // Handle errors
        }
    }

    const handleClear = () => {
        setSelected(null);
        setNotes("");
    }

    const handleError = () => {
        if (!selected) {
            setError("* This is a required")
            return false;
        }
        setError("");
        return true;
    }

    const handleSubmit = async () => {
        if (handleError()) {
            try {
                const addSuccess = await handleAdd();
                if (addSuccess) {
                    handleClear();
                    handleClosePress();
                    fetchProgress();
                }
            } catch (error) {
                // Ensure to reset the flag regardless of registration success or failure
                console.log(error);
            }
        }
    }

    const icons = [
        ["trending-up", "good"],
        ["swap-horizontal", "okay"],
        ["trending-down", "bad"]
    ]

    return (
        <View>
            <View style={{ gap: 20, height: windowHeight * 0.75 }}>
                <Text style={styles.headerSans}>Add a Check In</Text>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, gap: 20 }}>
                        <Text style={[styles.boldText, { textAlign: "left" }]}>Today's Date</Text>
                        <Text style={[styles.lightText, { textAlign: "left" }]}>{date}</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={[styles.boldText, { textAlign: "left" }]}>How is your skin's condition?</Text>
                        <Text style={{ color: "red", fontSize: 10 }}>{error}</Text>
                        <View style={{ flexDirection: "row", marginVertical: 30, justifyContent: "space-around", gap: 20 }}>
                            {icons.map((icon, index) => {
                                return (
                                    <Pressable
                                        key={index}
                                        style={{ backgroundColor: selected == index ? "#ECF7FE" : "white", flex: 1, padding: 10, borderWidth: 1, borderColor: "lightgray", borderRadius: 15, gap: 15, alignItems: "center", justifyContent: "space-around" }}
                                        onPress={() => handleSelect(index)}
                                    >
                                        <Ionicons name={icon[0]} color="#3A405A" size={40}></Ionicons>
                                        <Text style={[styles.lightText, { fontSize: 12 }]}>{icon[1]}</Text>
                                    </Pressable>
                                );
                            })}
                        </View>
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={[styles.boldText, { textAlign: "left" }]}>Notes</Text>
                        <TextInput
                            multiline={true}
                            rows={5}
                            numberofLines={5}
                            style={[styles.inputSoft, { minHeight: 120 }]}
                            placeholder="Round Lab..."
                            onChangeText={setNotes}
                            value={notes}
                        ></TextInput>
                    </View>
                </View>
            </View >
            <View style={{ flexDirection: "row", gap: 20 }}>
                <Button label="Add Photos" onPress={() => { }}></Button>
                <Button style="dark" label="Add Check In" func={handleSubmit}></Button>
            </View>
        </View >

    );
}

export default ProgressModal;


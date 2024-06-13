import styles from "../../styles";
import { Text, View, Pressable, Image, FlatList } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import Header from "../Home/Header";
import Ionicons from "react-native-vector-icons/Ionicons"
import productsData from "../../assets/data/products.json";
import LongImageCard from "../../components/LongImageCard";
import FloatingButton from "../../components/FloatingButton";
import Button from "../../components/Button";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Routine = ({ navigation }) => {
    const days = ["S", "M", "T", "W", "T", "F", "S"]

    const [mode, setMode] = useState("default");
    const d = new Date();
    const [routine, setRoutine] = useState(null);
    const [time, setSelectedTime] = useState(d.getHours() < 17 && d.getHours() > 5 ? "Morning" : "Night");
    const [day, setSelectedDay] = useState(d.getDay()); // State to track selected button

    const handleButtonPress = (index) => {
        if (day != index) {
            setSelectedDay(index);
            fetchRoutines();
        }
    };

    const handleEdit = (name) => {
        setMode(name)
    }

    const handleTimePress = (name) => {
        if (name == 'Morning') {
            setSelectedTime("Morning");
        }
        else {
            setSelectedTime("Night");
        }
        fetchRoutines();
    };

    const fetchRoutines = useCallback(async (day, time) => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (!token) {
                console.log('User not authenticated');
                return;
            }
            const response = await axios.get('http://localhost:3000/routines', {
                headers: { Authorization: `Bearer ${token}` },
                params: {
                    day: day,
                    time: time,
                },
            });
            setRoutine(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    }, []);
    useEffect(() => {
        if (day !== null && time !== null) {
            fetchRoutines(day, time);
        }
    }, [day, time, fetchRoutines]);

    return (
        <View style={styles.background}>
            <Header name="Routines" func={() => { navigation.openDrawer() }}></Header>
            <View style={{ flex: 1, padding: 20 }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", gap: 10 }}>
                    <Pressable
                        id="Morning"
                        onPress={() => handleTimePress("Morning")}
                        style={[time == "Morning" ? styles.solidButton : styles.lightButton, { flex: 1, flexDirection: "row", gap: 10 }]}>
                        <Ionicons size={20} color={time == "Morning" ? "#FFFFFF" : "#3A405A"} name="sunny-outline"></Ionicons>
                        <Text style={[styles.boldText, { color: time == "Morning" ? "#FFFFFF" : "#3A405A" }]}>Morning</Text>
                    </Pressable>
                    <Pressable
                        id="Night"
                        onPress={() => handleTimePress("Night")}
                        style={[time == "Night" ? styles.solidButton : styles.lightButton, { flex: 1, flexDirection: "row", gap: 10 }]}>
                        <Ionicons size={20} color={time == "Night" ? "#FFFFFF" : "#3A405A"} name="moon-outline"></Ionicons>
                        <Text style={[styles.boldText, { color: time == "Night" ? "#FFFFFF" : "#3A405A" }]}>Night</Text>
                    </Pressable>
                </View>
                <View style={{ paddingTop: 20, flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
                    {days.map((dayLetter, index) => (
                        <Pressable
                            key={index}
                            onPress={() => handleButtonPress(index)}
                            style={{
                                width: 40, height: 40, backgroundColor: day == index ? "#3A405A" : "#E2EBF4", borderRadius: 10, justifyContent: "center"
                            }}>
                            <Text style={[styles.boldText, { color: day == index ? "#FFFFFF" : "#3A405A" }]}>{dayLetter}</Text>
                        </Pressable>
                    ))}
                </View>
                {mode == "edit" ?
                    <View style={{ flexDirection: "row", marginVertical: 30, gap: 20 }}>
                        <Button style="dark" label="+ Add New Product"></Button>
                        <Button style="light" label="Reorder"></Button>
                    </View> : <></>
                }

                <FlatList
                    data={routine}
                    renderItem={({ item }) => <LongImageCard side={true} item={item}></LongImageCard>}
                    style={{ marginBottom: mode == "edit" ? 0 : 60 }}
                >
                </FlatList>
            </View>
            {mode == "edit" ?
                <View style={{ flex: 0.1, flexDirection: "row", marginBottom: 20, padding: 20, gap: 20, padding: 20 }}>
                    <Button style="dark" func={() => handleEdit("default")} label="Remove"></Button>
                    <Button style="dark" func={() => handleEdit("default")} label="Save"></Button>
                </View> :
                < FloatingButton onPress={() => handleEdit("edit")} label="Edit Routine"></FloatingButton>
            }
        </View >
    );
};

export default Routine;




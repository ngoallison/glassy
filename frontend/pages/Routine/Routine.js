import { StatusBar } from "expo-status-bar";
import styles from "../../styles";
import { Text, View, Pressable, Image, FlatList } from "react-native";
import React, { Component, useState } from "react";
import Header from "../Home/Header";
import Ionicons from "react-native-vector-icons/Ionicons"
import productsData from "../../assets/data/products.json";
import LongImageCard from "../../components/LongImageCard";
import FloatingButton from "../../components/FloatingButton";


const Routine = ({ navigation }) => {
    const days = ["S", "M", "T", "W", "T", "F", "S"]

    const [selectedTime, setSelectedTime] = useState("Morning");
    const [selectedDay, setSelectedDay] = useState(null); // State to track selected button

    const handleButtonPress = (index) => {
        if (index === selectedDay) {
            // Deselect the button if it's already selected
            setSelectedDay(null);
        } else {
            // Otherwise, select the button
            setSelectedDay(index);
        }
    };

    const handleTimePress = (name) => {
        if (name == 'Morning') {
            setSelectedTime("Morning");
        }
        else {
            setSelectedTime("Night");
        }
    };

    return (
        <View style={styles.background}>
            <Header name="Routines" func={() => { navigation.openDrawer() }}></Header>
            <View style={{ flex: 1, padding: 20 }}>
                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", gap: 10 }}>
                    <Pressable
                        id="Morning"
                        onPress={() => handleTimePress("Morning")}
                        style={[selectedTime == "Morning" ? styles.solidButton : styles.clearButton, { flex: 1, flexDirection: "row", gap: 10 }]}>
                        <Ionicons size={20} color={selectedTime == "Morning" ? "#FFFFFF" : "#3A405A"} name="sunny-outline"></Ionicons>
                        <Text style={[styles.boldText, { color: selectedTime == "Morning" ? "#FFFFFF" : "#3A405A" }]}>Morning</Text>
                    </Pressable>
                    <Pressable
                        id="Night"
                        onPress={() => handleTimePress("Night")}
                        style={[selectedTime == "Night" ? styles.solidButton : styles.clearButton, { flex: 1, flexDirection: "row", gap: 10 }]}>
                        <Ionicons size={20} color={selectedTime == "Night" ? "#FFFFFF" : "#3A405A"} name="moon-outline"></Ionicons>
                        <Text style={[styles.boldText, { color: selectedTime == "Night" ? "#FFFFFF" : "#3A405A" }]}>Night</Text>
                    </Pressable>
                </View>
                <View style={{ paddingTop: 20, flexDirection: "row", justifyContent: "space-between" }}>
                    {days.map((day, index) => (
                        <Pressable
                            key={index}
                            onPress={() => handleButtonPress(index)}
                            style={{
                                width: 40, height: 40, backgroundColor: selectedDay == index ? "#3A405A" : "#E2EBF4", borderRadius: 10, justifyContent: "center"
                            }}>
                            <Text style={[styles.boldText, { color: selectedDay == index ? "#FFFFFF" : "#3A405A" }]}>{day}</Text>
                        </Pressable>
                    ))}
                </View>
                <FlatList
                    data={productsData}
                    renderItem={({ item }) => <LongImageCard side={true} item={item}></LongImageCard>}
                    style={{ marginTop: 20, marginBottom: 60 }}
                >
                </FlatList>
            </View>
            <FloatingButton label="Edit Routine"></FloatingButton>
        </View >
    );
};

export default Routine;




import { StatusBar } from "expo-status-bar";
import styles from "../../styles";
import { Text, View } from "react-native";
import React, { Component } from "react";
import Header from "../Home/Header";

const Routine = ({ navigation }) => {
    return (
        <View style={styles.background}>
            <Header func={() => { navigation.openDrawer() }}></Header>
            <Text>Hello World :D</Text>
        </View >
    );
};

export default Routine;




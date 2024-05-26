import { StatusBar } from "expo-status-bar";
import globalStyle from "../styles";

import { Text, View, Pressable, StyleSheet } from "react-native";
import React, { Component } from "react";

const FloatingButton = ({ label }) => {
    return (
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 50,
        left: "50%",
        marginLeft: -65,
        width: 130,
        height: 40,
        borderRadius: 30,
        backgroundColor: '#5579A8',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    buttonText: {
        color: '#fff',
    },
});

export default FloatingButton;
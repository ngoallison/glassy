import { StatusBar } from "expo-status-bar";
import styles from "../styles";

import { Text, View, Pressable } from "react-native";
import React, { Component } from "react";

const NavigationButtons = ({ disable, back, next }) => {
    return (

        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
            <Pressable
                onPress={back}
                style={[styles.clearButton, { width: "45%", opacity: disable ? 0.5 : 1 }]}>
                <Text style={[styles.boldText, { color: "#3A405A" }]}>
                    Back
                </Text>
            </Pressable>
            <Pressable
                onPress={next} style={[styles.solidButton, { width: "45%" }]}>
                <Text style={[styles.boldText, { color: "#FFFFFF" }]}>
                    Next
                </Text>
            </Pressable>
        </View>

    );
};
export default NavigationButtons;
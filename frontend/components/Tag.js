import { StatusBar } from "expo-status-bar";
import globalStyle from "../styles";

import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

const Tag = ({ label, color }) => {
    return (
        <View style={[styles.tag, { backgroundColor: color ? color : "#D4E6F3" }]}>
            <Text>{label}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    tag: {
        backgroundColor: "#D4E6F3",
        padding: 10,
        borderRadius: 20,
    }
});
export default Tag;
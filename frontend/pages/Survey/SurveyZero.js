import { StatusBar } from "expo-status-bar";
import styles from "../../styles";

import { Text, View, ImageBackground } from "react-native";
import React, { Component } from "react";
import LargeIcon from "../../components/LargeIcon";
import blob from "../../assets/icons/blob-scene.png"


const SurveyZero = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 2.5 }}>
                <LargeIcon></LargeIcon>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.header}>let's learn more about your skin</Text>
                <Text style={styles.lightText}>tell us more about your skin, help us find your perfect products.</Text>

            </View>
        </View >

    );
};
export default SurveyZero;
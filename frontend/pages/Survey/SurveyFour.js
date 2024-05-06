import { StatusBar } from "expo-status-bar";
import styles from "../../styles";
import { Text, View, Pressable, Image } from "react-native";
import React from "react";
import LargeIcon from "../../components/LargeIcon";

const SurveyFour = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 2.5 }}>
                <LargeIcon></LargeIcon>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.header}>you're all set!</Text>
                <Text style={styles.lightText}>now let's start your skincare adventure!</Text>
            </View>
        </View >

    );
};
export default SurveyFour;
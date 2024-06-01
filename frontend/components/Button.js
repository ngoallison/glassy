import { StatusBar } from "expo-status-bar";
import globalStyle from "../styles";

import { Text, View, Pressable } from "react-native";
import React, { Component } from "react";

const Button = ({ style, func, label }) => {
    const styles = {
        dark: [globalStyle.solidButton, globalStyle.smallLightText],
        light: [globalStyle.lightButton, globalStyle.smallDarkText],
        clear: [globalStyle.clearButton, globalStyle.smallDarkText]
    }
    return (
        <Pressable style={style ? styles[style] : globalStyle.clearButton} onPress={func}>
            <Text style={[style ? styles[style][1] : globalStyle.smallDarkText, { textAlign: "center" }]}>
                {label}
            </Text>
        </Pressable>
    );
};
export default Button;
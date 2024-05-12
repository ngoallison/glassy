import { StatusBar } from "expo-status-bar";
import globalStyle from "../styles";

import { Text, View, Pressable } from "react-native";
import React, { Component } from "react";

const Button = ({ style, func, label }) => {
    return (
        <Pressable style={style == "dark" ? globalStyle.solidButton : globalStyle.clearButton}>
            <Text style={[style == "dark" ? globalStyle.smallLightText : globalStyle.smallDarkText, { textAlign: "center" }]} onPress={func}>
                {label}
            </Text>
        </Pressable>
    );
};
export default Button;
import { StatusBar } from "expo-status-bar";
import styles from "../../styles";
import { Text, View, Pressable, Image } from "react-native";
import React, { Component } from "react";
import LargeIcon from "../../components/LargeIcon";
import apps from "../../assets/icons/apps.png"
import bell from "../../assets/icons/bell-ring.png"


const Header = ({ navigation }) => {
    return (
        <View style={{ padding: 20, backgroundColor: "#D3EAF9", height: 100, width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
            <Image style={{ width: 20, height: 20 }} source={apps}></Image>
            <Text>Home</Text>
            <Image style={{ width: 20, height: 20 }} source={bell}></Image>
        </View>
    );
};
export default Header;
import { StatusBar } from "expo-status-bar";
import styles from "../../styles";
import { Text, View, Pressable, Image } from "react-native";
import React, { Component } from "react";
import LargeIcon from "../../components/LargeIcon";
import apps from "../../assets/icons/apps.png"
import bell from "../../assets/icons/bell-ring.png"
import Header from "./Header";


const Home = ({ navigation }) => {
    return (
        <View style={styles.background}>
            <Header></Header>
            <View style={{ padding: 25, flex: 1 }}>
                <Text style={styles.largeHeader}>welcome back, allison</Text>
                <Text style={[styles.lightText, { textAlign: "left" }]}>what would you like to do today?</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 25 }}>
                    <View style={{ height: 160, width: 160, backgroundColor: "#D3EAF9", borderRadius: 10 }}></View>
                    <View style={{ height: 160, width: 160, backgroundColor: "#D3EAF9", borderRadius: 10 }}></View>
                </View>
                <View style={{ marginTop: 25, gap: 20 }}>
                    <View style={{ height: 160, width: "100%", backgroundColor: "#9DBED9", borderRadius: 10 }}></View>
                    <View style={{ height: 160, width: "100%", backgroundColor: "#647597", borderRadius: 10 }}></View>
                </View>
            </View>
        </View >
    );
};
export default Home;




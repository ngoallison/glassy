import { StatusBar } from "expo-status-bar";
import styles from "../../styles";
import { Text, View, Pressable, Image } from "react-native";
import React, { Component } from "react";
import LargeIcon from "../../components/LargeIcon";
import apps from "../../assets/icons/apps.png"
import bell from "../../assets/icons/bell-ring.png"
import Header from "./Header";
import ImageCard from "../../components/ImageCard"
import cream from "../../assets/icons/home_icons/cream.png"
import mirror from "../../assets/icons/home_icons/hand-mirror.png"
import serum from "../../assets/icons/home_icons/serum.png"
import skincare from "../../assets/icons/home_icons/skincare.png"

const Home = ({ navigation }) => {
    return (
        <View style={styles.background}>
            <Header func={() => { navigation.openDrawer() }}></Header>
            <View style={{ padding: 25, flex: 1 }}>
                <Text style={styles.largeHeader}>welcome back, allison</Text>
                <Text style={[styles.lightText, { textAlign: "left" }]}>what would you like to do today?</Text>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginTop: 20, gap: 20 }}>
                    <Pressable>
                        <ImageCard text="Add New Products" pic={cream}></ImageCard>
                    </Pressable>
                    <ImageCard text="Build/Update Routine" pic={skincare}></ImageCard>
                </View>
                <View style={{ flex: 2 }}>
                    <ImageCard text="Monitor Progress" pic={mirror} align={true} subText="View how your skin as changed over time!" color="#647597"></ImageCard>
                    <ImageCard text="Popular New Products" pic={serum} align={true} subText="View how your skin as changed over time!" color="#272434"></ImageCard>
                </View>
            </View>
        </View >
    );
};
export default Home;




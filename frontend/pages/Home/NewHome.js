import { StatusBar } from "expo-status-bar";
import styles from "../../styles";
import { Text, View, Pressable, Image } from "react-native";
import React, { Component } from "react";
import LargeIcon from "../../components/LargeIcon";
import apps from "../../assets/icons/apps.png"
import bell from "../../assets/icons/bell-ring.png"
import Header from "./Header";
import ProductCard from "../../components/ProductCard";
import productData from "../../assets/data/products.json";
import Ionicons from "react-native-vector-icons/Ionicons"

const NewHome = ({ navigation }) => {

    const newProducts = productData.slice(Math.max(productData.length - 2, 0))

    return (
        <View style={styles.background}>
            <Header name="Home" func={() => { navigation.openDrawer() }}></Header>
            <View style={{ padding: 20, flex: 1 }}>
                <View style={{ flex: 2 }}>
                    <Text style={[styles.boldText, { textAlign: "left" }]}>Today's Routine</Text>
                    <View style={{ flex: 1, marginVertical: 10, borderWidth: 1, borderRadius: 10, borderColor: "lightgray" }}>
                        <Text style={[styles.boldText, { textAlign: "left", padding: 10 }]}>Monday Morning</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                            {(productData.slice(0, 4)).map((item, index) => {
                                return (
                                    <View style={{ flex: 1, margin: 10 }}>
                                        {
                                            item.photo ?
                                                <Image style={{ width: "100%", height: undefined, aspectRatio: 1, borderRadius: 15 }} source={{ uri: item.photo }} ></Image> :
                                                <Ionicons name="leaf-outline" color="gray" size={40}></Ionicons>
                                        }
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                </View>
                <View style={{ flex: 3 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={[styles.boldText, { textAlign: "left" }]}>Recently Added Products</Text>
                        <Pressable style={{ padding: 5, paddingHorizontal: 10, borderWidth: 1, borderRadius: 20 }}>
                            <Text style={styles.lightText}>View All</Text>
                        </Pressable>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                        {newProducts.map((item, index) => {
                            return (
                                <View key={index}>
                                    <ProductCard item={item}></ProductCard>
                                </View>
                            );
                        })}
                    </View>
                </View>
                <View style={{ flex: 3 }}>
                    <Text style={[styles.boldText, { textAlign: "left" }]}>Progress Chart</Text>
                    <View style={{ flex: 1, marginVertical: 20, borderWidth: 1, borderRadius: 20, borderColor: "lightgray" }}></View>
                </View>
            </View>
        </View >
    );
};
export default NewHome;



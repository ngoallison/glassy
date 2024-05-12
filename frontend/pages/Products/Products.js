import { StatusBar } from "expo-status-bar";
import styles from "../../styles";
import { Text, View, Pressable, Image, TextInput, StyleSheet, FlatList } from "react-native";
import React, { Component } from "react";
import Header from "../Home/Header";
import ImageCard from "../../components/ImageCard"
import productsData from "../../assets/data/products.json";
import Ionicons from "react-native-vector-icons/Ionicons";


const Products = ({ navigation }) => {

    const [text, onChangeText] = React.useState("");

    const renderItem = ({ item }) => {
        <View style={inStyle.product}>
            <Text>Hello</Text>
            <Text>{item.name}</Text>
            <Text>{item.brand}</Text>
            <Text>{item.category}</Text>
            <Text>{item}</Text>
        </View>
    }

    return (
        <View style={styles.background}>
            <Header func={() => { navigation.openDrawer() }}></Header>
            <View style={{ flex: 1, padding: 20 }}>
                <View style={{ flexDirection: "row", backgroundColor: "#CEDEED", borderRadius: 15, width: "100%", height: 35, alignItems: "center", paddingLeft: 10, gap: 10, borderColor: "#91ABCB", borderWidth: 1 }}>
                    <Ionicons size={22} name="search" color="gray"></Ionicons>
                    <TextInput
                        onChangeText={onChangeText}
                        placeholder="What are you looking for?"
                        value={text}
                    />
                </View>
                <View style={{ paddingTop: 15, flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.lightText}>Filter</Text>
                    <Text style={styles.lightText}>Sort by</Text>
                </View>
                <View style={{ flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between", paddingTop: 20 }}>
                    {productsData.map((item) => (
                        <View key={item.id} style={inStyle.product}>
                            <Image style={{ width: 170, height: 160, borderTopLeftRadius: 10, borderTopRightRadius: 15 }} source={{ uri: item.photo }} />
                            <View style={{ flex: 1, width: "100%", padding: 10, justifyContent: "center" }}>
                                <Text style={[styles.header, { textAlign: "left", fontSize: 18 }]}>{item.brand}</Text>
                                <Text style={[styles.lightText, { textAlign: "left", fontSize: 14 }]} numberOfLines={1}>{item.name}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View >
    );
};

const inStyle = StyleSheet.create({
    product: {
        marginBottom: 20,
        backgroundColor: "#D3EAF9",
        borderRadius: 15,
        alignItems: 'center',
        height: 230,
        width: 170,
    }
})


export default Products;




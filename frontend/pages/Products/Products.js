import { StatusBar } from "expo-status-bar";
import styles from "../../styles";
import { Text, View, Pressable, Image, TextInput, StyleSheet, FlatList } from "react-native";
import React, { Component } from "react";
import Header from "../Home/Header";

import productsData from "../../assets/data/products.json";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductCard from "../../components/ProductCard";
import FloatingButton from "../../components/FloatingButton";

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
        <View style={[styles.background]}>
            <Header name="Products" func={() => { navigation.openDrawer() }}></Header>
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
                <View style={{ flex: 1, justifyContent: "space-between" }}>
                    <FlatList
                        key={Math.random()}
                        data={productsData}
                        renderItem={({ item }) => <ProductCard item={item}></ProductCard>}
                        columnWrapperStyle={{ flexWrap: "wrap", justifyContent: "space-between" }}
                        style={{ marginTop: 20, marginBottom: 40 }}
                        numColumns={2}
                    >
                    </FlatList>
                </View>
            </View>
            <FloatingButton label="+ Add Product"></FloatingButton>
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




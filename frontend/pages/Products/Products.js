import styles from "../../styles";
import { Text, View, TextInput, StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import Header from "../Home/Header";
import BottomSheet from '@gorhom/bottom-sheet';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import productsData from "../../assets/data/products.json";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProductCard from "../../components/ProductCard";
import FloatingButton from "../../components/FloatingButton";
import Modal from "../../components/Modal";
import AddModal from "./AddModal";

const Products = ({ navigation }) => {

    const [text, onChangeText] = useState("");
    const [products, setProducts] = useState([]);

    const bottomSheetRef = useRef(<BottomSheet></BottomSheet>);
    const handleOpenPress = () => bottomSheetRef.current?.expand();
    const handleClosePress = () => bottomSheetRef.current?.close();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (!token) {
                    setError('User not authenticated');
                    setLoading(false);
                    return;
                }
                const response = await axios.get('http://localhost:3000/products', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setProducts(response.data);
                console.log(response.data);
            } catch (err) {
                console.log(err);
            } finally {
            }
        };

        fetchProducts();
    }, []);

    return (
        <View style={[styles.background]}>
            <Header name="Products" func={() => { navigation.openDrawer() }}></Header>
            <View style={{ flex: 1, padding: 20 }}>
                <View style={{ flexDirection: "row", backgroundColor: "#EDF2F7", borderRadius: 15, width: "100%", height: 35, alignItems: "center", paddingLeft: 10, gap: 10, borderColor: "#91ABCB", borderWidth: 1 }}>
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
            <FloatingButton label="+ Add Product" onPress={handleOpenPress}></FloatingButton>
            <Modal bottomSheetRef={bottomSheetRef} component={<AddModal handleClosePress={handleClosePress}></AddModal>}></Modal>
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




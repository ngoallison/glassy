import { View, Text, Dimensions, TextInput } from 'react-native';
import styles from '../../styles';
import Button from '../../components/Button';
import { Rating } from 'react-native-ratings';
import Tag from '../../components/Tag';
import React, { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowHeight = Dimensions.get("window").height;
const initialState = {
    name: "",
    brand: "",
    category: "",
    price: "",
    rating: 0,
}

const AddModal = ({ handleClosePress }) => {
    const pros = ["Dark Spots", "Exfoliating", "Lightweight"];
    const cons = ["Fragrance", "Purging"]

    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState(0);

    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating);
        setRating(rating);
    };

    const handleAdd = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (!token) {
                setError('User not authenticated');
                setLoading(false);
                return;
            }
            const response = await axios.post('http://localhost:3000/products/add', { name, brand, category, price, rating }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            // Handle the response as needed
            return true;
        } catch (error) {
            console.error('Error:', error);
            return false;
            // Handle errors
        }
    }

    const handleClear = () => {
        setBrand('');
        setName('');
        setCategory('');
        setPrice('');
        setRating(0);
    }

    const handleSubmit = async () => {
        try {
            const addSuccess = await handleAdd();
            if (addSuccess) {
                handleClear();
                handleClosePress();
            }
        } catch (error) {
            // Ensure to reset the flag regardless of registration success or failure
            console.log(error);
        }
    }

    return (
        <View>
            <View style={{ gap: 20, height: windowHeight * 0.75 }}>
                <Text style={styles.headerSans}>Add a Product</Text>
                <View>
                    <Text style={[styles.lightText, { textAlign: "left" }]}>Product Brand</Text>
                    <TextInput
                        style={styles.inputSoft}
                        placeholder="Round Lab..."
                        onChangeText={setBrand}
                        value={brand}
                    ></TextInput>
                </View>
                <View>
                    <Text style={[styles.lightText, { textAlign: "left" }]}>Product Name</Text>
                    <TextInput
                        style={styles.inputSoft}
                        placeholder="Birch Juice Sunscreen..."
                        onChangeText={setName}
                        value={name}
                    ></TextInput>
                </View>
                <View style={{ flexDirection: "row", gap: 20 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.lightText, { textAlign: "left" }]}>Product Category</Text>
                        <TextInput
                            style={styles.inputSoft}
                            placeholder="Sunscreen..."
                            onChangeText={setCategory}
                            value={category}
                        ></TextInput>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.lightText, { textAlign: "left" }]}>Price Range</Text>
                        <TextInput
                            style={styles.inputSoft}
                            placeholder="$$"
                            onChangeText={setPrice}
                            value={price}
                        ></TextInput>
                    </View>
                </View>
                <View>
                    <Text style={[styles.lightText, { textAlign: "left" }]}>Product Rating</Text>
                    <Rating
                        type='heart'
                        ratingCount={5}
                        startingValue={1}
                        imageSize={40}
                        onFinishRating={ratingCompleted}
                        style={{ alignItems: "left", marginTop: 10 }}
                    />
                </View>
                <View style={{ gap: 10 }}>
                    <Text style={[styles.lightText, { textAlign: "left" }]}>Features</Text>
                    <View style={{ gap: 15 }}>
                        <View style={{ flexDirection: "row", gap: 7 }}>
                            {pros.map((pro, index) => {
                                return (
                                    <Tag key={index} label={pro}></Tag>
                                );
                            })}
                        </View>
                        <View style={{ flexDirection: "row", gap: 7 }}>
                            {cons.map((con, index) => {
                                return (
                                    <Tag key={index} color="#F3DAD4" label={con}></Tag>
                                );
                            })}
                        </View>
                    </View>
                </View>
            </View >
            <View style={{ flexDirection: "row", gap: 20 }}>
                <Button label="Add Photo" onPress={() => { }}></Button>
                <Button style="dark" label="Add Product" func={handleSubmit}></Button>
            </View>
        </View >

    );
}

export default AddModal;


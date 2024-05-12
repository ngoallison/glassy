import styles from "../styles";
import { Text, View, Image, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons"

const ProductCard = (props) => {
    return (
        <View style={inStyle.product}>
            <View style={{ width: "100%", height: "70%", borderTopLeftRadius: 15, borderTopRightRadius: 15, backgroundColor: "gainsboro", justifyContent: "center", alignItems: "center" }}>
                {props.item.photo ?
                    <Image style={{ width: "100%", height: "100%", borderRadius: 15 }} source={{ uri: props.item.photo }} ></Image> :
                    <Ionicons name="leaf-outline" color="gray" size={40}></Ionicons>
                }
            </View>
            <View style={{ flex: 1, width: "100%", padding: 10, justifyContent: "center" }}>
                <Text style={[styles.header, { textAlign: "left", fontSize: 18 }]}>{props.item.brand}</Text>
                <Text style={[styles.lightText, { textAlign: "left", fontSize: 14 }]} numberOfLines={1}>{props.item.name}</Text>
            </View>
        </View>
    );
}
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

export default ProductCard;
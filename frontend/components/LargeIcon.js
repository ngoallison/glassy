import { StatusBar } from "expo-status-bar";
import globalStyle from "../styles";
import glassy_brand from "../assets/icons/glassy_brand.png"
import { Text, View, Pressable, Image } from "react-native";
import React from "react";

const LargeIcon = () => {
    return (
        <View style={globalStyle.photo}>
            <Image style={{
                width: '100%',
                height: undefined,
                aspectRatio: 1,
            }} source={glassy_brand}></Image>
        </View>
    );
};
export default LargeIcon;
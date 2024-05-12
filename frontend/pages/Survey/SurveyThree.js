import { StatusBar } from "expo-status-bar";
import styles from "../../styles";
import NavigationButtons from "../../components/NavigationButtons";
import { Text, View, Pressable, Image } from "react-native";
import React, { Component } from "react";
import cactus from "../../assets/icons/cactus.png";
import oil from "../../assets/icons/oil.png";
import sun from "../../assets/icons/sun.png";
import intersection from "../../assets/icons/intersection.png";

const SurveyThree = ({ navigation }) => {
    const pictures = [cactus, oil, sun, intersection, cactus, oil]
    const types = ["Texture", "Redness", "Fungal Acne", "Dark Spots", "Large Pores", "Hydration"]
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={styles.header}>what skin concerns would you like to target?</Text>
            </View>
            <View style={{ flex: 3, gap: 40 }}>

                <View style={{ flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap", width: "100%", gap: 20 }}>
                    {types.map((type, index) => (
                        <Pressable
                            key={index}
                            style={[styles.skinButton]}>
                            <Image style={{
                                width: '40%',
                                height: undefined,
                                aspectRatio: 1,
                            }} source={pictures[index]} />
                            <Text style={styles.boldText}>{type}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>
        </View >

    );
};
export default SurveyThree;
import { StatusBar } from "expo-status-bar";
import styles from "../../styles";

import BottomSheet from '@gorhom/bottom-sheet';
import { Text, View, Pressable, Image } from "react-native";
import React, { useState, useRef } from "react";
import cactus from "../../assets/icons/cactus.png";
import oil from "../../assets/icons/oil.png";
import sun from "../../assets/icons/sun.png";
import intersection from "../../assets/icons/intersection.png";
import Modal from "./Modal";


const SurveyOne = ({ handleOpenPress }) => {

    // const bottomSheetRef = useRef(<BottomSheet></BottomSheet>);
    // const handleOpenPress = () => bottomSheetRef.current?.expand();

    const pictures = [cactus, oil, sun, intersection]
    const types = ["Dry", "Oily", "Normal", "Combination"]
    const [selected, setSelected] = useState();

    const handleSelect = (buttonId) => {
        setSelected(buttonId);
    }

    return (

        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <Text style={styles.header}>what is your skin type?</Text>
            </View>
            <View style={{ flex: 5, gap: 40, alignItems: "center", justifyContent: "center" }}>

                <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", width: "100%" }}>
                    {types.map((type, index) => (
                        <Pressable
                            key={index}
                            style={[styles.skinButton, selected == index ? styles.selectedButton : {}]}
                            onPress={() => { handleSelect(index) }}
                        >
                            <Image style={{
                                width: '45%',
                                height: undefined,
                                aspectRatio: 1,
                            }} source={pictures[index]} />
                            <Text style={styles.boldText}>{type}</Text>
                        </Pressable>
                    ))}

                </View>

            </View>
            <View style={{ flex: 1, gap: 10 }}>
                <Text style={styles.lightText}>not sure what type you are?</Text>
                <Pressable
                    onPress={handleOpenPress}
                >
                    <Text style={styles.boldText}>learn about each skin type here.</Text>
                </Pressable>
            </View>
        </View >

    );
};



export default SurveyOne;
import { StatusBar } from "expo-status-bar";
import styles from "../../styles";


import { Text, View, Pressable, Image } from "react-native";
import React, { useState } from "react";
import cactus from "../../assets/icons/cactus.png";
import oil from "../../assets/icons/oil.png";
import sun from "../../assets/icons/sun.png";
import intersection from "../../assets/icons/intersection.png";


const SurveyOne = ({ navigation }) => {
    const pictures = [cactus, oil, sun, intersection]
    const types = ["Dry", "Oily", "Normal", "Combination"]
    const [selected, setSelected] = useState([]);

    const handleSelect = (buttonId) => {
        let newSelection = [...selected];

        if (newSelection.includes(buttonId)) {
            newSelection = newSelection.filter((id) => id !== buttonId);
        }
        else {
            newSelection.push(buttonId);
        }

        setSelected(newSelection);
    };

    return (

        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={styles.header}>what is your skin type?</Text>
            </View>
            <View style={{ flex: 3, gap: 40 }}>

                <View style={{ flexDirection: "row", justifyContent: "space-around", flexWrap: "wrap", width: "100%", gap: 20 }}>
                    {types.map((type, index) => (
                        <Pressable
                            key={index}
                            style={[styles.skinButton, selected.includes(index) ? styles.selectedButton : {}]}
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
                <View>
                    <Text style={styles.lightText}>not sure what type you are?</Text>
                    <Pressable

                    >
                        <Text style={styles.boldText}>learn about each skin type here.</Text>
                    </Pressable>
                </View>
            </View>
        </View >

    );
};
export default SurveyOne;
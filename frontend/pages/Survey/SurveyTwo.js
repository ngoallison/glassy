import { StatusBar } from "expo-status-bar";
import styles from "../../styles";
import NavigationButtons from "../../components/NavigationButtons";
import { Text, Image, View, Pressable } from "react-native";
import React, { useState } from "react";
import cactus from "../../assets/icons/cactus.png";
import oil from "../../assets/icons/oil.png";
import sun from "../../assets/icons/sun.png";
import intersection from "../../assets/icons/intersection.png";

const SurveyTwo = () => {
    const pictures = [cactus, oil, sun, intersection]
    const types = ["Eczema", "Acne Prone", "Sensitive", "Irritated"]
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
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <Text style={styles.header}>additional skin traits?</Text>
            </View>
            <View style={{ flex: 5, gap: 40, alignItems: "center", justifyContent: "center" }}>

                <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", width: "100%" }}>
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

            </View>
            <View style={{ flex: 1 }}></View>
        </View >
    );
};

export default SurveyTwo;
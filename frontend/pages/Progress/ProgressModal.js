import { StyleSheet, View, Text, Dimensions, TextInput, Pressable } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import dry from "../../assets/icons/dry-skin.png"
import styles from '../../styles';
import { skinTypes } from '../../Constants'
import Button from '../../components/Button';
import Ionicons from "react-native-vector-icons/Ionicons"
import { Rating, AirbnbRating } from 'react-native-ratings';
import Tag from '../../components/Tag';
import React, { useState } from 'react';

const windowHeight = Dimensions.get("window").height;

const ProgressModal = ({ handleClosePress }) => {

    const today = new Date(Date.now());
    const [notes, setNotes] = useState("");
    const [selected, setSelected] = useState(null);

    const handleSelect = (index) => {
        if (index === selected) {
            // Deselect the button if it's already selected
            setSelected(null);
        } else {
            // Otherwise, select the button
            setSelected(index);
        }
    };

    const handleClear = () => {
        onChangeBrand("");
        handleClosePress();
    }

    const icons = [
        ["trending-up", "good"],
        ["swap-horizontal", "okay"],
        ["trending-down", "bad"]
    ]

    return (
        <View>
            <View style={{ gap: 20, height: windowHeight * 0.75 }}>
                <Text style={styles.headerSans}>Add a Check In</Text>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, gap: 20 }}>
                        <Text style={[styles.boldText, { textAlign: "left" }]}>Today's Date</Text>
                        <Text style={[styles.lightText, { textAlign: "left" }]}>{today.toDateString()}</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={[styles.boldText, { textAlign: "left" }]}>How is your skin's condition?</Text>

                        <View style={{ flexDirection: "row", marginVertical: 30, justifyContent: "space-around", gap: 20 }}>
                            {icons.map((icon, index) => {
                                return (
                                    <Pressable
                                        key={index}
                                        style={{ backgroundColor: selected == index ? "#ECF7FE" : "white", flex: 1, padding: 10, borderWidth: 1, borderColor: "lightgray", borderRadius: 15, gap: 15, alignItems: "center", justifyContent: "space-around" }}
                                        onPress={() => handleSelect(index)}
                                    >
                                        <Ionicons name={icon[0]} color="#3A405A" size={40}></Ionicons>
                                        <Text style={[styles.lightText, { fontSize: 12 }]}>{icon[1]}</Text>
                                    </Pressable>
                                );
                            })}
                        </View>
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={[styles.boldText, { textAlign: "left" }]}>Notes</Text>
                        <TextInput
                            multiline={true}
                            rows={5}
                            numberofLines={5}
                            style={[styles.inputSoft, { minHeight: 120 }]}
                            placeholder="Round Lab..."
                            onChangeText={setNotes}
                            value={notes}
                        ></TextInput>
                    </View>
                </View>
            </View >
            <View style={{ flexDirection: "row", gap: 20 }}>
                <Button label="Add Photos" onPress={() => { }}></Button>
                <Button style="dark" label="Add Check In" func={handleClear}></Button>
            </View>
        </View >

    );
}

export default ProgressModal;


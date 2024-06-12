import React, { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import Header from '../Home/Header';
import styles from '../../styles';
import Ionicons from "react-native-vector-icons/Ionicons"
import FloatingButton from '../../components/FloatingButton';
import Button from '../../components/Button';
import Modal from "../../components/Modal";
import BottomSheet from '@gorhom/bottom-sheet';
import ProgressModal from './ProgressModal';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Progress = ({ navigation }) => {
    const [selected, setSelected] = useState("checkin")
    const [progressData, setProgress] = useState(null);

    const handleSelect = (label) => {
        setSelected(label);
    }

    const bottomSheetRef = useRef(<BottomSheet></BottomSheet>);
    const handleOpenPress = () => bottomSheetRef.current?.expand();
    const handleClosePress = () => bottomSheetRef.current?.close();


    const fetchProgress = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (!token) {
                setError('User not authenticated');
                return;
            }
            const response = await axios.get('http://localhost:3000/progress', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setProgress(response.data);
        } catch (err) {
            console.log(err);
        } finally {
        }
    };
    useEffect(() => {
        fetchProgress();
    }, []);

    return (
        <View style={styles.background}>
            <Header name="Guides" func={() => { navigation.openDrawer() }}></Header>
            <View style={{ flexDirection: "row", padding: 20, gap: 10 }}>
                <Button style={selected == "checkin" ? "dark" : ""} label="check-in" func={() => handleSelect("checkin")}></Button>
                <Button style={selected == "gallery" ? "dark" : ""} label="gallery" func={() => handleSelect("gallery")}></Button>
            </View>
            <View style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
                <FlatList
                    data={progressData}
                    renderItem={({ item }) => <ProgressCard item={item}></ProgressCard>}
                >
                </FlatList>
            </View>
            <FloatingButton onPress={handleOpenPress} label="+ Add Check-in"></FloatingButton>
            <Modal bottomSheetRef={bottomSheetRef} component={<ProgressModal handleClosePress={handleClosePress} fetchProgress={fetchProgress}></ProgressModal>}></Modal>

        </View >
    );
}

const ProgressCard = (props) => {
    const icons = {
        good: "trending-up",
        okay: "swap-horizontal",
        bad: "trending-down"
    }
    const temp = props.item.date.split(',');
    const day = temp[0].toLowerCase();
    const date = temp.slice(1).toString().toUpperCase();

    return (
        <Pressable style={{ gap: 5, marginTop: 10 }}>
            <Text style={[styles.boldText, { textAlign: "left" }]}>{day}</Text>
            <View style={{ borderWidth: 1, borderColor: "lightgray", marginBottom: 15, height: 80, backgroundColor: "white", borderRadius: 15, flexDirection: "row", alignItems: "center", padding: 10 }}>
                <View style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}>
                    <View style={{ gap: 15, alignItems: "center", justifyContent: "space-around" }}>
                        <Ionicons name={icons[props.item.rating]} color="#3A405A" size={20}></Ionicons>
                        <Text style={[styles.lightText, { fontSize: 10 }]}>{props.item.rating}</Text>
                    </View>
                </View>
                <View style={{ width: 1, height: "100%", backgroundColor: "#E2EBF4" }}></View>
                <View style={{ flex: 4, paddingLeft: 15, paddingRight: 15, gap: 10 }}>
                    <Text style={[styles.headerSans, { textAlign: "left", fontSize: 14 }]}>{date}</Text>
                    <Text numberOfLines={1} style={[styles.lightText, { textAlign: "left", fontSize: 12 }]}>Notes: {props.item.notes}</Text>
                </View>
            </View>
        </Pressable>
    );
}
const buttonsStyle = StyleSheet.create({
    solid: {
        flex: 1,
        backgroundColor: "#D4E6F3",
        padding: 10,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    clear: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#D4E6F3",
        padding: 10,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,

    }
});
export default Progress;
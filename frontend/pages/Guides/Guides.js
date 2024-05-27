import React, { useRef, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Header from '../Home/Header';
import styles from '../../styles';
import guidesData from "../../assets/data/guides.json";
import LongImageCard from '../../components/LongImageCard';
import productsData from "../../assets/data/products.json";
import Modal from "../../components/Modal";
import BottomSheet from '@gorhom/bottom-sheet';
import GuideModal from './GuideModal';

const Guides = ({ navigation }) => {
    const bottomSheetRef = useRef(<BottomSheet></BottomSheet>);
    const handleOpenPress = () => bottomSheetRef.current?.expand();


    return (
        <View style={styles.background}>
            <Header name="Guides" func={() => { navigation.openDrawer() }}></Header>
            <View style={{ flex: 1, padding: 20 }}>
                <FlatList
                    data={guidesData}
                    renderItem={({ item }) => <LongImageCard side={false} item={item} onPress={handleOpenPress}></LongImageCard>}
                    style={{ marginTop: 20 }}
                >
                </FlatList>
            </View>
            <Modal bottomSheetRef={bottomSheetRef} component={<GuideModal ></GuideModal>}></Modal>
        </View >
    );
}

export default Guides;
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Header from '../Home/Header';
import styles from '../../styles';
import guidesData from "../../assets/data/guides.json";
import LongImageCard from '../../components/LongImageCard';
import productsData from "../../assets/data/products.json";

const Guides = ({ navigation }) => {
    return (
        <View style={styles.background}>
            <Header name="Guides" func={() => { navigation.openDrawer() }}></Header>
            <View style={{ flex: 1, padding: 20 }}>
                <FlatList
                    data={guidesData}
                    renderItem={({ item }) => <LongImageCard side={false} item={item}></LongImageCard>}
                    style={{ marginTop: 20 }}
                >
                </FlatList>
            </View>
        </View >
    );
}

export default Guides;
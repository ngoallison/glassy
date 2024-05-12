import React from 'react';
import { View, Text } from 'react-native';
import Header from '../Home/Header';
import styles from '../../styles';

const Guides = ({ navigation }) => {
    return (
        <View style={styles.background}>
            <Header name="Guides" func={() => { navigation.openDrawer() }}></Header>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "black" }}>Hello Guides!</Text>
            </View>
        </View>
    );
}

export default Guides;
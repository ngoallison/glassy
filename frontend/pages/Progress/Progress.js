import React from 'react';
import { View, Text } from 'react-native';
import Header from '../Home/Header';
import styles from '../../styles';

const Progress = ({ navigation }) => {
    return (
        <View style={styles.background}>
            <Header name="Progress" func={() => { navigation.openDrawer() }}></Header>

            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "black" }}>Hello Progress!</Text>
            </View>
        </View>
    );
}

export default Progress;
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../../styles';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import glassy_brand from '../../assets/icons/glassy_brand.png';

const CustomDrawer = (props) => {
    return (
        <View style={{
            flex: 1
        }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, marginBottom: 50, justifyContent: "space-between" }}>
                <View style={{ flex: 2, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 15 }}>
                    <View>
                        <Text style={[styles.header, { paddingBottom: 5 }]}>allison ngo</Text>
                        <Text style={styles.lightText}>joined may 2024</Text>

                    </View>
                    <Image style={{ height: 80, width: 80 }} source={glassy_brand}></Image>
                </View>
                <View style={{ flex: 7 }}>
                    <DrawerItemList {...props} />
                </View>
                <View style={{ flex: 1, padding: 15 }}>
                    <Pressable>
                        <Text style={[styles.boldText, { textAlign: "left" }]}>log out</Text>
                    </Pressable>
                </View>
            </DrawerContentScrollView>
        </View>
    )

}

export default CustomDrawer;

import { Text, View, Pressable, Image } from "react-native";
import React from "react";
import apps from "../../assets/icons/apps.png"
import bell from "../../assets/icons/bell-ring.png"
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';


const Header = ({ func }) => {
    return (
        <View style={{ padding: 20, backgroundColor: "#D3EAF9", height: 100, width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
            <Pressable onPress={func}>
                <Image style={{ width: 20, height: 20 }} source={apps}></Image>
            </Pressable>
            <Text>Home</Text>
            <Image style={{ width: 20, height: 20 }} source={bell}></Image>
        </View>
    );
};
export default Header;
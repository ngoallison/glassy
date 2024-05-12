
import { Text, View, Pressable, Image } from "react-native";
import React from "react";
import apps from "../../assets/icons/apps.png"
import bell from "../../assets/icons/bell-ring.png"
import Ionicons from "react-native-vector-icons/Ionicons"

const Header = ({ func }) => {
    return (
        <View style={{ padding: 15, backgroundColor: "#D3EAF9", height: 100, width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
            <Pressable onPress={func}>
                <Ionicons name="grid" color="#3A405A" size={25}></Ionicons>
                {/* <Image style={{ width: 20, height: 20 }} source={apps}></Image> */}
            </Pressable>
            <Text>Home</Text>
            <Ionicons name="notifications" color="#3A405A" size={25}></Ionicons>

            {/* <Image style={{ width: 20, height: 20 }} source={bell}></Image> */}
        </View>
    );
};
export default Header;
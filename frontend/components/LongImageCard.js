import styles from "../styles";
import { Text, View, Image, } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons"

const LongImageCard = (props) => {
    return (
        <View style={{ marginBottom: 15, height: 100, backgroundColor: "white", borderRadius: 20, flexDirection: "row", alignItems: "center", padding: 10 }}>
            <View style={{ flex: props.side ? 3 : 2, width: "100%", height: "100%", borderRadius: 15, backgroundColor: "gainsboro", justifyContent: "center", alignItems: "center" }}>
                {props.item.photo ?
                    <Image style={{ width: "100%", height: "100%", borderRadius: 15 }} source={{ uri: props.item.photo }} ></Image> :
                    <Ionicons name="leaf-outline" color="gray" size={40}></Ionicons>
                }
            </View>

            <View style={{ flex: 5, paddingLeft: 15, paddingRight: 15, gap: props.side ? 0 : 10 }}>
                <Text style={[styles.header, { textAlign: "left", fontSize: 14 }]}>{props.item.brand}</Text>
                <Text style={[styles.lightText, { textAlign: "left", fontSize: 12 }]}>{props.item.name}</Text>
            </View>
            {props.side ?
                <>
                    <View style={{ width: 1, height: "100%", backgroundColor: "#E2EBF4" }}></View>
                    <View style={{ flex: 2, justifyContent: "center", flexDirection: "row" }}>
                        <View style={{ gap: 15, alignItems: "center", justifyContent: "space-around" }}>
                            <Ionicons name="sunny-outline" color="#3A405A" size={20}></Ionicons>
                            <Text style={[styles.lightText, { fontSize: 10 }]}>{props.item.category}</Text>
                        </View>
                    </View>
                </>
                : <></>
            }
        </View>
    );
}

export default LongImageCard;
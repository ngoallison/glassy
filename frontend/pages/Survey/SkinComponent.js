import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import dry from "../../assets/icons/dry-skin.png"
import styles from '../../styles';
import { skinTypes } from '../../Constants'

const SkinComponent = () => {

    return (
        <View style={{ gap: 20 }}>
            <Text style={styles.headerSans}>Different Types of Skin Explained</Text>
            {skinTypes.map((item, index) => (
                <View key={index} style={{ gap: 15 }}>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-end" }}>

                        <View style={{ flex: 3, gap: 10 }}>
                            <Text style={styles.headerSans}>{item.type}</Text>
                            <Text style={[styles.lightText, { textAlign: "left", fontSize: 14 }]}>{item.description}</Text>
                        </View>
                        {index % 2 == 0 ? <Image style={{ flex: 1, padding: 10, aspectRatio: 1 }} source={item.image}></Image> : <></>}
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 3, flexDirection: "row", flexWrap: "wrap", gap: 7, alignItems: "center" }}>
                            <Text style={styles.boldText}>Key Features:</Text>
                            {item.features.map((feature, index) => (
                                <View key={index} style={{ backgroundColor: "#3A405A", padding: 7, paddingLeft: 15, paddingRight: 15, borderRadius: 20 }}>
                                    <Text style={[styles.boldText, { color: "white", fontSize: 12 }]}>{feature}</Text>
                                </View>
                            ))}
                        </View>
                        {index % 2 == 1 ? <Image style={{ flex: 1, padding: 10, aspectRatio: 1 }} source={item.image}></Image> : <></>}
                    </View>
                    <View style={{ marginTop: 10, marginBottom: 10, flex: 1, width: "100%", height: 1, backgroundColor: "lightgray" }}></View>
                </View>
            ))
            }
        </View >
    );
}

export default SkinComponent;

// export default Modal;
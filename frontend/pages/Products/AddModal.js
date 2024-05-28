import { StyleSheet, View, Text, Dimensions, TextInput } from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import dry from "../../assets/icons/dry-skin.png"
import styles from '../../styles';
import { skinTypes } from '../../Constants'
import Button from '../../components/Button';
import Ionicons from "react-native-vector-icons/Ionicons"
import { Rating, AirbnbRating } from 'react-native-ratings';
import Tag from '../../components/Tag';

const windowHeight = Dimensions.get("window").height;

const AddModal = () => {
    const pros = ["Dark Spots", "Exfoliating", "Lightweight"];
    const cons = ["Fragrance", "Purging"]

    return (
        <View>
            <View style={{ gap: 20, height: windowHeight * 0.75 }}>
                <Text style={styles.headerSans}>Add a Product</Text>
                <View>
                    <Text style={[styles.lightText, { textAlign: "left" }]}>Product Brand</Text>
                    <TextInput style={styles.inputSoft} placeholder="Round Lab..."></TextInput>
                </View>
                <View>
                    <Text style={[styles.lightText, { textAlign: "left" }]}>Product Name</Text>
                    <TextInput style={styles.inputSoft} placeholder="Birch Juice Sunscreen..."></TextInput>
                </View>
                <View style={{ flexDirection: "row", gap: 20 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.lightText, { textAlign: "left" }]}>Product Category</Text>
                        <TextInput style={styles.inputSoft} placeholder="Sunscreen..."></TextInput>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.lightText, { textAlign: "left" }]}>Price Range</Text>
                        <TextInput style={styles.inputSoft} placeholder="$$"></TextInput>
                    </View>
                </View>
                <View>
                    <Text style={[styles.lightText, { textAlign: "left" }]}>Product Rating</Text>
                    <Rating
                        type='heart'
                        ratingCount={5}
                        startingValue={1}
                        imageSize={40}
                        onFinishRating={this.ratingCompleted}
                        style={{ alignItems: "left", marginTop: 10 }}
                    />
                </View>
                <View style={{ gap: 10 }}>
                    <Text style={[styles.lightText, { textAlign: "left" }]}>Features</Text>
                    <View style={{ gap: 15 }}>
                        <View style={{ flexDirection: "row", gap: 7 }}>
                            {pros.map((pro, index) => {
                                return (
                                    <Tag key={index} label={pro}></Tag>
                                );
                            })}
                        </View>
                        <View style={{ flexDirection: "row", gap: 7 }}>
                            {cons.map((con, index) => {
                                return (
                                    <Tag key={index} color="#F3DAD4" label={con}></Tag>
                                );
                            })}
                        </View>
                    </View>
                </View>
            </View >
            <View style={{ flexDirection: "row", gap: 20 }}>
                <Button label="Add Photo" onPress={() => { }}></Button>
                <Button style="dark" label="Add Product" onPress={() => { }}></Button>
            </View>
        </View >

    );
}

export default AddModal;


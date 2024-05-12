import { Text, View, Pressable, Image, StyleSheet } from "react-native";
import React from "react";

const Home = (props) => {
    return (
        <View style={props.align ? [styles.wideCard, { backgroundColor: props.color }] : styles.card}>
            {props.align ?
                (<>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.header}>{props.text}</Text>
                        <Text style={{ color: "white" }}>{props.subText}</Text>
                    </View>
                    <Image style={styles.wideImage} source={props.pic}></Image></>)
                :
                (<>
                    <Image style={styles.image} source={props.pic}></Image>
                    <Text style={{ textAlign: "center" }}>{props.text}</Text>
                </>
                )
            }
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        padding: 20,
        marginBottom: 20,
        backgroundColor: "#D3EAF9",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    wideCard: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header: {
        color: "white",
        fontSize: 14,
        fontFamily: "LibreCaslonTextBold",
        paddingBottom: 20
    },
    wideImage: {
        width: '40%',
        height: '40%',
        aspectRatio: 1,
    },
    image: {
        width: '70%',
        height: '70%',
        aspectRatio: 1,
    }
});

export default Home;




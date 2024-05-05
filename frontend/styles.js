import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ECF7FE",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 50,
    },
    photo: {
        flex: 1,
    },
    sign: {
        flex: 1.5,
        width: windowWidth * 0.85,
        justifyContent: "space-around",
    },
    clearButton: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 10,
        height: windowHeight * 0.07,
        borderWidth: 1,
        borderColor: "#3A405A",
        justifyContent: "center",
    },
    solidButton: {
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#3A405A",
        height: windowHeight * 0.07,
        justifyContent: "center",
    },
    title: {
        color: "#3A405A",
        fontSize: windowHeight * 0.05,
        fontFamily: "LibreCaslonTextBold",
    },
    boldText: {
        fontSize: windowHeight * 0.02,
        textAlign: "center",
        fontFamily: "BeVietnamProBold",
    },
    lightText: {
        fontSize: windowHeight * 0.02,
        textAlign: "center",
        fontFamily: "BeVietnamProRegular",
    },
    input: {
        height: windowHeight * 0.07,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
    },
    circleButton: {
        width: 50,
        height: 50,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default styles;

import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    background: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: "#ECF7FE"
    },
    container: {
        flex: 1,
        backgroundColor: "#ECF7FE",
        alignItems: "center",
        justifyContent: "center",
        padding: 50,
    },
    photo: {
        flex: 1.3,
        justifyContent: "center",
    },
    sign: {
        flex: 1.5,
        width: windowWidth * 0.85,
        marginBottom: "5%",
    },
    navigationButton: {
        width: windowWidth * 0.40,
    },
    clearButton: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 10,
        height: windowHeight * 0.055,
        borderWidth: 1,
        borderColor: "#3A405A",
        justifyContent: "center",
    },
    solidButton: {
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#3A405A",
        height: windowHeight * 0.055,
        justifyContent: "center",
    },
    title: {
        color: "#3A405A",
        fontSize: windowHeight * 0.05,
        fontFamily: "LibreCaslonTextBold",
    },
    largeHeader: {
        color: "#3A405A",
        fontSize: windowHeight * 0.035,
        fontFamily: "LibreCaslonTextBold",
        paddingBottom: 20
    },
    header: {
        color: "#3A405A",
        fontSize: windowHeight * 0.025,
        fontFamily: "LibreCaslonTextBold",
        textAlign: "center",
    },
    boldText: {
        fontSize: windowHeight * 0.02,
        textAlign: "center",
        fontFamily: "BeVietnamProBold",
        color: "#3A405A"
    },
    lightText: {
        color: "#3A405A",
        fontSize: windowHeight * 0.018,
        textAlign: "center",
        fontFamily: "BeVietnamProRegular",
    },
    input: {
        height: windowHeight * 0.055,
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
    skinButton: {
        width: "45%",
        height: 125,
        backgroundColor: 'white',
        borderRadius: 15,
        borderColor: 'lightgray',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: "center",
        gap: 10,
        opacity: 0.7
    },
    selectedButton: {
        opacity: 1,
        backgroundColor: 'lightcyan',
        borderColor: 'lightskyblue',

    },
    pageIndicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        gap: 10,
    },
    pageIndicator: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: 'gray'
    },
    currentPage: {
        backgroundColor: "#3A405A"
    },
});

export default styles;

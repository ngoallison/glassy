import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const globalStyle = StyleSheet.create({
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
        flex: 1.2,
        padding: 10,
        justifyContent: "flex-end",
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
        height: windowHeight * 0.05,
        borderWidth: 1,
        borderColor: "gray",
        justifyContent: "center",
    },
    solidButton: {
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#3A405A",
        height: windowHeight * 0.05,
        justifyContent: "center",
    },
    title: {
        color: "#3A405A",
        fontSize: 42,
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
    headerSans: {
        color: "#3A405A",
        fontSize: 20,
        fontFamily: "BeVietnamProBold",
    },
    boldText: {
        fontSize: 15,
        textAlign: "center",
        fontFamily: "BeVietnamProBold",
        color: "#3A405A"
    },
    lightText: {
        color: "#3A405A",
        fontSize: 15,
        textAlign: "center",
        fontFamily: "BeVietnamProRegular",
    },
    input: {
        height: windowHeight * 0.045,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
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
        width: "47%",
        height: 140,
        backgroundColor: 'white',
        borderRadius: 15,
        borderColor: 'lightgray',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: "5%",
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
    smallLightText: {
        fontSize: 15,
        fontFamily: "BeVietnamProRegular",
        color: "white",
    },
    smallDarkText: {
        fontSize: 15,
        fontFamily: "BeVietnamProRegular",
        color: "#3A405A",
    },
});

export default globalStyle;

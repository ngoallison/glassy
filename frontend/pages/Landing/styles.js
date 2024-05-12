import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import globalStyle from "../../styles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    background: {
        ...globalStyle.background
    },
    container: {
        flex: 1,
        padding: 30,
        marginBottom: "5%",
        alignItems: "center",
        justifyContent: "center",
    },
    photo: {
        ...globalStyle.photo
    },
    contentArea: {
        flex: 1.5,
        width: "100%",
    },
    clearButton: {
        ...globalStyle.clearButton,
    },
    solidButton: {
        ...globalStyle.solidButton,
    },
    title: {
        ...globalStyle.title
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
        ...globalStyle.input
    },
    smallLightText: {
        ...globalStyle.smallLightText
    },
    smallDarkText: {
        ...globalStyle.smallDarkText
    },
});

export default styles;

import { StatusBar } from "expo-status-bar";
import styles from "../../styles";
import NavigationButtons from "../../components/NavigationButtons";
import { Text, View, Pressable, ImageBackground, Dimensions } from "react-native";
import React, { Component, useState, useRef } from "react";
import SurveyZero from "./SurveyZero";
import SurveyOne from "./SurveyOne";
import SurveyTwo from "./SurveyTwo";
import SurveyThree from "./SurveyThree";
import SurveyFour from "./SurveyFour";
import blob from "../../assets/icons/blob-scene.png"
import Modal from "../../components/Modal";
import BottomSheet from '@gorhom/bottom-sheet';
import SkinComponent from "./SkinComponent";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const Survey = ({ navigation }) => {

    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 5;

    const handleNext = () => {
        if (currentPage < 4) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleBack = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const bottomSheetRef = useRef(<BottomSheet></BottomSheet>);
    const handleOpenPress = () => bottomSheetRef.current?.expand();

    // Function to render the current page based on the currentPage state
    const renderPage = () => {
        switch (currentPage) {
            case 0:
                return <SurveyZero />;
            case 1:
                return <SurveyOne handleOpenPress={handleOpenPress} />;
            case 2:
                return <SurveyTwo />;
            case 3:
                return <SurveyThree />;
            case 4:
                return <SurveyFour />;
            default:
                return null;
        }
    };

    return (
        <>

            <View style={[styles.container, { padding: 0 }]}>
                <ImageBackground source={blob} resizeMode="stretch" style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 50,
                }}>
                    <View style={{ flex: 5 }}>
                        <View style={styles.pageContainer}>{renderPage()}</View>
                    </View>
                    <View style={{ flex: 1, justifyContent: "space-around" }}>
                        <View style={styles.pageIndicatorContainer}>
                            {[...Array(totalPages).keys()].map((index) => (
                                <View
                                    key={index}
                                    style={[styles.pageIndicator, currentPage === index ? styles.currentPage : null]}
                                />
                            ))}
                        </View>
                        <NavigationButtons
                            disable={currentPage == 0 ? true : false}
                            last={currentPage == totalPages - 1 ? true : false}
                            back={currentPage == 0 ? () => { } : handleBack}
                            next={currentPage == totalPages - 1 ? () => { navigation.navigate("Main Page") } : handleNext}>
                        </NavigationButtons>
                    </View>
                </ImageBackground>
                <Modal bottomSheetRef={bottomSheetRef} component={<SkinComponent></SkinComponent>}></Modal>
            </View >
        </>
    );
};
export default Survey;
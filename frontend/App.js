import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Front from "./pages/Landing/Front";
import SignIn from "./pages/Landing/SignIn";
import Register from "./pages/Landing/Register";
import Survey from "./pages/Survey/Survey";
import Header from "./pages/Home/Header";
import Home from "./pages/Home/Home";
import Main from "./pages/Home/Main";
import Products from "./pages/Products/Products";
import Modal from "./components/Modal";
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useFonts } from "expo-font";
import NavigationButtons from "./components/NavigationButtons";
import NewHome from "./pages/Home/NewHome";


const Stack = createNativeStackNavigator();

const App = () => {

  const [fontsLoaded] = useFonts({
    'BeVietnamProBold': require("./assets/fonts/BeVietnamPro-Bold.ttf"),
    'BeVietnamProRegular': require("./assets/fonts/BeVietnamPro-Regular.ttf"),
    'LibreCaslonTextBold': require("./assets/fonts/LibreCaslonText-Bold.ttf"),
  });

  if (!fontsLoaded) {
    // Fonts are still loading, return a loading indicator or placeholder
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Front Page"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Front Page" component={Front} />
            <Stack.Screen name="Sign In Page" component={SignIn} />
            <Stack.Screen name="Register Page" component={Register} />
            <Stack.Screen name="Survey Page" component={Survey} />
            <Stack.Screen name="Header Page" component={Header} />
            <Stack.Screen name="Main Page" component={Main} />
            <Stack.Screen name="NewHome Page" component={NewHome} />
            <Stack.Screen name="Products Page" component={Products} />
            <Stack.Screen name="Modal Page" component={Modal} />

          </Stack.Navigator>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;

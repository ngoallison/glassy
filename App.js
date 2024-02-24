import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Front from "./pages/Front";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Front Page"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Front Page" component={Front} />
        <Stack.Screen name="Sign In Page" component={SignIn} />
        <Stack.Screen name="Register Page" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

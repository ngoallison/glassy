import { StatusBar } from "expo-status-bar";

import { Text, View, SafeAreaView, Pressable, TextInput } from "react-native";
import React, { Component } from "react";

const SignIn = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  return (
    <View>
      <View></View>
      <View>
        <View>
          <Text >glassy</Text>
          <Text
            style={{ color: "#3A405A", textAlign: "left" }}
          >
            for glowing skin you can be comfortable in.
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: "space-around",
          }}
        >
          <TextInput
            onChangeText={onChangeText}
            placeholder="Email"
            value={text}
          />
          <TextInput
            onChangeText={onChangeNumber}
            secureTextEntry={true}
            placeholder="Password"
            keyboardType="numeric"
          />
          <Text
            style={{ textAlign: "right", color: "#3A405A" }}
          >
            forgot password?
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: "space-around",
          }}
        >
          <Pressable>
            <Text style={{ color: "#FFFFFF" }}>Sign In</Text>
          </Pressable>
          <Text
            style={[
              { color: "#3A405A", textAlign: "center" },
            ]}
          >
            Don't have an account yet? Register here.
          </Text>
        </View>
      </View>
    </View>
  );
};
export default SignIn;

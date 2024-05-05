import { StatusBar } from "expo-status-bar";

import { Text, View, SafeAreaView, Pressable, TextInput } from "react-native";
import React, { Component } from "react";

const Register = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <View>
      <View></View>
      <View >
        <View style={{ flex: 1.5 }}>
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
            placeholder="Phone Number"
            value={text}
          />
          <TextInput
            onChangeText={onChangePassword}
            secureTextEntry={true}
            placeholder="Password"
            keyboardType="numeric"
          />
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: "space-around",
          }}
        >
          <Pressable>
            <Text style={{ color: "#FFFFFF" }}>
              Register
            </Text>
          </Pressable>
          <Text
            style={[
              { color: "#3A405A", textAlign: "center" },
            ]}
          >
            Already have an account? Sign in here.
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Register;

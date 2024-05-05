import { StatusBar } from "expo-status-bar";

import { Text, View, Pressable } from "react-native";
import React, { Component } from "react";

const Front = ({ navigation }) => {
  return (
    <View >
      <View ></View>
      <View >
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
            flex: 2,
            justifyContent: "space-around",
          }}
        >
          <Pressable >
            <Text
              style={{ color: "#3A405A" }}
              onPress={() => navigation.navigate("Sign In Page")}
            >
              Sign In
            </Text>
          </Pressable>
          <Pressable >
            <Text
              style={{ color: "#FFFFFF" }}
              onPress={() => navigation.navigate("Register Page")}
            >
              Register
            </Text>
          </Pressable>
        </View>

        <StatusBar style="auto" />
        <View
          style={{
            flex: 2,
            justifyContent: "space-around",
          }}
        >
          <Text
            style={[
              { color: "#3A405A", textAlign: "center" },
            ]}
          >
            Or sign in with...
          </Text>
          <Pressable >
            <Text style={{ color: "#FFFFFF" }}>Other</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default Front;

import { StatusBar } from "expo-status-bar";
import styles from "../const";

import { Text, View, Pressable } from "react-native";
import React, { Component } from "react";

const Front = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.photo}></View>
      <View style={[styles.sign]}>
        <View style={{ flex: 1.5 }}>
          <Text style={styles.title}>glassy</Text>
          <Text
            style={[styles.lightText, { color: "#3A405A", textAlign: "left" }]}
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
          <Pressable style={styles.clearButton}>
            <Text
              style={[styles.boldText, { color: "#3A405A" }]}
              onPress={() => navigation.navigate("Sign In Page")}
            >
              Sign In
            </Text>
          </Pressable>
          <Pressable style={styles.solidButton}>
            <Text
              style={[styles.boldText, { color: "#FFFFFF" }]}
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
              styles.lightText,
              { color: "#3A405A", textAlign: "center" },
            ]}
          >
            Or sign in with...
          </Text>
          <Pressable style={styles.solidButton}>
            <Text style={[styles.boldText, { color: "#FFFFFF" }]}>Other</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default Front;

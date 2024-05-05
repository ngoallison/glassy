import { StatusBar } from "expo-status-bar";
import styles from "../styles";

import { Text, View, SafeAreaView, Pressable, TextInput } from "react-native";
import React, { Component } from "react";

const Register = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const [password, onChangePassword] = React.useState("");

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
            flex: 3,
            justifyContent: "space-around",
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Email"
            value={text}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            placeholder="Phone Number"
            value={text}
          />
          <TextInput
            style={styles.input}
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
          <Pressable style={styles.solidButton}>
            <Text style={[styles.boldText, { color: "#FFFFFF" }]}>
              Register
            </Text>
          </Pressable>
          <Text
            style={[
              styles.lightText,
              { color: "#3A405A", textAlign: "center" },
            ]}
          >
            Already have an account?
            <Text style={styles.boldText} onPress={() => navigation.navigate("Sign In Page")}> Sign in here.</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Register;
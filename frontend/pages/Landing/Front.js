import { StatusBar } from "expo-status-bar";
import styles from "./styles"
import { Text, View, Pressable } from "react-native";
import React from "react";
import LargeIcon from "../../components/LargeIcon";
import Button from "../../components/Button";

const Front = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <LargeIcon style={styles.photo}></LargeIcon>
        <View style={styles.contentArea}>

          <View style={{ flex: 1 }}>
            <Text style={styles.title}>glassy</Text>
            <Text style={styles.smallDarkText}>for glowing skin you can be comfortable in.</Text>
          </View>

          <View style={{ flex: 3, justifyContent: "center", gap: 30 }}>
            <Button style="dark" func={() => navigation.navigate("Sign In Page")} label="Sign In"></Button>
            <Button style="light" func={() => navigation.navigate("Register Page")} label="Register"></Button>
          </View>


          <View style={{ flex: 2, justifyContent: "space-around", }}>
            <Text style={[styles.smallDarkText, { textAlign: "center" }]}>Or sign in with...</Text>
            <Button style="dark" func={() => navigation.navigate("Sign In Page")} label="Sign In"></Button>
          </View>

        </View>
      </View>
    </View >
  );
};
export default Front;
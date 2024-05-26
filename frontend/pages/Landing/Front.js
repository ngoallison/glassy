import { StatusBar } from "expo-status-bar";
import styles from "./styles"
import { Text, View, Pressable, Image } from "react-native";
import React from "react";
import LargeIcon from "../../components/LargeIcon";
import Button from "../../components/Button";
import google from "../../assets/icons/google.jpeg"
import apple from "../../assets/icons/apple.jpeg"
import facebook from "../../assets/icons/facebook.png"


const Front = ({ navigation }) => {

  const icons = [google, apple, facebook];

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
            <View style={{ flexDirection: "row", gap: 50, alignItems: "center", justifyContent: "center", flex: 1 }}>
              {icons.map((item) => {
                return (
                  <View>
                    <Image style={{ width: 40, height: 40, borderRadius: 30 }} source={item}></Image>
                  </View>
                );
              })}
            </View>
          </View>

        </View>
      </View>
    </View >
  );
};
export default Front;
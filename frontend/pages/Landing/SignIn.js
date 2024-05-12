import styles from "../../styles";
import LargeIcon from "../../components/LargeIcon";

import { Text, View, SafeAreaView, Pressable, TextInput, Image } from "react-native";
import React, { Component } from "react";

const SignIn = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [pass, onChangePass] = React.useState("");

  const [textError, setTextError] = React.useState(false);
  const [passError, setPassError] = React.useState(false);

  const handleSubmit = () => {
    if (text.length == 0) {
      setTextError(true);
    }
    else {
      setTextError(false);
    }

    if (pass.length == 0) {
      setPassError(true);
    }
    else {
      setPassError(false);
    }

  }

  return (
    <View style={styles.container}>
      <Pressable style={{ width: "110%", alignItems: "flex-end" }} onPress={() => navigation.navigate("Front Page")}><Text>ⓧ</Text></Pressable>
      <LargeIcon></LargeIcon>
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
            flex: 2.5,
            justifyContent: "space-around",
          }}
        >

          <TextInput
            style={[styles.input, textError ? { borderColor: "red" } : {}]}
            onChangeText={onChangeText}
            placeholder="Email"
            value={text}
          />
          {textError ?
            <Text style={{ color: "red", fontSize: 10 }}>* Required Field</Text>
            : <></>}

          <TextInput
            style={[styles.input, passError ? { borderColor: "red" } : {}]}
            onChangeText={onChangePass}
            secureTextEntry={true}
            placeholder="Password"
          />
          {passError ?
            <Text style={{ color: "red", fontSize: 10 }}>* Required Field</Text>
            : <></>}
          <Text
            style={[styles.boldText, { textAlign: "right", color: "#3A405A" }]}
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
          <Pressable style={styles.solidButton} onPress={handleSubmit}>
            <Text style={[styles.boldText, { color: "#FFFFFF" }]}>Sign In</Text>
          </Pressable>
          <Text
            style={[
              styles.lightText,
              { color: "#3A405A", textAlign: "center" },
            ]}
          >
            Don't have an account yet?
            <Text style={styles.boldText} onPress={() => navigation.navigate("Register Page")}> Register here.</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
export default SignIn;
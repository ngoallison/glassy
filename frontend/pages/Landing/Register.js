import { Text, View, TextInput, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";
import LargeIcon from "../../components/LargeIcon";
import Button from "../../components/Button";
import styles from "./styles";
import { colors } from "../../Constants"


const Register = ({ navigation }) => {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState("");
  const [password, onChangePassword] = useState("");

  const [errors, setErrors] = useState({ username: false, number: false, password: false });


  // Error checking, disallow empty input fields
  const validate = () => {
    let valid = true;
    let errors = {}

    if (text.length === 0) {
      errors.username = "* Required Field";
      valid = false
    }
    if (number.length === 0) {
      errors.number = "* Required Field";
      valid = false
    }
    if (password.length === 0) {
      errors.password = "* Required Field";
      valid = false
    }

    setErrors(errors);
    return valid;

  }

  const handleSubmit = () => {
    if (validate()) {
      navigation.navigate("Survey Page")
    }
  };

  return (
    <View style={styles.background}>
      <Pressable style={{ width: "100%", alignItems: "flex-end", marginTop: 40, paddingRight: 30, position: "absolute" }} onPress={() => navigation.navigate("Front Page")}>
        <Ionicons color={colors.darkBlue} size={22} name="close"></Ionicons>
      </Pressable>
      <View style={[styles.container]}>

        <LargeIcon></LargeIcon>
        <View style={[styles.contentArea]}>

          {/* Title component */}
          <View style={{ flex: 2 }}>
            <Text style={styles.title}>glassy</Text>
            <Text style={styles.smallDarkText}>for glowing skin you can be comfortable in.</Text>
          </View>

          {/* Text inputs for registering account component */}
          <View style={{ flex: 4, justifyContent: "space-evenly" }}>

            <View>
              <TextInput
                style={[styles.input, errors.username ? { borderColor: "red" } : {}]}
                onChangeText={onChangeText}
                placeholder="Email"
                value={text}
              />
              <Text style={{ color: "red", fontSize: 10 }}>{errors.username}</Text>
            </View>

            <View>
              <TextInput
                style={[styles.input, errors.number ? { borderColor: "red" } : {}]}
                onChangeText={onChangeNumber}
                placeholder="Phone Number"
                keyboardType="numeric"
                value={number}
              />
              <Text style={{ color: "red", fontSize: 10 }}>{errors.number}</Text>
            </View>

            <View>
              <TextInput
                style={[styles.input, errors.password ? { borderColor: "red" } : {}]}
                onChangeText={onChangePassword}
                secureTextEntry={true}
                placeholder="Password"
                value={password}
              />
              <Text style={{ color: "red", fontSize: 10 }}>{errors.password}</Text>
            </View>

          </View>
          <View style={{ flex: 1 }}>
            <Button style="dark" func={handleSubmit} label="Register"></Button>

          </View>
          {/* Register button to run error checks, pressable text to toggle between register and sign in page */}
          <View style={{ flex: 2, justifyContent: "space-around", }}>
            <Text style={[styles.smallDarkText]}>
              Already have an account?
              <Text style={styles.boldText} onPress={() => navigation.navigate("Sign In Page")}> Sign in here.</Text>
            </Text>
          </View>

        </View>
      </View>
    </View>

  );
};
export default Register;
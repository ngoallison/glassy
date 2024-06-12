import { Text, View, TextInput, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";
import LargeIcon from "../../components/LargeIcon";
import Button from "../../components/Button";
import styles from "./styles";
import { colors } from "../../Constants"
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const Register = ({ navigation }) => {
  const [email, onChangeText] = useState("");
  const [phone, onChangeNumber] = useState("");
  const [password, onChangePassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const [errors, setErrors] = useState({ username: false, phone: false, password: false });


  // Error checking, disallow empty input fields
  const validate = () => {
    let valid = true;
    let errors = {}

    if (email.length === 0) {
      errors.username = "* Required Field";
      valid = false
    }
    if (phone.length === 0) {
      errors.phone = "* Required Field";
      valid = false
    }
    if (password.length === 0) {
      errors.password = "* Required Field";
      valid = false
    }

    setErrors(errors);
    return valid;

  }
  const register = async () => {
    console.log("trying to post");
    try {
      const response = await axios.post('http://localhost:3000/users/register', { email, phone, password });
      console.log(response.data); // Log the response data
      // Handle the response as needed
      return true;
    } catch (error) {
      console.error('Error:', error);
      return false;
      // Handle errors
    }
  }

  const handleSubmit = async () => {
    if (validate()) {
      try {
        // Set a flag to indicate registration is in progress
        setIsRegistering(true);

        const registrationSuccess = await register();
        if (registrationSuccess) {
          console.log("success!")
          navigation.navigate('Survey Page');  // Replace 'NextPage' with your target page
        }
      } finally {
        // Ensure to reset the flag regardless of registration success or failure
        setIsRegistering(false);
      }
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
                value={email}
              />
              <Text style={{ color: "red", fontSize: 10 }}>{errors.username}</Text>
            </View>

            <View>
              <TextInput
                style={[styles.input, errors.phone ? { borderColor: "red" } : {}]}
                onChangeText={onChangeNumber}
                placeholder="Phone Number"
                keyboardType="numeric"
                value={phone}
              />
              <Text style={{ color: "red", fontSize: 10 }}>{errors.phone}</Text>
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

          {/* Register button to run error checks, pressable email to toggle between register and sign in page */}
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
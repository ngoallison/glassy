import { Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import LargeIcon from "../../components/LargeIcon";
import Button from "../../components/Button";
import styles from "./styles";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignIn = ({ navigation }) => {

  // State checkers for user input
  const [email, onChangeEmail] = useState("test@gmail.com");
  const [password, onChangePassword] = useState("password");

  const [errors, setErrors] = useState({ username: false, password: false });


  // Error checking, disallow empty input fields
  const validate = () => {
    let valid = true;
    let errors = {}

    if (email.length === 0) {
      errors.username = "* Required Field";
      valid = false
    }

    if (password.length === 0) {
      errors.password = "* Required Field";
      valid = false
    }

    setErrors(errors);
    return valid;

  }

  const signin = async () => {
    console.log("trying to post");
    try {
      const response = await axios.post('http://localhost:3000/users/login', { email, password });
      const jwtToken = response.data.jwtToken;
      console.log(response.data);
      await AsyncStorage.setItem('token', jwtToken);
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

        const signInSuccess = await signin();
        if (signInSuccess) {
          console.log("successfully logged in!")
          navigation.navigate('Main Page');  // Replace 'NextPage' with your target page
        }
      } catch (error) {
        console.log({ error });
      }
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <LargeIcon style={styles.photo}></LargeIcon>

        <View style={styles.contentArea}>

          {/* Title component */}
          <View style={{ flex: 2 }}>
            <Text style={styles.title}>glassy</Text>
            <Text style={styles.smallDarkText}>for glowing skin you can be comfortable in.</Text>
          </View>

          {/* Text inputs for signing in component */}
          <View style={{ flex: 4, justifyContent: "space-evenly" }}>

            <View>
              <TextInput
                style={[styles.input, errors.username ? { borderColor: "red" } : {}]}
                onChangeText={onChangeEmail}
                placeholder="Email"
                value={email}
              />
              <Text style={{ color: "red", fontSize: 10 }}>{errors.password}</Text>
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
              <Text style={[styles.boldText, { textAlign: "right", marginTop: 10 }]}>forgot password?</Text>
            </View>

          </View>
          <View style={{ flex: 1 }}>
            <Button style="dark" func={handleSubmit} label="Sign In"></Button>

          </View>
          {/* Sign in button to run error checks, pressable text to toggle between register and sign in page */}
          <View style={{ flex: 2, justifyContent: "space-around", }}>
            <Text style={[styles.smallDarkText]}>
              Don't have an account yet?
              <Text style={styles.boldText} onPress={() => navigation.navigate("Register Page")}> Register here.</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default SignIn;
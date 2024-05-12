import { Text, View, TextInput } from "react-native";
import React from "react";
import LargeIcon from "../../components/LargeIcon";
import Button from "../../components/Button";
import styles from "./styles";

const SignIn = ({ navigation }) => {

  // State checkers for user input
  const [text, onChangeText] = React.useState("");
  const [pass, onChangePass] = React.useState("");

  const [textError, setTextError] = React.useState(false);
  const [passError, setPassError] = React.useState(false);

  // Error checking, disallow empty input fields
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
    <View style={styles.background}>
      <View style={styles.container}>
        <LargeIcon style={styles.photo}></LargeIcon>

        <View style={styles.contentArea}>

          {/* Title component */}
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>glassy</Text>
            <Text style={styles.smallDarkText}>for glowing skin you can be comfortable in.</Text>
          </View>

          {/* Text inputs for signing in component */}
          <View style={{ flex: 3, justifyContent: "space-evenly" }}>

            <View>
              <TextInput
                style={[styles.input, textError ? { borderColor: "red" } : {}]}
                onChangeText={onChangeText}
                placeholder="Email"
                value={text}
              />
              {textError ? <Text style={{ color: "red", fontSize: 10 }}>* Required Field</Text> : <></>}
            </View>

            <View>
              <TextInput
                style={[styles.input, passError ? { borderColor: "red" } : {}]}
                onChangeText={onChangePass}
                secureTextEntry={true}
                placeholder="Password"
              />
              {passError ? <Text style={{ color: "red", fontSize: 10 }}>* Required Field</Text> : <></>}
              <Text style={[styles.boldText, { textAlign: "right", marginTop: 10 }]}>forgot password?</Text>
            </View>

          </View>

          {/* Sign in button to run error checks, pressable text to toggle between register and sign in page */}
          <View style={{ flex: 2, justifyContent: "space-around", }}>
            <Button style="dark" func={handleSubmit} label="Sign In"></Button>
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
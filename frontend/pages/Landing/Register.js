import { Text, View, TextInput, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import LargeIcon from "../../components/LargeIcon";
import Button from "../../components/Button";
import styles from "./styles";
import { colors } from "../../Constants"


const Register = ({ navigation }) => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  const [textError, setTextError] = React.useState(false);
  const [numberError, setNumberError] = React.useState(false);
  const [passError, setPassError] = React.useState(false);

  // Error checking, disallow empty input fields
  const handleSubmit = () => {
    if (text.length == 0) {
      setTextError(true);
    }
    else {
      setTextError(false);
    }

    if (number.length == 0) {
      setNumberError(true);
    }
    else {
      setNumberError(false);
    }

    if (password.length == 0) {
      setPassError(true);
    }
    else {
      setPassError(false);
    }

    if (!textError && !numberError && !passError) {
      navigation.navigate("Survey Page");
    }

  }

  return (
    <View style={styles.background}>
      <Pressable style={{ width: "100%", alignItems: "flex-end", marginTop: 40, paddingRight: 30, position: "absolute" }} onPress={() => navigation.navigate("Front Page")}>
        <Ionicons color={colors.darkBlue} size={22} name="close"></Ionicons>
      </Pressable>
      <View style={[styles.container]}>

        <LargeIcon></LargeIcon>
        <View style={[styles.contentArea]}>

          {/* Title component */}
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>glassy</Text>
            <Text style={styles.smallDarkText}>for glowing skin you can be comfortable in.</Text>
          </View>

          {/* Text inputs for registering account component */}
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
                style={[styles.input, numberError ? { borderColor: "red" } : {}]}
                onChangeText={onChangeNumber}
                placeholder="Phone Number"
                keyboardType="numeric"
                value={number}
              />
              {numberError ? <Text style={{ color: "red", fontSize: 10 }}>* Required Field</Text> : <></>}
            </View>

            <View>
              <TextInput
                style={[styles.input, passError ? { borderColor: "red" } : {}]}
                onChangeText={onChangePassword}
                secureTextEntry={true}
                placeholder="Password"
                value={password}
              />
              {passError ? <Text style={{ color: "red", fontSize: 10 }}>* Required Field</Text> : <></>}
            </View>

          </View>

          {/* Register button to run error checks, pressable text to toggle between register and sign in page */}
          <View style={{ flex: 2, justifyContent: "space-around", }}>
            <Button style="dark" func={handleSubmit} label="Register"></Button>
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
import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Pressable,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View>
          <Text style={styles.signText}>Sign In</Text>
          <View style={styles.inputField}>
            <TextInput
              style={styles.inputform}
              placeholder="Username"
              placeholderTextColor={"#000"}
            />
          </View>
          <View style={styles.inputField}>
            <TextInput
              style={styles.inputform}
              placeholder="Password"
              placeholderTextColor={"#000"}
            />
          </View>
          <Pressable onPress={() => navigation.navigate("MainTabs")}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </Pressable>

          <View style={styles.trycontainer}>
            <Text>Create a Account</Text>
            <Text>Forgot Password?</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
    margin: 20,
  },

  signText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },

  inputField: {
    borderWidth: 1,
    padding: 7,
    borderRadius: 5,
    marginTop: 15,
  },

  inputform: {
    fontSize: 16,
  },

  buttonContainer: {
    marginTop: 35,
    backgroundColor: "#211951",
    paddingHorizontal: 5, // corrected
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 10,
    // paddingVertical: 25,
    // marginLeft: 10,
  },

  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },

  trycontainer: {
    flexDirection: "row",
    // justifyContent: "center",
    marginTop: 10,
    gap: 100,
    fontSize: 20,
  },
});

export default LoginScreen;

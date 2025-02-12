import React, { useState } from "react";
import { Text, Alert, StyleSheet, ImageBackground } from "react-native";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";

const SignUpScreen = ({ navigation }) => {
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    password: "",
    state: "",
    city: "",
    pincode: "",
    consumerType: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = async () => {
    // Validate input fields
    for (let key in credentials) {
      if (!credentials[key]) {
        Alert.alert("Error", "All fields are required");
        return;
      }
    }

    try {
      const response = await axios.post(
        "http://192.168.1.5:5000/signup",
        credentials
      );

      if (response.data.success) {
        Alert.alert("Success", "Sign up successful!");
        navigation.navigate("UserType");
      } else {
        Alert.alert("Error", response.data.message || "Sign-up failed.");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      Alert.alert(
        "Error",
        error.response?.data?.message || "Failed to sign up. Please try again."
      );
    }
  };

  return (
  <ImageBackground style={styles.container} source={require("../assets/Login_X1.jpg")}>
      <Text style={styles.title}>Sign Up</Text>

      {Object.keys(credentials).map((key) => (
        <TextInput
          key={key}
          label={key.replace(/([A-Z])/g, " $1").trim()} // Format label (e.g., "firstName" -> "First Name")
          mode="outlined"
          value={credentials[key]}
          onChangeText={(text) =>
            setCredentials((prev) => ({ ...prev, [key]: text }))
          }
          keyboardType={
            key === "mobileNumber" || key === "pincode" ? "numeric" : "default"
          }
          secureTextEntry={key === "password" && !showPassword}
          right={
            key === "password" ? (
              <TextInput.Icon
                icon={showPassword ? "eye-off" : "eye"}
                onPress={() => setShowPassword(!showPassword)}
              />
            ) : null
          }
          style={styles.input}
        />
      ))}

      <Button mode="contained" onPress={handleSignUp} style={styles.button}>
        Sign Up
      </Button>

      <Text style={styles.linkText}>Already have an account?</Text>

      <Button
        mode="contained"
        onPress={() => navigation.navigate("UserType")}
        style={styles.button}>
        Login
      </Button>
   </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#4CAF50",
    width: "100%",
    marginVertical: 5,
  },
  linkText: {
    color: "blue",
    marginTop: 10,
    textAlign: "center",
  },
});

export default SignUpScreen;

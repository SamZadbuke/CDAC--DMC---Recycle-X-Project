import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
} from "react-native";
import { TextInput } from "react-native-paper";
import CheckBox from "react-native-check-box";
import axios from "axios";

const LoginScreen = ({ route, navigation }) => {
  const { role } = route.params; // Get the selected role
  const [isChecked, setIsChecked] = useState(false);
  const [credentials, setCrdentials] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

 const handleLogin = async () => {
   if (!credentials.email || !credentials.password) {
     Alert.alert("Error", "Email and password are required.");
     return;
   }

   try {
     let apiUrl = "";
     if (role === "Consumer") {
       apiUrl = "http://localhost:5000/consumer/signin";
     } else if (role === "Supplier") {
       apiUrl = "http://localhost:5000/supplier/signin";
     }

     const response = await axios.post(apiUrl, credentials);

     // Check the response
     if (response.data.token) {
    
       AsyncStorage.setItem("token", response.data.token);

       Alert.alert("Success", "Login Successful!");
       navigation.navigate(role === "Consumer" ? "Dashboard" : "Dashboard");
     } else {
       Alert.alert("Error", "Invalid email or password.");
     }
   } catch (error) {
     // Log the error for debugging
     console.error("Login error:", error.response || error.message);
     Alert.alert("Error", "Failed to log in. Please try again.");
   }
 };


  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/Login_X1.jpg")}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        label="Email"
        mode="outlined"
        value={credentials.email}
        onChangeText={(text) =>
          setCrdentials((prev) => ({ ...prev, email: text }))
        }
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        label="Password"
        mode="outlined"
        secureTextEntry={!showPassword}
        right={
          <TextInput.Icon
            icon={showPassword ? "eye-off" : "eye"}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        value={credentials.password}
        onChangeText={(text) =>
          setCrdentials((prev) => ({ ...prev, password: text }))
        }
      />

      <View style={styles.rememberMeContainer}>
        <CheckBox
          isChecked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
        />
        <Text>Remember Me</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
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
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default LoginScreen;
























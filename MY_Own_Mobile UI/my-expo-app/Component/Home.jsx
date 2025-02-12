import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { Card } from "react-native-paper";

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/Home.jpg")} // Set your background image here
    >
      <Text style={styles.title}>Welcome to Recycle_X</Text>
      <Text style={styles.subtitle}>Reduce | Reuse | Recycle</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("UserType")}>
        <Text style={styles.buttonText}>Start Recycling</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const UserTypeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/UserType.jpg")} // Set your background image here
    >
      <Text style={styles.title}>Select Your Role</Text>

      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <Image
            source={require("../assets/Profile.png")}
            style={styles.cardImage}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login", { role: "Consumer" })}>
            <Text style={styles.buttonText}>Consumer</Text>
          </TouchableOpacity>
        </View>
      </Card>

      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <Image
            source={require("../assets/Profile.png")}
            style={styles.cardImage}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login", { role: "Supplier" })}>
            <Text style={styles.buttonText}>Supplier</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff", // Set text color to white for better visibility on dark backgrounds
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "heavy",
    marginBottom: 10,
    color: "#fff", // Set text color to white for better visibility
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background for card
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 20,
    width: 300,
  },
  cardContent: {
    alignItems: "center",
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export { Home, UserTypeScreen };

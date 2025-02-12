import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// Account Screen with the listed options
const AccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Account</Text>

      {/* Options for Account Page */}
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.optionText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate("Orders")}>
        <Text style={styles.optionText}>Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate("AboutUs")}>
        <Text style={styles.optionText}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate("ContactUs")}>
        <Text style={styles.optionText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

// Option pages (Placeholder for navigation)
const EditProfileScreen = () => <Text>Edit Profile Screen</Text>;
const OrdersScreen = () => <Text>Orders Screen</Text>;
const AboutUsScreen = () => <Text>About Us Screen</Text>;
const ContactUsScreen = () => <Text>Contact Us Screen</Text>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f8ff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
  },
  optionButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  optionText: {
    color: "#fff",
    fontSize: 18,
  },
});

export {
  AccountScreen,
  EditProfileScreen,
  OrdersScreen,
  AboutUsScreen,
  ContactUsScreen,
};

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OrderConfirmScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.thankYouText}>Thank You!</Text>
      <Text style={styles.message}>
        Your order has been placed successfully.
      </Text>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  thankYouText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

export default OrderConfirmScreen;

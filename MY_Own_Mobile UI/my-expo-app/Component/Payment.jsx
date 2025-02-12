import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const PaymentScreen = ({ navigation, route }) => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const { totalPrice } = route.params || {}; // Get total price from order summary

  // Function to handle payment selection
  const handlePaymentSelection = (method) => {
    setSelectedPayment(method);
  };

  // Function to handle payment confirmation
  const handlePayment = () => {
    if (selectedPayment) {
      navigation.navigate("OrderConfirm");
    } else {
      alert("Please select a payment method");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Payment Method</Text>

      <Text style={styles.amountText}>Total Amount: ${totalPrice}</Text>

      {/* Payment Options */}
      <TouchableOpacity
        style={[
          styles.paymentOption,
          selectedPayment === "COD" && styles.selectedOption,
        ]}
        onPress={() => handlePaymentSelection("COD")}>
        <Text style={styles.optionText}>Cash on Delivery (COD)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.paymentOption,
          selectedPayment === "UPI" && styles.selectedOption,
        ]}
        onPress={() => handlePaymentSelection("UPI")}>
        <Text style={styles.optionText}>UPI</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.paymentOption,
          selectedPayment === "Card" && styles.selectedOption,
        ]}
        onPress={() => handlePaymentSelection("Card")}>
        <Text style={styles.optionText}>Credit/Debit Card</Text>
      </TouchableOpacity>

      {/* Payment Button */}
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payText}>Make Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  amountText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  paymentOption: {
    width: "90%",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#4CAF50",
    marginBottom: 10,
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#4CAF50",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  payButton: {
    marginTop: 20,
    backgroundColor: "#FF5733",
    padding: 15,
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
  },
  payText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default PaymentScreen;

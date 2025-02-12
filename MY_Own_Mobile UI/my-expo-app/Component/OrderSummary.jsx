import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

const OrderSummaryScreen = ({ navigation }) => {
  const [address, setAddress] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [quantity, setQuantity] = useState(1); // Default quantity to 1

  // Function to update the address with the new one
  const handleChangeAddress = () => {
    setAddress(newAddress);
    setNewAddress(""); // Clear the input field after changing the address
  };

  // Increase quantity function
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Decrease quantity function
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Calculate total price based on quantity
  const price = 10; // Assume price for the item is $100
  const totalPrice = price * quantity;

  return (
    <ImageBackground style={styles.container} source={require("../assets/Orders Add Cart.jpg")}>
      <Text style={styles.title}>Order Summary</Text>

      {/* Step 1: Address */}
      <Text style={styles.subtitle}>1. Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your address"
        value={newAddress}
        onChangeText={setNewAddress}
      />
      <TouchableOpacity
        style={styles.changeAddressButton}
        onPress={handleChangeAddress}>
        <Text style={styles.changeAddressText}>Change Address</Text>
      </TouchableOpacity>

      {/* Display the current address */}
      {address ? (
        <Text style={styles.addressText}>Current Address: {address}</Text>
      ) : (
        <Text style={styles.addressText}>No address provided yet</Text>
      )}

      {/* Step 2: Order Summary */}
      <Text style={styles.subtitle}>2. Order Summary</Text>
      <View style={styles.summaryBox}>
        {/* Replace with dynamic data */}
        <Text>Product Name: Electronics</Text>
        <Text>Price: ${price}</Text>
        <Text>Quantity: {quantity}</Text>

        {/* Quantity buttons */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={decreaseQuantity}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={increaseQuantity}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>

        <Text>Total: ${totalPrice}</Text>
      </View>

      {/* Payment Button */}
      <Button
        title="Proceed to Payment"
        onPress={() => navigation.navigate("Payment", { totalPrice })}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  changeAddressButton: {
    marginTop: 10,
    backgroundColor: "#FF5733",
    padding: 10,
    borderRadius: 5,
  },
  changeAddressText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  addressText: {
    marginTop: 10,
    fontSize: 16,
  },
  summaryBox: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginVertical: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  quantityButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  quantity: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default OrderSummaryScreen;

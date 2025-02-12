import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

const SubcategoryDetails = ({ route, navigation }) => {
  const { category, subcategory } = route.params;

  const basePricePerKg = 20; // Example price
  const productDetails = {
    name: subcategory,
    description: `High-quality ${subcategory} from the ${category} category. Perfect for recycling and reuse projects.`,
    pricePerKg: basePricePerKg,
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    setQuantity((prev) => {
      if (type === "increase") return prev + 1;
      if (type === "decrease" && prev > 1) return prev - 1;
      return prev;
    });
  };

  const handleBuyNow = () => {
    const updatedDetails = { ...productDetails, quantity };
    navigation.navigate("OrderSummary", { productDetails: updatedDetails });
  };

  const handleAddToCart = () => {
    const updatedDetails = { ...productDetails, quantity };
    Alert.alert(
      "Success",
      `${productDetails.name} (${quantity} kg) has been added to your cart.`
    );
    navigation.navigate("Cart", { productDetails: updatedDetails });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{productDetails.name}</Text>
      <Text style={styles.description}>{productDetails.description}</Text>
      <Text style={styles.price}>
        Price: ${productDetails.pricePerKg * quantity} ($
        {productDetails.pricePerKg} per kg)
      </Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => handleQuantityChange("decrease")}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => handleQuantityChange("increase")}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buyNowButton} onPress={handleBuyNow}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f8ff",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    color: "#555",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  quantityButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buyNowButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
  },
  addToCartButton: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default SubcategoryDetails;

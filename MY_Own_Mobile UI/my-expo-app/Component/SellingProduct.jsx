import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Picker,
  TextInput,
  ImageBackground,
} from "react-native";

const SellingProduct = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const categories = [
    { name: "Plastic", subcategories: ["Bottles", "Containers"] },
    { name: "Glass", subcategories: ["Windows", "Bottles"] },
    { name: "Paper", subcategories: ["Newspaper", "Magazines"] },
    { name: "Rubber", subcategories: ["Tyres", "Rubber Bands"] },
    { name: "Electronics", subcategories: ["Mobiles", "Laptops"] },
    { name: "Metal", subcategories: ["Iron", "Copper"] },
    { name: "Biodegradable", subcategories: ["Food Waste", "Leaves"] },
  ];

  const pricePerKg = 10; // Example price per kg
  const totalPrice = quantity * pricePerKg;

  const handleBuyNow = () => {
    const sellingDetails = {
      category: selectedCategory,
      subcategory: selectedSubcategory,
      quantity,
      totalPrice,
    };

    navigation.navigate("OrderSummary", { sellingDetails });
  };

  return (
    <ImageBackground style={styles.container} source={require("../assets/RecylcingSell.jpg")}>
      <Text style={styles.title}>Sell Your Product</Text>

      <Text style={styles.label}>Select Category:</Text>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        style={styles.picker}>
        <Picker.Item label="Select a Category" value={null} />
        {categories.map((cat, index) => (
          <Picker.Item key={index} label={cat.name} value={cat.name} />
        ))}
      </Picker>

      {selectedCategory && (
        <>
          <Text style={styles.label}>Select Subcategory:</Text>
          <Picker
            selectedValue={selectedSubcategory}
            onValueChange={(itemValue) => setSelectedSubcategory(itemValue)}
            style={styles.picker}>
            <Picker.Item label="Select a Subcategory" value={null} />
            {categories
              .find((cat) => cat.name === selectedCategory)
              .subcategories.map((sub, index) => (
                <Picker.Item key={index} label={sub} value={sub} />
              ))}
          </Picker>
        </>
      )}

      {selectedSubcategory && (
        <>
          <Text style={styles.label}>Enter Quantity (in kg):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter quantity"
            value={quantity.toString()}
            onChangeText={(value) => setQuantity(parseInt(value) || 0)}
          />
        </>
      )}

      {selectedSubcategory && quantity > 0 && (
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Total Quantity: {quantity} kg</Text>
          <Text style={styles.summaryText}>Total Amount: ${totalPrice}</Text>
        </View>
      )}

      {selectedSubcategory && quantity > 0 && (
        <TouchableOpacity style={styles.buyNowButton} onPress={handleBuyNow}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f8ff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  summaryContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#e6f7ff",
    borderRadius: 5,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buyNowButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default SellingProduct;

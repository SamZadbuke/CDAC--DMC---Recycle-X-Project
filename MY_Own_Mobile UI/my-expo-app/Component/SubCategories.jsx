import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";;


const SubCategoryScreen = ({ route,navigation }) => {
  const { category } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      <Text style={styles.description}>
        Explore top products in {category}!
          </Text>
           {/* Buttons in Row Layout */}
                        <View style={styles.buttonContainer}>
                          <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate("OrderSummary")}>
                            <Text style={styles.buttonText}>Buy Now</Text>
                          </TouchableOpacity>
          
                          <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate("Cart")}>
                            <Text style={styles.buttonText}>Add to Cart</Text>
                          </TouchableOpacity>
                        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row", // Aligns buttons horizontally
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 10, // Space between text and buttons
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    Height: 20, // Ensures proper button height
    width: "45%", // Adjusts button width
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SubCategoryScreen;

import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { Card } from "react-native-paper";

const categories = [
  {
    id: "1",
    name: "Electronics",
    image: "https://cdn-icons-png.flaticon.com/512/3065/3065264.png",
  },
  {
    id: "2",
    name: "Plastic",
    image: "https://cdn-icons-png.flaticon.com/512/10768/10768513.png",
  },
  {
    id: "3",
    name: "Bio-Degradable",
    image: "https://cdn-icons-png.flaticon.com/512/1047/1047515.png",
  },
  {
    id: "4",
    name: "Metal",
    image: "https://cdn-icons-png.flaticon.com/512/9345/9345793.png",
  },
  {
    id: "5",
    name: "Paper",
    image: "https://cdn-icons-png.flaticon.com/512/2232/2232688.png",
  },
  {
    id: "6",
    name: "Glass",
    image: "https://cdn-icons-png.flaticon.com/512/2343/2343868.png",
  },
  {
    id: "7",
    name: "Rubber",
    image:"https://cdn-icons-png.flaticon.com/512/2343/2343868.png"
  },
  {
    id: "8",
    name: "Mix-Waste",
    image:"https://cdn-icons-png.flaticon.com/512/2343/2343868.png"
  }

];

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        numColumns={2} // Grid layout
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() =>
              navigation.navigate("SubCategoryScreen", { category: item.name })
            }>
            <Card style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.text}>{item.name}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      <View style={styles.container}>
        <View style={styles.navbar}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate("Account")}>
            <Text style={styles.navText}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate("Cart")}>
            <Text style={styles.navText}>Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  cardContainer: {
    flex: 1,
    margin: 10,
  },
  card: {
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
    marginBottom: 10,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between", // Adjust to make space for the profile button
    position: "absolute",
    bottom: 0, // Anchors navbar to the bottom
    left: 0,
    right: 0,
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    zIndex: 1,
  },
  navButton: {
    padding: 15,
    width: "50%",
  },
  navText: {
    color: "#fff",
      fontSize: 16,
    textAlign:"center"
  },
});

export default CategoriesScreen;

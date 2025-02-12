import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";

const Dashboard = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories and subcategories data
 useEffect(() => {
   const fetchCategories = async () => {
     try {
       console.log("Fetching categories...");
       const categoryResponse = await fetch(
         "http://192.168.X.X:5000/common/getAllRecyclingCategories"
       );
       const categoryData = await categoryResponse.json();
       console.log("Category Data:", categoryData); // Debugging

       const subCategoryResponse = await fetch(
         "http://192.168.X.X:5000/common/getAllRecyclingSubCategories"
       );
       const subCategoryData = await subCategoryResponse.json();
       console.log("Subcategory Data:", subCategoryData); // Debugging

       const categoriesWithSubcategories = categoryData.map((category) => {
         const subcategories = subCategoryData.filter(
           (subcategory) => subcategory.categoryId === category.id
         );
         return {
           ...category,
           subcategories: subcategories.map((sub) => sub.name),
         };
       });

       setCategories(categoriesWithSubcategories);
       setLoading(false);
     } catch (error) {
       console.error("Error fetching data:", error);
       setLoading(false);
     }
   };

   fetchCategories();
 }, []);


  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate("SellingPage")}>
        <Text style={styles.navText}>Sell Product</Text>
      </TouchableOpacity>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.name}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: 80,
          paddingHorizontal: 10,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("CategoryDetails", { category: item })
            }>
            <Image source={{ uri: item.image }} style={styles.categoryImage} />
            <Text style={styles.cardTitle}>{item.name}</Text>
            <View style={styles.subcategoriesContainer}>
              {item.subcategories.map((sub, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.subcategoryButton}
                  onPress={() =>
                    navigation.navigate("SubCategoryDetails", {
                      category: item.name,
                      subcategory: sub,
                    })
                  }>
                  <Text style={styles.subcategoryText}>{sub}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Dashboard")}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Categories")}>
          <Text style={styles.navText}>Categories</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Cart")}>
          <Text style={styles.navText}>Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("SellingProduct")}>
          <Text style={styles.navText}>Sell Product</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Account")}>
          <Image
            source={require("../assets/Profile.png")}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
  },
  searchBar: {
    width: "90%",
    height: 40,
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  card: {
    width: "48%",
    aspectRatio: 0.8,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    marginVertical: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  categoryImage: {
    width: "100%",
    height: "60%",
    resizeMode: "contain",
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
    textAlign: "center",
  },
  subcategoriesContainer: {
    marginTop: 5,
    width: "100%",
    alignItems: "center",
  },
  subcategoryButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    marginTop: 5,
    width: "90%",
    alignItems: "center",
  },
  subcategoryText: {
    color: "#fff",
    fontSize: 12,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
  },
  navButton: {
    padding: 10,
  },
  navText: {
    color: "#fff",
    fontSize: 14,
  },
  profileIcon: {
    width: 25,
    height: 25,
  },
});

export default Dashboard;

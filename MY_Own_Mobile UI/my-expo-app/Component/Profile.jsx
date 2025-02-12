import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const ProfileScreen = () => {
  // State for profile details
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
    address: "123, Main Street, City",
  });

  const [isEditing, setIsEditing] = useState(false); // Toggle edit mode

  // Function to handle profile update
  const handleSave = () => {
    setIsEditing(false); // Exit edit mode after saving
  };

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image
        source={require("../assets/Profile.png")} // Replace with actual image
        style={styles.profileImage}
      />

      {/* Profile Fields */}
      <Text style={styles.label}>Name</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={user.name}
          onChangeText={(text) => setUser({ ...user, name: text })}
        />
      ) : (
        <Text style={styles.info}>{user.name}</Text>
      )}

      <Text style={styles.label}>Email</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={user.email}
          onChangeText={(text) => setUser({ ...user, email: text })}
          keyboardType="email-address"
        />
      ) : (
        <Text style={styles.info}>{user.email}</Text>
      )}

      <Text style={styles.label}>Phone</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={user.phone}
          onChangeText={(text) => setUser({ ...user, phone: text })}
          keyboardType="phone-pad"
        />
      ) : (
        <Text style={styles.info}>{user.phone}</Text>
      )}

      <Text style={styles.label}>Address</Text>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={user.address}
          onChangeText={(text) => setUser({ ...user, address: text })}
        />
      ) : (
        <Text style={styles.info}>{user.address}</Text>
      )}

      {/* Edit & Save Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => (isEditing ? handleSave() : setIsEditing(true))}>
        <Text style={styles.buttonText}>
          {isEditing ? "Save Changes" : "Edit Profile"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f8ff",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default ProfileScreen;

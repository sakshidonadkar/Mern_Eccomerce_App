import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Header = () => {
  // Import the local image
const loginImage = require("../../assets/SamyakMart.png");
  const [searchText, setSearchText] = useState("");
  //funciotn for search
  const handleSearch = () => {
    console.log(searchText);
    setSearchText("");
  };
  return (
    <View
      style={{
        height: 100,
        backgroundColor: "rgb(246, 222, 246)"
      }}
    >
      <View style={styles.container}>
      <Image source={loginImage} style={styles.image} />
        <TextInput
          style={styles.inputBox}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <FontAwesome name="search" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    top:0,
  },
  inputBox: {
    borderWidth: 0.3,
    width: "70%",
    position: "absolute",
    left: 130,
    height: 40,
    color: "#000000",
    backgroundColor: "#ffffff",
    paddingLeft: 20,
    fontSize: 16,
    borderRadius: 5,
  },
  searchBtn: {
    position: "absolute",
    left: "95%",
  },
  icon: {
    color: "#000000",
    fontSize: 18,
  },
  image: {
    height: 50,
    width: "30%",
    position: "absolute",
    left: "1%",
  },
});

export default Header;

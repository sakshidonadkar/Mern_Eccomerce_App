import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Individual Product Card Component
const ProductsCard = ({ p }) => {
  const navigation = useNavigation();

  // More details button handler
  const handleMoreButton = (id) => {
    navigation.navigate("productDetails", { _id: id });
    console.log(id);
  };

  // Add to cart button handler
  const handleAddToCart = () => {
    alert("added to cart");
  };

  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={{ uri: p?.imageUrl }} />
      <Text style={styles.cardTitle}>{p?.name}</Text>
      <Text style={styles.cardDesc}>
        {p?.description.substring(0, 30)} ...more
      </Text>
      <View style={styles.BtnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => handleMoreButton(p._id)}
        >
          <Text style={styles.btnText}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCart} onPress={handleAddToCart}>
          <Text style={styles.btnText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Main Component to render the grid view
const ProductsGrid = ({ products }) => {
  const renderItem = ({ item }) => <ProductsCard p={item} />;

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item._id.toString()}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#ffffff",
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 5,
  },
  cardImage: {
    height: 120,
    width: "55%",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 12,
    marginBottom: 10,
  },
  BtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    backgroundColor: "#000000",
    height: 25,
    width: "48%",
    borderRadius: 5,
    justifyContent: "center",
  },
  btnCart: {
    backgroundColor: "orange",
    height: 25,
    width: "48%",
    borderRadius: 5,
    justifyContent: "center",
  },
  btnText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 11,
    fontWeight: "bold",
  },
});

// Sample product data
export const ProductsData = [
  {
    _id: 1,
    name: "Royal Blue Woven Zari Indian Wear Silk Saree",
    description:
      "Featuring beautiful embroidery, this royal blue silk saree will surely grab everyone's attention.",
    price: 9000,
    quantity: 30,
    category: "womens",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl_ZD7bjUHRpDY4Kv7EvMpJsNUBdU3OOlcb553gTRHJA&s",
  },
  {
    _id: 2,
    name: "Royal Silk Dress Yello Party Wear Dress",
    description:
      "This royal silk will surely grab everyone's attention.",
    price: 9000,
    quantity: 30,
    category: "womens",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2020/12/ML/VG/LK/29174263/haldi-special-party-wear-dresses-1000x1000.jpeg",
  },
  {
    _id: 3,
    name: "Teal Self Checked Single-Breasted-5 Piece Suit",
    description:
      "Brown Broad Checked Notch Collar suit is paired with matching trousers.",
    price: 9000,
    quantity: 30,
    category: "womens",
    imageUrl: "https://www.bonsoir.co.in/cdn/shop/files/formal-wear-home_1024x1024.jpg?v=1613239078",
  },
  {
    _id: 4,
    name: "Half Sleeve Oversized Crop Printed T-Shirt Girls, Daily Wear",
    description:
      "Wear this as a party and casual wear both.",
    price: 9000,
    quantity: 30,
    category: "womens",
    imageUrl: "https://5.imimg.com/data5/SELLER/Default/2023/4/301339062/AP/TY/WN/7175905/oversized-crop-t-shirt-girls-1000x1000.jpg",
  },
];

// Usage of ProductsGrid component with ProductsData
const App = () => {
  return <ProductsGrid products={ProductsData} />;
};

export default App;

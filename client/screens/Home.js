import React, { useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Layout from "../components/Layout/Layout";
import Categories from "../components/category/Categories";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";
import Header from "../components/Layout/Header";
import { useSelector, useDispatch } from "react-redux";
import { getUserData, fetchProducts } from "../redux/features/auth/userActions";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch both actions when the component mounts
    dispatch(getUserData());
    // dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Layout>
      <ScrollView>
      {/* <View style={styles.container}>
        <View style={styles.iconContainer}>
          <FontAwesome name="user" style={styles.icon} />
        </View>
        <Text style={styles.welcomeText}>Welcome to Samyak Mart</Text>
      </View> */}
      <Header />
      <Categories />
      <Banner />
      <Products />
      </ScrollView>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    height: 60, // Adjusted height to accommodate the icon and text
    backgroundColor: "rgb(246, 222, 246)",
    paddingTop: 10,
  },
  iconContainer: {
    width:30, // Increased width to ensure circular shape
    height: 30, // Equal height to width for a circular shape
    borderRadius: 20, // Half of width and height to create a circle
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  icon: {
    color: "#000000",
    fontSize: 25,
  },
  welcomeText: {
    paddingLeft: 12,
    fontSize: 18,
    
  },
});

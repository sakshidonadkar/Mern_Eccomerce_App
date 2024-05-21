import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Layout from "../../components/Layout/Layout";

const Notifications = () => {
  return (
    <Layout>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          
      
        }}
      >
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfeWOw3Tz48cOLZcUFLmZWKiaLNvqlIQ7CXs-HVVAD9EQ0FETajr234V0KiX6ve87kgeQ&usqp=CAU' }} // Replace with your image URL or local file path
          style={styles.image}
        />

        <Text style={{fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 10,
          color: '#555555',}}>Oops ! You dont have any notification yet </Text>
      </View>
    </Layout>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 5,
  },
  activeTabButton: {
    backgroundColor: '#E5D1E4',
  },
  tabText: {
    color: '#555555',
  },
  activeTabText: {
    color: '#A357D1',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  noNotificationsText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#555555',
  },
  subText: {
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#A357D1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});


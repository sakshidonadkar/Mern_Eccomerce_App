import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import InputBox from "../../components/Form/InputBox";
// import LinearGradient from 'react-native-linear-gradient';

//redux hooks
import { login } from "../../redux/features/auth/userActions";
import { useDispatch } from "react-redux";
import { useReduxStateHook } from "../../hooks/customHook";

// Import the local image
const loginImage = require("../../assets/SamyakMart.png");

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // hooks
  const dispatch = useDispatch();
  // global state

  const loading = useReduxStateHook(navigation, "home");

  // login function
  const handleLogin = () => {
    if (!email || !password) {
      return alert("Please add email or password");
    }
    dispatch(login(email, password));
  };

  return (
    // <LinearGradient
    //   colors={['#fde1ff', '#e1ffea22']}
    //   style={styles.container}
    // >
    <View style={styles.container}>
      <Image source={loginImage} style={styles.image} />
      {loading && <Text>Loading ...</Text>}
      <InputBox
        placeholder={"Enter Your Email"}
        value={email}
        setValue={setEmail}
        autoComplete={"email"}
      />
      <InputBox
        value={password}
        setValue={setPassword}
        placeholder={"Enter Your Password"}
        secureTextEntry={true}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginBtnText}>Login</Text>
        </TouchableOpacity>
        <Text>
          Not a user yet? Please{"  "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("register")}
          >
            Register!
          </Text>
        </Text>
      </View>
    </View>
    // </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "rgb(246, 222, 246)",
    
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
    background:"transparent"
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    backgroundColor: "#000000",
    width: "80%",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
    marginVertical: 20,
  },
  loginBtnText: {
    color: "#ffffff",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 18,
  },
  link: {
    color: "red",
  },
});

export default Login;

import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../Shared/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  return (
    <View>
      <Image
        style={styles.loginImg}
        source={require("../../assets/images/login.png")}
      />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to Padha Do!</Text>
        <Text style={styles.taglineText}>Learn, Grow, Repeat</Text>
        <Text style={{ textAlign: "center", marginTop:  70, fontSize: 20 }}>
          Login/Signup
        </Text>
        <View style={styles.button}>
          <Ionicons name="logo-google" size={24} />
          <Text style={{ fontSize:19 }}>Sign in with Google</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImg: {
    height: 300,
    width: 380,
  },
  container: {
    paddingTop: 20,
    marginTop: -25,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  welcomeText: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 1,
  },
  taglineText: {
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    margin: 30,
    borderRadius: 10,
    gap: 10, 
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
  },
});

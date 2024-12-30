import { Link, router } from "expo-router";
import React, { useState } from "react";
import {Image, StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView, View, TextInput } from "react-native";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleSignin = () => {
    setErrors({ username: "", password: "" });

    let isValid = true;
    if (!username) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: "Username is required",
      }));
      isValid = false;
    }

    if (!password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
      isValid = false;
    } else if (password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 6 characters",
      }));
      isValid = false;
    }

    if (isValid) {
      router.push(`/home?username=${username}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        <>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Image style={styles.logo}
              source={require("../../assets/images/logo.jpg")}
            />

            <Text style={styles.textMain}>
              HealthSync
            </Text>
            <Text style={styles.textSec}>
              Empowering Wellness, Simplified.
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter UserName"
              style={styles.input}
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
            {errors.username ? (
              <Text style={styles.errorText}>{errors.username}</Text>
            ) : null}
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Password"
              style={styles.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
            />
            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
          </View>

          <View style={{marginHorizontal: 50}}>
            <TouchableOpacity style={styles.button} onPress={handleSignin}>
              <Text style={styles.buttonText}>SignIn</Text>
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center', marginTop: 5}}>
            <Text style={styles.textBottom}>
              Don't You Have an Account?{" "}
              <Link href={"/signup"}>
                <Text style={styles.textBottomClick}>
                  Create Account
                </Text>
              </Link>
            </Text>
          </View>
          </>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 20,
  },
  scrollContent: {
    padding: 16,
  },
  inputContainer: {
    width: "100%", 
    fontFamily: "SpaceMono",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 45,
    borderWidth: 2,
    borderRadius: 40,
    paddingHorizontal: 10,
    width: "100%",
    marginTop: 30,
  },
  button: {
    marginTop: 25,
    backgroundColor: "#0A1172",
    paddingHorizontal: 30,
    borderRadius: 40,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  logo: {
    height: 100,
    width: 100,
    margin:20,
    borderRadius: 20,
  },
  textMain:{
    fontSize: 30,
    marginBottom: 5,
    fontWeight: "bold",
  },
  textSec:{
    fontSize: 20,
  },
  textBottom:{
    fontSize: 14,
    margin: 5,
  },
  textBottomClick:{
    fontSize: 14,
    color: "#0A1172",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});

export default Signin;

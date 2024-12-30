import { Link, router } from "expo-router";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  ImageBackground,
} from "react-native";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/images/bg.jpg")}  
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo.jpg")}
        />
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={styles.textMain}>HealthSync</Text>
          <Text style={styles.textTagLine}>Empowering Wellness, Simplified.</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/signup")}
        >
          <Text style={styles.buttonText}>Let's Start!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    height: 250,
    width: 250,
    marginTop: -20,
    marginBottom: 20,
    borderRadius: 20,
  },
  textMain: {
    fontSize: 40,
    color: "#2186Ff",
    fontWeight: "bold",
  },
  textTagLine: {
    fontSize: 20,
    margin: 5,
    color: "#2196F3",
    fontWeight: "500",
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
});

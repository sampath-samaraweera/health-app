import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList,Image, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { useCustomContext } from '@/contexts/Context';
import { router } from 'expo-router';

const Profile = () => {

  const {username} = useCustomContext();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo.jpg")}
        />

        <View style={{minWidth: 200, maxWidth: 250}}>
          <Text style={styles.textMain}>Profile</Text>
          <Text style={styles.textSec}>Name - {username}</Text>
        </View>
      </View>
        <View style={{marginHorizontal: 50}}>
          <TouchableOpacity style={styles.button} onPress={() => router.push("/signup")}>
            <Text style={styles.buttonText}>LogOut</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  header: {
    backgroundColor: '#94dfff',
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 60,
    width: 60,
    margin:20,
    borderRadius: 10,
  },
  textMain:{
    fontSize: 30,
    marginBottom: 5,
    fontWeight: "bold",
  },
  textSec:{
    fontSize: 20,
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

export default Profile;

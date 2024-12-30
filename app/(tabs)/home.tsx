import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList,Image, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import Card from '../../components/Card'; // Import the Card component
import { useRoute } from '@react-navigation/native';
import { useCustomContext } from '@/contexts/Context';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const Home = () => {
  type RouteParams = {
    username?: string;
  };

  const route = useRoute();
  const { username } = route.params as RouteParams;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const {count, reset, setUsername} = useCustomContext();

  useEffect(() => {
    if (username) {
      setUsername(username);
    }
  }, [username, setUsername]);
  
  const localImages = [
    require('../../assets/images/drugs/01.jpeg'),
    require('../../assets/images/drugs/02.jpg'),
    require('../../assets/images/drugs/03.jpg'),
    require('../../assets/images/drugs/04.jpg'),
    require('../../assets/images/drugs/05.jpg'),
    require('../../assets/images/drugs/06.jpg'),
    require('../../assets/images/drugs/07.jpeg'),
  ];
  
  useEffect(() => {
    fetch('https://api.fda.gov/drug/event.json?limit=7')
      .then((response) => response.json())
      .then((json) => {
        const dataWithImages = json.results.map((item, index) => ({
          ...item,
          image: localImages[index % localImages.length], // Assign images cyclically
        }));
        setData(dataWithImages);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo.jpg")}
        />

        <View style={{minWidth: 200, maxWidth: 250}}>
          <Text style={styles.textMain}>Hi, {username || "Guest"}</Text>
          <Text style={styles.textSec}>Welcome to HealthSync</Text>
        </View>
      </View>
      <Text style={styles.textDrugs}>Drugs List</Text>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <Card item={item} />} 
        keyExtractor={(item, index) => index.toString()}
      />
      {count == 0 ? (null) :
        <TouchableOpacity 
          onPress={reset}
          style={{ position: 'absolute', bottom: 70, right: 10, backgroundColor: '#0A1172', padding: 5, borderRadius: 10,}}
        >
          <MaterialCommunityIcons name="restore" size={24} color="white" />
        </TouchableOpacity>
      }
      <View 
        style={{ position: 'absolute', bottom: 10, right: 10, backgroundColor: '#0A1172', padding: 5, borderRadius: 10, paddingHorizontal: 20}}
      >
        <Text style={styles.textFloating}>
          {count}
        </Text>
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
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  textDrugs:{
    fontSize: 26,
    margin: 15,
    marginLeft: 10,
    color: "#0A1172",
    fontWeight: "bold",
  },
  textFloating:{
    fontSize: 30,
    marginBottom: 5,
    fontWeight: "bold",
    color: '#ffffff',
  },
});

export default Home;

import { useCustomContext } from '@/contexts/Context';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface CardProps {
  item: any;
}

const Card: React.FC<CardProps> = ({ item }) => {
  const placeholderImage = require("../assets/images/placeholder.jpg");

  const {increment} = useCustomContext();

  return (
    <View style={styles.card}>
      <Image
        source={item.image || placeholderImage}
        style={styles.image}
      />
      <Text style={styles.title}>{item.patient.drug[0].medicinalproduct}</Text>
      <Text style={styles.description}>
        Reaction: {item.patient.reaction[0].reactionmeddrapt}
      </Text>
      <Text style={styles.status}>Outcome: {item.serious === 1 ? 'Serious' : 'Non-Serious'}</Text>
      <TouchableOpacity 
        style={{flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 10, backgroundColor: '#0A1172', padding: 5, borderRadius: 10, paddingHorizontal: 20}}  
        onPress={increment}
      >
        <FontAwesome name="plus" size={15} color={"white"}/>
        <Text style={styles.buttonText}>
          Add to list
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#d5d5d5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 140,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0A1172',
    marginBottom: 5,
  },
  description: {
    fontSize: 15,
    color: '#2186Ff',
    marginVertical: 2,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: '#ffffff',
    marginVertical: 2,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  status: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FF5722',
  },
});

export default Card;

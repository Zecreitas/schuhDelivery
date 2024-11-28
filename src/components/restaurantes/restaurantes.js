import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Restaurantes = () => {
  const navigation = useNavigation();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('https://apifakedelivery.vercel.app/restaurants')
      .then(response => {
        setRestaurants(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar restaurantes:', error);
      });
  }, []);

  const handleRestaurantPress = (restaurantId) => {
    console.log('ID do restaurante clicado:', restaurantId); 
    navigation.navigate('Restaurante', { restaurantId });
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.restaurantCard}
        onPress={() => handleRestaurantPress(item.id)}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.rating}>Avaliação: {item.rating}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </TouchableOpacity>
    );
  };
  

  return (
    <View style={styles.container}>
        <View style={styles.nav}>
        <TouchableOpacity style={styles.user} onPress={() => navigation.navigate('User')}>
          <MaterialCommunityIcons name="account-circle" color="white" size={44} />
          <Text style={styles.userText}>Usuário</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
      <Text style={styles.sectionTitle}>Restaurantes</Text>
        <FlatList
          data={restaurants}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
        />
      </ScrollView>
    </View>
  );
};

export default Restaurantes;
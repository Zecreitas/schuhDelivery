import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Restaurante = () => {
  const [restaurante, setRestaurante] = useState(null);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const { restaurantId } = route.params;

  const navigation = useNavigation();

  useEffect(() => {
    const fetchRestauranteDetails = async () => {
      try {
        const response = await axios.get(`https://apifakedelivery.vercel.app/restaurants/${restaurantId}`);
        if (response.data) {
          setRestaurante(response.data);
        } else {
          Alert.alert('Erro', 'Restaurante não encontrado.');
        }
      } catch (error) {
        console.error('Erro ao carregar detalhes do restaurante:', error);
        Alert.alert('Erro', 'Não foi possível carregar os detalhes do restaurante.');
      } finally {
        setLoading(false);
      }
    };

    fetchRestauranteDetails();
  }, [restaurantId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#06C8F2" />;
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={40} color="black" marginLeft={-25}/>
      </TouchableOpacity>
      {restaurante && (
        <View>
          <Image source={{ uri: restaurante.image }} style={styles.image} />
          <Text style={styles.title}>{restaurante.name}</Text>
          <Text style={styles.description}>{restaurante.description}</Text>
          <Text style={styles.detailsText}>Avaliação: {restaurante.rating} ⭐</Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => navigation.navigate('Lanches', { restaurantId })}
          >
            <Text style={styles.addButtonText}>Cardápio</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

export default Restaurante; 
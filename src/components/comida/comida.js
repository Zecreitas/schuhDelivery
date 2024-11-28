import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './style'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Comida = () => {
  const [comida, setComida] = useState(null);
  const [restaurante, setRestaurante] = useState(null);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const { comidaId } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    const fetchComidaDetails = async () => {
      try {
        const comidaResponse = await axios.get(`https://apifakedelivery.vercel.app/foods/${comidaId}`);
        setComida(comidaResponse.data);

        const restauranteResponse = await axios.get(
          `https://apifakedelivery.vercel.app/restaurants/${comidaResponse.data.restaurantId}`
        );
        setRestaurante(restauranteResponse.data);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
        Alert.alert('Erro', 'Não foi possível carregar os detalhes.');
      } finally {
        setLoading(false);
      }
    };

    fetchComidaDetails();
  }, [comidaId]);

  const adicionarAoCarrinho = async () => {
    try {
      const carrinhoAtual = await AsyncStorage.getItem('carrinho');
      const carrinho = carrinhoAtual ? JSON.parse(carrinhoAtual) : [];
      carrinho.push(comida);
      await AsyncStorage.setItem('carrinho', JSON.stringify(carrinho));
      Alert.alert('Sucesso', 'Comida adicionada ao carrinho!');
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
      Alert.alert('Erro', 'Não foi possível adicionar ao carrinho.');
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#06C8F2" />;
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={40} color="black" marginLeft={-25} />
      </TouchableOpacity>
      {comida && (
        <View>
          <Image source={{ uri: comida.image }} style={styles.image} />
          <Text style={styles.title}>{comida.name}</Text>
          <Text style={styles.price}>R$ {comida.price}</Text>
          <Text style={styles.description}>{comida.description}</Text>
          {restaurante && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Restaurante', { restaurantId: comida.restaurantId })
              }
            >
              <Text style={styles.restaurantName}>{restaurante.name}</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.detailsText}>Tempo de entrega: {comida.time}</Text>
          <Text style={styles.detailsText}>Taxa de entrega: R$ {comida.delivery}</Text>
          <Text style={styles.detailsText}>Avaliação: {comida.rating} ⭐</Text>
          <TouchableOpacity style={styles.addButton} onPress={adicionarAoCarrinho}>
            <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

export default Comida;
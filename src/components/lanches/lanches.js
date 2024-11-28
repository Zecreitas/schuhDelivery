import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, FlatList, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useRoute, useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';

const Lanches = () => {
  const [lanches, setLanches] = useState([]);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const { restaurantId } = route.params;

  const navigation = useNavigation();

  useEffect(() => {
    const fetchLanches = async () => {
      try {
        const response = await axios.get('https://apifakedelivery.vercel.app/foods');
        if (response.data) {
          const lanchesFiltrados = response.data.filter((item) => item.restaurantId === restaurantId);
          setLanches(lanchesFiltrados);
        } else {
          Alert.alert('Erro', 'Nenhum lanche encontrado.');
        }
      } catch (error) {
        console.error('Erro ao carregar os lanches:', error);
        Alert.alert('Erro', 'Não foi possível carregar os lanches.');
      } finally {
        setLoading(false);
      }
    };

    fetchLanches();
  }, [restaurantId]);

  const adicionarAoCarrinho = async (item) => {
    try {
      const carrinhoAtual = await AsyncStorage.getItem('carrinho');
      const carrinhoArray = carrinhoAtual ? JSON.parse(carrinhoAtual) : [];

      carrinhoArray.push(item);

      await AsyncStorage.setItem('carrinho', JSON.stringify(carrinhoArray));

      Alert.alert('Adicionado', `${item.name} foi adicionado ao carrinho!`);
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
      Alert.alert('Erro', 'Não foi possível adicionar ao carrinho.');
    }
  };

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardPrice}>R$ {item.price.toFixed(2)}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
      <Text style={styles.cardDetails}>Tempo de entrega: {item.time}</Text>
      <Text style={styles.cardDetails}>Taxa de entrega: R$ {item.delivery}</Text>
      <Text style={styles.cardDetails}>Avaliação: {item.rating} ⭐</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => adicionarAoCarrinho(item)}>
    <Text style={styles.addButtonText}>Adicionar</Text>
    <MaterialCommunityIcons name="cart-plus" size={20} color="#FFF" style={styles.iconStyle} />
    </TouchableOpacity>


    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#06C8F2" />;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={40} color="black" marginLeft={-20} />
      </TouchableOpacity>
      <FlatList
        data={lanches}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum lanche disponível.</Text>}
      />
    </View>
  );
};

export default Lanches;

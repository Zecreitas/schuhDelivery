import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import styles from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Carrinho = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [saldo, setSaldo] = useState(0); 
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const carregarCarrinho = async () => {
        try {
          const carrinhoSalvo = await AsyncStorage.getItem('carrinho');
          setCarrinho(carrinhoSalvo ? JSON.parse(carrinhoSalvo) : []);
        } catch (error) {
          console.error('Erro ao carregar o carrinho:', error);
          Alert.alert('Erro', 'Não foi possível carregar o carrinho.');
        }
      };

      carregarCarrinho();
    }, [])
  );

  const carregarSaldo = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      if (userId) {
        const response = await fetch(`https://apifakedelivery.vercel.app/users/${userId}`);
        const data = await response.json();
        setSaldo(parseFloat(data.saldo));
      }
    } catch (error) {
      console.error('Erro ao carregar o saldo:', error);
      Alert.alert('Erro', 'Não foi possível carregar o saldo.');
    }
  };

  useEffect(() => {
    carregarSaldo();
  }, []);

  useEffect(() => {
  }, [saldo]);

  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + item.price, 0);
  };

  const limparCarrinho = async () => {
    try {
      await AsyncStorage.removeItem('carrinho');
      setCarrinho([]);
      Alert.alert('Sucesso', 'Carrinho limpo com sucesso!');
    } catch (error) {
      console.error('Erro ao limpar o carrinho:', error);
      Alert.alert('Erro', 'Não foi possível limpar o carrinho.');
    }
  };

  const efetuarPedido = async () => {
    const total = calcularTotal();
    if (carrinho.length === 0) {
      Alert.alert('Aviso', 'O carrinho está vazio!');
      return;
    }

    if (saldo < total) {
      Alert.alert('Erro', 'Saldo insuficiente para efetuar o pedido.');
      return;
    }

    try {
      await AsyncStorage.removeItem('carrinho');
      setCarrinho([]);
      setSaldo(saldo - total);
      Alert.alert('Sucesso', 'Pedido efetuado com sucesso!');
    } catch (error) {
      console.error('Erro ao efetuar o pedido:', error);
      Alert.alert('Erro', 'Não foi possível efetuar o pedido.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity style={styles.user} onPress={() => navigation.navigate('User')}>
          <MaterialCommunityIcons name="account-circle" color="white" size={44} />
          <Text style={styles.userText}>Usuário</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Carrinho</Text>
      <FlatList
        data={carrinho}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
          </View>
        )}
      />
      <View style={styles.totalRow}>
        <Text style={styles.totalText}>Total: R$ {calcularTotal().toFixed(2)}</Text>
        <Text style={styles.saldoText}>Saldo: R$ {saldo.toFixed(2)}</Text>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.orderButton} onPress={efetuarPedido}>
          <Text style={styles.orderButtonText}>Efetuar Pedido</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.clearButton} onPress={limparCarrinho}>
          <Text style={styles.clearButtonText}>Limpar Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Carrinho;
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import styles from './style';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const User = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copiedMessage, setCopiedMessage] = useState('');
  const navigation = useNavigation();

  const carregarDadosUsuario = async () => {
    setLoading(true);
    try {
      const userId = await AsyncStorage.getItem('userId');
      console.log('ID do usuário:', userId);
      if (!userId) throw new Error('ID do usuário não encontrado.');

      const response = await axios.get(`https://apifakedelivery.vercel.app/users/${userId}`);
      if (response.status === 200) {
        setUserData(response.data);
      }
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      carregarDadosUsuario();
    }, [])
  );

  const handleLogout = async () => {
    try {
      await AsyncStorage.multiRemove([
        'id',
        'name',
        'saldo',
        "email",
        "senha"
      ]);
  
      setUserData(null);
  
      navigation.reset({
        index: 0,
        routes: [{ name: 'Logo' }],
      });      
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#06C8F2" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltarButton}>
        <MaterialCommunityIcons name="arrow-left" size={40} color="black" style={{ marginTop: 5, marginLeft: -30 }} />
      </TouchableOpacity>
      <Text style={styles.title}>Conta</Text>
      {userData ? (
        <View style={styles.profileContainer}>
          <TouchableOpacity>
            <Text style={styles.label}>Nome</Text>
            <Text style={styles.value}>{userData.name}</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{userData.email}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Saldo')}>
            <Text style={styles.label}>Saldo</Text>
            <Text style={styles.value}>R$ {userData.saldo}</Text>
          </TouchableOpacity>

          {copiedMessage ? <Text style={styles.copiedMessage}>{copiedMessage}</Text> : null}
        </View>
      ) : (
        <Text style={styles.errorMessage}>Não foi possível carregar os dados do usuário.</Text>
      )}

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logout}>Sair</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default User;

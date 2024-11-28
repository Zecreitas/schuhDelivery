import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, Image, Alert, FlatList, ImageBackground, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './style';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Restaurantes from '../restaurantes/restaurantes';
import Carrinho from '../carrinho/carrinho';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#281511', height: 60 },
        tabBarActiveTintColor: '#CD2400',
        tabBarInactiveTintColor: 'white',
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { justifyContent: 'center', alignItems: 'center' },
      }}
    >
      <Tab.Screen
        name="Início"
        component={Inicio}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={35} marginLeft={-3} marginBottom={-6} />
          ),
        }}
      />
      <Tab.Screen
        name="Restaurantes"
        component={Restaurantes}
        options={{
          tabBarLabel: 'Restaurantes',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="store" color={color} size={35} marginLeft={-3} marginBottom={-6} />
          ),
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          tabBarLabel: 'Carrinho',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={35} marginLeft={-3} marginBottom={-6} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Inicio = () => {
  const [comidas, setComidas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchComidas = async () => {
      try {
        const response = await axios.get('https://apifakedelivery.vercel.app/foods');
        setComidas(response.data);
      } catch (error) {
        console.error('Erro ao carregar comidas:', error);
        Alert.alert('Erro', 'Não foi possível carregar as comidas.');
      } finally {
        setLoading(false);
      }
    };

    fetchComidas();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#06C8F2" />;
  }

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardPrice}>R$ {item.price}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('Comida', { comidaId: item.id })}
        >
          <Text style={styles.addButtonText}>Ver Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity style={styles.user} onPress={() => navigation.navigate('User')}>
          <MaterialCommunityIcons name="account-circle" color="white" size={44} />
          <Text style={styles.userText}>Usuário</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        <Text style={styles.sectionTitle}>Menu de Comidas</Text>
        <FlatList
            data={comidas}
            renderItem={renderCard}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}
        />

      </ScrollView>
    </View>
  );
};

export default MyTabs;
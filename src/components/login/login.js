import React, { useState } from 'react';
import { Image, View, TouchableOpacity, Text, TextInput } from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [senhaVisible, setSenhaVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const toggleSenha = () => {
    setSenhaVisible(!senhaVisible);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.get('https://apifakedelivery.vercel.app/users');
      const users = response.data;

      const user = users.find(u => u.email === email && u.senha === password);

      if (user) {

        await AsyncStorage.setItem('userId', user.id);
        await AsyncStorage.setItem('userName', user.name);
        await AsyncStorage.setItem('saldo', user.saldo);

        navigation.navigate('Home');
      } else {
        setErrorMessage('Email ou senha inválidos');
      }
    } catch (error) {
      setErrorMessage('Erro ao conectar à API. Tente novamente.');
      console.error('Erro:', error.message);
    }
  };

  return (
    <View>
      <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={40} color="black" />
      </TouchableOpacity>
      <Image style={styles.image} source={require('../../../assets/images/logo.png')} />
      <Text style={styles.texto}>Email</Text>
      <View style={styles.formInput}>
        <TextInput
          style={styles.inputText}
          placeholder="Digite seu Email Aqui..."
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={'white'}
        />
      </View>
      <Text style={styles.texto}>Senha</Text>
      <View style={styles.formInput}>
        <TextInput
          style={styles.inputText}
          placeholder="Digite sua Senha Aqui..."
          secureTextEntry={!senhaVisible}
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={'white'}
        />
        <TouchableOpacity onPress={toggleSenha} style={styles.toggle}>
          <MaterialCommunityIcons
            name={senhaVisible ? 'eye' : 'eye-off'}
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.login} onPress={handleLogin}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <View>
      <TouchableOpacity style={styles.cad}
      onPress={() => navigation.navigate('Cad')} 
      >
          <Text style={styles.tcad}>Ainda Não se Cadastrou? Então <Text style={styles.textoCad}>Cadastre-se</Text></Text>
        </TouchableOpacity>
    </View>

    </View>
  );
};

export default Form;
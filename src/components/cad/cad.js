import React, {useState} from 'react';
import {Image, View, TouchableOpacity, Text, TextInput} from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Cad = () => {
    const [senhaVisible, setSenhaVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const [errorMessage, setErrorMessage] = useState('');

    const toggleSenha = () => {
      setSenhaVisible(!senhaVisible);
    };
    

    return (
        <View>
          <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={40} color="black" />
          </TouchableOpacity>
            <View>
            <Image style={styles.image}
              source={require('../../../assets/images/logo.png')} />
            <Text style={styles.texto}>Nome</Text>
            <View style={styles.formInput}>
            <TextInput
                    style={styles.inputText}
                    placeholder="Digite seu Nome Aqui..."
                    value={name}
                    onChangeText={setName}
                    placeholderTextColor={'white'}
            />
            </View>
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
            <Icon
              name={senhaVisible ? 'visibility' : 'visibility-off'}
              size={24}
              color="#fff"
            />
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.cad}
            >
              <Text style={styles.text}>Cadastrar-se</Text>
            </TouchableOpacity>
    
    
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
        </View>
        </View>
      );
    };
    

export default Cad;
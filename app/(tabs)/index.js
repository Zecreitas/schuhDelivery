import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from '../../src/components/logo/logo';
import Login from '../../src/components/login/login';
import Cad from '../../src/components/cad/cad';
import Home from '../../src/components/home/home';
import User from '../../src/components/user/user';
import Comida from '../../src/components/comida/comida';
import Restaurantes from '../../src/components/restaurantes/restaurantes';
import Restaurante from '../../src/components/resta/restaurante';
import Carrinho from '../../src/components/carrinho/carrinho';
import Lanches from '../../src/components/lanches/lanches';
import Saldo from '../../src/components/saldo/saldo';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Logo" component={Logo} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cad" component={Cad} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Comida" component={Comida} />
        <Stack.Screen name="Restaurantes" component={Restaurantes} />
        <Stack.Screen name="Restaurante" component={Restaurante} />
        <Stack.Screen name="Lanches" component={Lanches} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
        <Stack.Screen name="Saldo" component={Saldo} />
      </Stack.Navigator>
  );
};

export default App;

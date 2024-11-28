import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Saldo = () => {
  const [valorAdicionar, setValorAdicionar] = useState('');
  const [pagamentoEscolhido, setPagamentoEscolhido] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.voltarButton}>
        <MaterialCommunityIcons name="arrow-left" size={40} color="black" style={{ marginTop: 5 }} />
      </TouchableOpacity>

      <Text style={styles.title}>Adicionar Saldo</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Valor a ser adicionado:</Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o valor"
          keyboardType="numeric"
          value={valorAdicionar}
          onChangeText={setValorAdicionar}
        />

        <Text style={styles.label}>Escolha a forma de pagamento:</Text>

        <TouchableOpacity
          style={[styles.paymentButton, pagamentoEscolhido === 'cartao' && styles.selectedPayment]}
          onPress={() => setPagamentoEscolhido('cartao')}
        >
          <MaterialCommunityIcons name="credit-card" size={20} color="white" />
          <Text style={styles.paymentButtonText}>Cartão de Crédito</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.paymentButton, pagamentoEscolhido === 'pix' && styles.selectedPayment]}
          onPress={() => setPagamentoEscolhido('pix')}
        >
          <MaterialCommunityIcons name="barcode-scan" size={20} color="white" />
          <Text style={styles.paymentButtonText}>Pix</Text>
        </TouchableOpacity>

        {pagamentoEscolhido && (
          <View style={styles.confirmationContainer}>
            <Text style={styles.label}>Confirme a forma de pagamento: {pagamentoEscolhido}</Text>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Adicionar Saldo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Saldo;
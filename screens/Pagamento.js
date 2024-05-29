import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PaymentScreen = ({ navigation, route }) => {
  const { plan } = route.params;
  const [cardNumber, setCardNumber] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [cardholderEmail, setCardholderEmail] = useState('');

  const handlePayment = async () => {
    try {
    } catch (error) {
      console.error(error);
      alert(`Erro ao processar o pagamento: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button
          title="<"
          onPress={() => navigation.navigate('Planos')}
          color="#000000"
        />
      </View>
      <Text>Pagamento {plan === 'mensal' ? 'Mensal' : 'Anual'}</Text>
      <TextInput
        placeholder="Número do Cartão"
        value={cardNumber}
        onChangeText={setCardNumber}
        style={styles.input}
      />
      <TextInput
        placeholder="Mês de Expiração (MM)"
        value={expirationMonth}
        onChangeText={setExpirationMonth}
        style={styles.input}
      />
      <TextInput
        placeholder="Ano de Expiração (YYYY)"
        value={expirationYear}
        onChangeText={setExpirationYear}
        style={styles.input}
      />
      <TextInput
        placeholder="Código de Segurança"
        value={securityCode}
        onChangeText={setSecurityCode}
        style={styles.input}
      />
      <TextInput
        placeholder="Nome do Titular"
        value={cardholderName}
        onChangeText={setCardholderName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email do Titular"
        value={cardholderEmail}
        onChangeText={setCardholderEmail}
        style={styles.input}
      />
      <Button title="Pagar" onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default PaymentScreen;
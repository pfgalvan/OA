import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PlanScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha seu plano:</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Free"
          onPress={() => {
            alert('Você escolheu o plano Free!');
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Premium Mensal"
          onPress={() => navigation.navigate('Pagamento', { plan: 'mensal' })}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Premium Anual"
          onPress={() => navigation.navigate('Pagamento', { plan: 'anual' })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});

export default PlanScreen;
import React from 'react';
import { StyleSheet, View, Button, KeyboardAvoidingView } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';

const Inscription = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={styles.InscriptionContainer}
      behavior='padding'
      enabled
    >
      <Card style={styles.card}>
        <Input style={styles.input} placeholder='Name' />

        <Input style={styles.input} placeholder='Adresse e-mail' />

        <Input
          style={styles.input}
          secureTextEntry={true}
          placeholder='password'
        />

        <Input
          style={styles.input}
          secureTextEntry={true}
          placeholder='ReWrite'
        />
        <View style={styles.buttContainer}>
          <View style={styles.button}>
            <Button title='Inscription' />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' />
          </View>
          <View style={styles.button}>
            <Button
              title='Go Home'
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
          </View>
        </View>
      </Card>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  InscriptionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    width: '100%'
  },
  input: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%'
  },
  card: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%'
  },
  buttContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20
  },
  button: {
    width: '40%'
  }
});
export default Inscription;

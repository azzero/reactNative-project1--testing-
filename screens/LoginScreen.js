import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  View,
  Button
} from 'react-native';
import Input from '../components/Input';
import Card from '../components/Card';
const LoginScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
      <Card style={styles.card}>
        <Text>Welcome to ... App !!</Text>

        <Input style={styles.input} placeholder='email' />
        <Input
          style={styles.input}
          placeholder='password'
          secureTextEntry={true}
        />
        <View style={styles.buttonsContainer}>
          <View>
            <Button style={styles.button} title='Login' />
          </View>
          <View style={styles.button}>
            <Button
              title='Inscription'
              onPress={() => navigation.navigate('Inscription')}
            />
          </View>
          <Text></Text>
        </View>
      </Card>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: 5
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  card: {
    width: '80%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: '40%'
  }
});
export default LoginScreen;

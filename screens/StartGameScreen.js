import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Alert,
  Slider,
  StatusBar
} from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors';
import Input from '../components/Input';
import Inscription from './InscriptionScreen';
const StartGameScreen = props => {
  const [GameNumber, setNumber] = useState('');
  const [sliderValue, setSliderValue] = useState(50);
  const TextInputHandler = textInput => {
    if (isNaN(textInput)) {
      Alert.alert(' warning !! ', ' enter a number ', [{ text: 'cancel' }]);
    }
    setNumber(textInput.replace(/[^0-9]/g, ''));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <View style={styles.title}>
          <Text>Start the Game </Text>
        </View>
        <Card style={styles.InputContainer}>
          <Input
            style={styles.input}
            keyboardType='numeric'
            maxLength={2}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={TextInputHandler}
            value={GameNumber}
          />

          <View style={styles.screenButton}>
            <View style={styles.buttonStyle}>
              <Button title='Reset' onPress={() => {}} color={colors.accent} />
            </View>
            <View style={styles.buttonStyle}>
              <Button
                style={styles.buttonStyle}
                title='Confirm'
                onPress={() => {}}
                color={colors.primary}
              />
            </View>
          </View>
        </Card>
        <Card style={styles.InputContainer}>
          <Text>test some components</Text>
          <Text>Slider</Text>
          <Slider
            style={styles.slider}
            maximumValue={100}
            minimumValue={0}
            onValueChange={val => console.log(Math.floor(val))}
            value={sliderValue}
            disabled={false}
          />
          <Text> we hide and control status bar </Text>
          <View>
            <StatusBar
              hidden={true}
              animated={true}
              backgroundColor='blue'
              barStyle='light-content'
            />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 16
  },
  screenButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15
  },
  InputContainer: {
    alignItems: 'center',
    width: '100%',
    margin: 5
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  buttonStyle: {
    width: '40%'
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  slider: {
    width: '100%',
    marginVertical: 10
  }
});
export default StartGameScreen;

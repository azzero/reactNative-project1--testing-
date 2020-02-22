import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import constants from 'expo-constants';
import colors from '../constants/colors';
const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}> {props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: constants.statusBarHeight,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: 16,
    color: 'black'
  }
});
export default Header;

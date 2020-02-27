import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import InscriptionScreen from './screens/InscriptionScreen';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import FeedsScreen from './screens/FeedsScreen';
import SettingsScreen from './screens/SettingsScreen';
export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Feeds') {
              iconName = 'feed';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            }
            return (
              <SimpleLineIcons name={iconName} size={size} color={color} />
            );
          }
        })}
      >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Feeds' component={FeedsScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inscription'>
        <Stack.Screen name='Inscription' component={InscriptionScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Home' component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'
  }
});

// import Login from './components/Login';
// import CreateAccount from './components/CreateAccount';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, Button,View } from 'react-native';
//import { createStackNavigator } from '@react-navigation/stack';
import Chat from './components/Chat';
import Main from './components/Main';
import { createStackNavigator } from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation';
// Create the navigator
const Appnavigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});
const AppConatiner= createAppContainer(Appnavigator);
export default AppConatiner;

import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import FirstPage from './Charts1';
import SecondPage from './Charts2.js';

import { StyleSheet, Text, View, Button, Dimensions, ScrollView, TouchableOpacity, Animated, ActivityIndicator, FlatList } from 'react-native';
const TabScreen = createMaterialTopTabNavigator(
    {
        Spotify: { screen: FirstPage },
        Shazam: { screen: SecondPage },
    },
    {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#F8F8F8',
            style: {
                backgroundColor: 'black',
            },
            labelStyle: {
                textAlign: 'center',
            },
            indicatorStyle: {
                borderBottomColor: '#87B56A',
                borderBottomWidth: 2,
            },
        },
    }
);
const App = createStackNavigator({
    TabScreen: {
        screen: TabScreen,
        navigationOptions: {
                headerShown:false
                // headerStyle: {
                //   backgroundColor: 'green',
                // },
                // headerTintColor: 'white',
                // title: 'CHARTS',
              }
    },
});
const AppContainer = createAppContainer(App);
export default class ChartScreen extends React.Component {
    render() {
        return <AppContainer />;
    }

}
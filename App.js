import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import facebook from './screens/fb';
import instagram from './screens/insta';

export default class App extends React.Component{
  render(){
    return(
    <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
   fb: {screen : facebook },
  insta : {screen : instagram},
});

const AppContainer = createAppContainer(TabNavigator);

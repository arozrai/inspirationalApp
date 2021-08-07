import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import FirstScreen from './screens/FirstScreen'
import {AppDrawerNavigator2} from './components/AppDrawerNavigator2'
import Constants from 'expo-constants';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
    );
  }
}

const switchNavigator = createSwitchNavigator({
  FirstScreen:{screen:FirstScreen},
  Drawer:{screen:AppDrawerNavigator2}
})

const AppContainer=createAppContainer(switchNavigator)

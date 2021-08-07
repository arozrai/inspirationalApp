import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements'
import { createDrawerNavigator } from '@react-navigation/drawer';
import FindingInspiration from '../screens/FindingInspiration';
import InspirationalQuotes from '../screens/InspirationalQuotes';
import InspirationalImages from '../screens/InspirationalImages';
import InspirationalQuotesAndImages from '../screens/InspirationalQuotes&Images';

const Drawer = createDrawerNavigator();

export default class MyDrawer extends React.Component {
  render(){
    return (
    <Drawer.Navigator>
      <Drawer.Screen name="Finding Inspiration" component={FindingInspiration} />
      <Drawer.Screen name="Inspirational Quotes" component={InspirationalQuotes} />
      <Drawer.Screen name="Inspirational Images" component={InspirationalImages} />
      <Drawer.Screen name="Inspirational Quotes & Images" component={InspirationalQuotesAndImages} />
    </Drawer.Navigator>
  );
  }
}
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon } from 'react-native-elements'
import { createDrawerNavigator } from 'react-navigation-drawer';
import FindingInspiration from '../screens/FindingInspiration';
import InspirationalQuotes from '../screens/InspirationalQuotes';
import InspirationalImages from '../screens/InspirationalImages';
import InspirationalQuotesAndImages from '../screens/InspirationalQuotes&Images';
import SideBarMenu from './SideBarMenu';

export const AppDrawerNavigator2 = createDrawerNavigator({
    Home: {
      screen: FindingInspiration,
      navigationOptions: {
        drawerIcon:<Icon name="home" type="fontawesome" />
      }
    },
    Quotes: { 
      screen: InspirationalQuotes,
      navigationOptions: {
        drawerIcon:<Icon name="lightbulb" type="font-awesome" />
      }
    },
    Images:{
      screen: InspirationalImages,
      navigationOptions: {
        drawerIcon:<Icon name="lightbulb" type="font-awesome" />
      }
    },
    QuotesAndImages :{ 
      screen: InspirationalQuotesAndImages,
      navigationOptions: {
        drawerIcon:<Icon name="lightbulb" type="font-awesome" />
      }
    },
  },
  {
    contentComponent: SideBarMenu,
  },
  {
    initialRouteName: 'Home',
  }
);
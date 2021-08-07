import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer'

export default class SideBarMenu extends React.Component{
  render(){
    return(
      <View style={{flex:1}}>
        <View style={{flex:0.8}}>
          <DrawerItems {...this.props} />
        </View>
      </View>
    )
  }
}
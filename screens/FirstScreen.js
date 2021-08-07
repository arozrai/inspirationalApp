import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import FindingInspiration from './FindingInspiration';
import { RFValue } from 'react-native-responsive-fontsize';

export default class FirstScreen extends React.Component {
  render(){
    return (
      <View style={{flex:1,backgroundColor:'lightgreen'}}>
        <Text style={{fontSize:30, alignSelf: 'center',padding:20}}>
          Inspirational App
        </Text>
        <Image
          source={require('../assets/sunOnRocks.png')}
          style={{width:300,height:300,alignSelf:'center'}}
        />
        <TouchableOpacity
        onPress={()=>this.props.navigation.navigate('Home')}
        style={{alignSelf:'center',width: '75%', height: RFValue(50), marginTop: RFValue(20), justifyContent: 'center', alignItems: 'center', borderRadius: RFValue(3), backgroundColor: 'green', shadowColor: '#000', shadowRadius: 10.32, elevation: 16,padding:30}}
        >
          <Text>
            OPEN
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
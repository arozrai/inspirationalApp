import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default class FindingBugs extends React.Component {
  render(){
    return (
      <ScrollView style={{alignItems:'center', backgroundColor:'lightyellow'}}>
        <Image
          source={require('../assets/orangeTrees.png')}
          style={styles.image}
        />
        <Image
          source={require('../assets/bigValley.png')}
          style={styles.image}
        />
        <Image
          source={require('../assets/bizzareWorld.png')}
          style={styles.image}
        />
        <Image
          source={require('../assets/flowerField.png')}
          style={styles.image}
        />
        <Image
          source={require('../assets/nightTree.png')}
          style={styles.image}
        />
        <Image
          source={require('../assets/waterPiano.png')}
          style={styles.image}
        />
        <Image
          source={require('../assets/hugeValley.png')}
          style={styles.image}
        />
      </ScrollView>
    );
  }
}

const styles=StyleSheet.create({
  image:{
    width:200,
    height:200,
    margin:20
  },
})
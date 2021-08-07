import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
//<View style={{alignSelf:'center'}}>

export default class FindingBugs extends React.Component {
  render(){
    return (
      <ScrollView>
        <View style={{alignSelf:'center',backgroundColor:'lightpink'}}>
          <Image
            source={require('../assets/orangeTrees.png')}
            style={styles.image}
          />
          <Text style={styles.text}>
            "Mistakes are a fact of life. It is the response to those mistakes that counts"-Nikki Giovanni
          </Text>
          <Image
            source={require('../assets/bigValley.png')}
            style={styles.image}
          />
          <Text style={styles.text}>
            "Be the change that you wish to see in the world"-Mahatma Gandhi
          </Text>
          <Image
            source={require('../assets/bizzareWorld.png')}
            style={styles.image}
          />
          <Text style={styles.text}>
            "Yesterday's the past, tomorrow's the future, but today's a gift. That is why we call it the present"-Bil Keane
          </Text>
          <Image
            source={require('../assets/flowerField.png')}
            style={styles.image}
          />
          <Text style={styles.text}>
            "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success"-James Cameron
          </Text>
          <Image
            source={require('../assets/nightTree.png')}
            style={styles.image}
          />
          <Text style={styles.text}>
            "You are never too old to set another goal or dream a new dream"-C.W. Lewis
          </Text>
          <Image
            source={require('../assets/waterPiano.png')}
            style={styles.image}
          />
          <Text style={styles.text}>
            "If opportunity doesn't knock, build a door"-Milton Berle
          </Text>
          <Image
            source={require('../assets/flowerField.png')}
            style={styles.image}
          />
          <Text style={styles.text}>
            "We are all in the gutter, but some of us are looking at the stars"-Oscar Wilde
          </Text>
          <Image
            source={require('../assets/nightTree.png')}
            style={styles.image}
          />
          <Text style={styles.text}>
            "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind"-Dr. Seuss
          </Text>
          <Image
            source={require('../assets/waterPiano.png')}
            style={styles.image}
          />
          <Text style={styles.text}>
            "Accept no one’s definition of your life; define yourself"-Harvey Fierstein
          </Text>
          <Image
            source={require('../assets/hugeValley.png')}
            style={styles.image}
          />
          <Text style={styles.text}>
            "No one can make you feel inferior without your consent"-Eleanor Roosevelt
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles=StyleSheet.create({
  image:{
    width:200,
    height:200,
    marginLeft:60
  },
  text:{
    padding:10,
    fontWeight:'bold',
    fontSize:20,
    borderBottomWidth:2
  }
})
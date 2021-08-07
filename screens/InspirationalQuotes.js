import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';

export default class FindingBugs extends React.Component {
  render(){
    return (
      <ScrollView>
        <View style={{backgroundColor:'skyblue'}}>
          <Text style={styles.text}>
            "Mistakes are a fact of life. It is the response to those mistakes that counts"-Nikki Giovanni
          </Text>

          <Text style={styles.text}>
            "Be the change that you wish to see in the world"-Mahatma Gandhi
          </Text>

          <Text style={styles.text}>
            "Yesterday's the past, tomorrow's the future, but today's a gift. That is why we call it the present"-Bil Keane
          </Text>

          <Text style={styles.text}>
            "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success"-James Cameron
          </Text>

          <Text style={styles.text}>
            "You are never too old to set another goal or dream a new dream"-C.W. Lewis
          </Text>

          <Text style={styles.text}>
            "If oppotunity doesn't knock, build a door"-Milton Berle
          </Text>

          <Text style={styles.text}>
            "We are all in the gutter, but some of us are looking at the stars"-Oscar Wilde
          </Text>

          <Text style={styles.text}>
            "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind"-Dr. Seuss
          </Text>

          <Text style={styles.text}>
            "Accept no one’s definition of your life; define yourself"-Harvey Fierstein
          </Text>

          <Text style={styles.text}>
            "No one can make you feel inferior without your consent"-Eleanor Roosevelt
          </Text>

          <Text style={styles.text}>
            "One day your life will flash before your eyes. Make sure it’s worth watching"-Gerard Way
          </Text>

          <Text style={styles.text}>
            "It’s not about how hard you can hit; it’s about how hard you can get hit and keep moving forward"-Rocky Balboa, Rocky
          </Text>

          <Text style={styles.text}>
            "Never regret a day in your life. Good days give you happiness and bad days give you experience"-Unknown
          </Text>

          <Text style={styles.text}>
            "Everything that you are going through is preparing you for what you’ve asked for"-Unknown
          </Text>

          <Text style={styles.text}>
            "Believe you can and you’re halfway there"-T. Roosevelt
          </Text>

          <Text style={styles.text}>
            "Those who don’t believe in magic will never find it"-Roald Dahl
          </Text>

          <Text style={styles.text}>
            "The way get started is to quit talking and begin doing"-Walt Disney
          </Text>

          <Text style={styles.text}>
            "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty"-Winston Churchill
          </Text>

          <Text style={styles.text}>
            "Accept responsibility for your life. Know that it is you who will get you where you want to go, no one else"-Les Brown
          </Text>

          <Text style={styles.text}>
            "It will never matter what others think of you. It will ALWAYS matter what YOU think of you"-Fearless Soul
          </Text>

          <Text style={styles.text}>
            "You only live once, but if you do it right once is enough"-Mae West
          </Text>

          <Text style={styles.text}>
            "Challenges are what make life interesting and overcoming them is what makes life meaningful"-Joshua J. Marine
          </Text>

          <Text style={styles.text}>
            "There is no elevator to success — you have to take the stairs"—Anonymous
          </Text>

          <Text style={styles.text}>
            "People who are crazy enough to think they can change the world, are the ones who do"-Steve Jobs / Rob Siltanen
          </Text>

          <Text style={styles.text}>
            "We generate fears while we sit. We overcome them by action"–Dr. Henry Link
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles=StyleSheet.create({
  text:{
    padding:10,
    fontWeight:'bold',
    fontSize:20,
  }
})
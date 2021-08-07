import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default class FindingBugs extends React.Component {
  render(){
    return (
      <ScrollView style={{flex:1,backgroundColor:'darkblue'}}>
        <Text style={styles.title}>
          Finding Inspiration
        </Text>
        <Text style={styles.subtitle}>
          how to get inspired:
        </Text>
        <Text style={styles.text}>
          Change your environment (ex: go to a new place)-
          Learn something new (ex: new knowledge)-
          Make a vision board (ex: put images and words that match your life on it)-
          Get to nature (ex: spend some time with nature)-
          Visit local bookstore (ex: browse books for images and ideas)-
          Try a new creative media (ex: art, music and poetry)-
          Keep a notebook to put down ideas (ex: jot down in an A5 notebook)-
          Research the history of your craft (ex: the experts of the past)-
          Research what other people in your field are doing (ex: other activites)-
          Listen to new music (ex: jazz, pop and rock)-
          Try meditation-
          Follow ten people who inspire you on social media-
          Give yourself time (ex: a day to do what you do)-
          Read a inspiring blog post-
          Go beyond your comfort zone-
          Watch a great film-
          Read an autobiography of someone you admire-
          Look through Google Creativity Quotes-
          Journal your thoughts-
          Ask someone their greatest life questions-
          Watch an inspiring talk (ex: TedED)-
          Read one of the classics-
          Experiment without pressure (don't worry about deadlines or final out comes)-
          Ask creative friends about their projects-
          Start before inspiration take place (make a start so inspiration has a base)
        </Text>
      </ScrollView>
    );
  }
}

const styles=StyleSheet.create({
  title:{
    alignSelf:'center',
    fontSize:30,
    color:'blue',
    padding:20,
    fontWeight:'bold',
    backgroundColor:'skyblue',
    textDecorationLine:'underline'
  },
  subtitle:{
    alignSelf:'center',
    fontSize:20,
    padding:10,
    fontWeight:'bold',
    backgroundColor:'black',
    color:'white'
  },
  text:{
    padding:10,
    fontWeight:'bold',
    color:'white'
  }
})
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import styles from './App.styles';
import OptionContainer from './src/components/OptionContainer';
// import imageMultipleChoiceQuestions from './assets/data/imageMultipleChoiceQuestions';
import question from './assets/data/oneQuestionWithOption';

const App = () => (
  <SafeAreaView style={styles.root}>
    <Text style={styles.title}>{question.question}</Text>
    <View style={styles.optionsContainer}>
      {question.options.map(option => (
        <OptionContainer
          key={option.key}
          image={option.image}
          text={option.text}
        />
      ))}
    </View>
    <StatusBar style='auto' />
  </SafeAreaView>
);

export default App;

{
}

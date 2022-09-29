import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView, Alert } from 'react-native';
import styles from './App.styles';
import OptionContainer from './src/components/OptionContainer';
import questions from './assets/data/imageMultipleChoiceQuestions';
import Button from './src/components/Button';

const App = () => {
  const [selected, setSelected] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert('You Won!');
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onButtonPress = () => {
    if (selected.correct) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelected(null);
    } else {
      Alert.alert('Wrong');
    }
  };
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>{currentQuestion.question}</Text>
      <View style={styles.optionsContainer}>
        {currentQuestion?.options.map(option => (
          <OptionContainer
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button text='Check' onPress={onButtonPress} disabled={!selected} />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

export default App;

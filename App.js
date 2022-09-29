import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Alert } from 'react-native';
import styles from './App.styles';
import questions from './assets/data/imageMultipleChoiceQuestions';
import ImageMulitpleChoiceQuestions from './src/components/ImageMulitpleChoiceQuestions/ImageMulitpleChoiceQuestions';

const App = () => {
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

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onWrong = () => {
    Alert.alert('Wrong!');
  };

  return (
    <SafeAreaView style={styles.root}>
      <ImageMulitpleChoiceQuestions
        currentQuestion={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

export default App;

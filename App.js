import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Alert, ActivityIndicator } from 'react-native';
import styles from './App.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ImageMulitpleChoiceQuestions from './src/components/ImageMulitpleChoiceQuestions/ImageMulitpleChoiceQuestions';
import OpenEndedQuestion from './src/components/OpenEndedQuestion/OpenEndedQuestion';
import Header from './src/components/Header';
import questions from './assets/data/allQuestions';

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [lives, setLives] = useState(5);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert('You Won!');
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      saveData();
    }
  }, [lives, currentQuestionIndex, hasLoaded]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const restart = () => {
    setCurrentQuestionIndex(0);
    setLives(5);
  };

  const onWrong = () => {
    if (lives <= 1) {
      Alert.alert('Game Over!', 'Try Again', [
        {
          text: 'Start Over',
          onPress: restart,
        },
      ]);
    } else {
      Alert.alert('Wrong!');
      setLives(lives - 1);
    }
  };

  const saveData = async () => {
    await AsyncStorage.setItem('lives', lives.toString());
    await AsyncStorage.setItem(
      'currentQuestionIndex',
      currentQuestionIndex.toString()
    );
  };
  const loadData = async () => {
    const loadedLives = await AsyncStorage.getItem('lives');
    if (loadedLives) {
      setLives(parseInt(loadedLives));
    }

    const currentQuestionIndex = await AsyncStorage.getItem(
      'currentQuestionIndex'
    );
    if (currentQuestionIndex) {
      setCurrentQuestionIndex(parseInt(currentQuestionIndex));
    }

    setHasLoaded(true);
  };

  if (!hasLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styles.root}>
      <Header
        progress={currentQuestionIndex / questions.length}
        lives={lives}
      />
      {currentQuestion.type === 'IMAGE_MULTIPLE_CHOICE' && (
        <ImageMulitpleChoiceQuestions
          currentQuestion={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      {currentQuestion.type === 'OPEN_ENDED' && (
        <OpenEndedQuestion
          currentQuestion={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

export default App;

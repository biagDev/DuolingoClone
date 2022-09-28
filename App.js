import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import styles from './App.styles';
import OptionContainer from './src/components/OptionContainer';
// import imageMultipleChoiceQuestions from './assets/data/imageMultipleChoiceQuestions';
import question from './assets/data/oneQuestionWithOption';

const App = () => {
  const [selected, setSelected] = useState(null);
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>{question.question}</Text>
      <View style={styles.optionsContainer}>
        {question.options.map(option => (
          <OptionContainer
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

export default App;

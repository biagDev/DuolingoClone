import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import PropTypes from 'prop-types';

import Button from '../Button';
import mascot from '../../../assets/images/mascot.png';
import styles from './styles';

const OpenEndedQuestion = ({ currentQuestion, onCorrect, onWrong }) => {
  const [input, setInput] = useState('');
  const onButtonPress = () => {
    if (currentQuestion.answer.toUpperCase().trim === input.toUpperCase()) {
      onCorrect();
    } else {
      onWrong();
    }
    setInput('');
  };
  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        <Image resizeMode='contain' source={mascot} style={styles.mascot} />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{currentQuestion.text}</Text>
        </View>
      </View>

      <TextInput
        value={input}
        onChangeText={setInput}
        style={styles.textInput}
        placeholder='Type In English'
        textAlignVertical='top'
        multiline={true}
      />
      <Button text='Check' onPress={onButtonPress} disabled={false} />
    </>
  );
};

OpenEndedQuestion.propTypes = {
  currenQuestion: PropTypes.arrayOf({
    id: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string,
    answer: PropTypes.string,
  }),
};

export default OpenEndedQuestion;

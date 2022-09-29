import React, { useState } from 'react';
import styles from './styles';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Button from '../Button';
import OptionContainer from '../OptionContainer';

const ImageMulitpleChoiceQuestions = ({
  currentQuestion,
  onCorrect,
  onWrong,
}) => {
  const [selected, setSelected] = useState(null);
  const onButtonPress = () => {
    if (selected.correct) {
      onCorrect();
      setSelected(null);
    } else {
      onWrong();
    }
  };

  return (
    <>
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
    </>
  );
};

ImageMulitpleChoiceQuestions.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf({
      id: PropTypes.string,
      text: PropTypes.string,
      image: PropTypes.string,
      correct: PropTypes.bool,
    }),
  }),
};

export default ImageMulitpleChoiceQuestions;

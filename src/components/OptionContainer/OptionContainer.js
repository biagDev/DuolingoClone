import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const OptionContainer = ({ text, image, isSelected, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.optionContainer,
        isSelected ? styles.selectedContainer : null,
      ]}
    >
      <Image
        source={{
          uri: image,
        }}
        style={styles.optionImage}
        resizeMode='contain'
      />
      <Text style={[styles.optionText, isSelected ? styles.selectedText : {}]}>
        {text}
      </Text>
    </Pressable>
  );
};

OptionContainer.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
};

OptionContainer.defaultProps = {
  text: 'Default',
  isSelected: false,
  onPress: () => {},
};

export default OptionContainer;

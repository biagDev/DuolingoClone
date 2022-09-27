import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

const OptionContainer = ({ text, image }) => {
  return (
    <View style={styles.optionContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.optionImage}
        resizeMode='contain'
      />
      <Text style={styles.optionText}>{text}</Text>
    </View>
  );
};

export default OptionContainer;

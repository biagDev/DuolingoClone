import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.bg}>
      <View style={[styles.fg, { width: `${progress * 100}%` }]}>
        <View style={styles.hl}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'lightgrey',
    height: 30,
    flex: 1,
    borderRadius: 15,
  },
  fg: {
    flex: 1,
    backgroundColor: '#fac800',
    borderRadius: 15,
    height: 20,
  },
  hl: {
    backgroundColor: '#fad131',
    width: '90%',
    borderRadius: 5,
    height: 10,
    marginTop: 5,
    alignSelf: 'center',
  },
});

export default ProgressBar;

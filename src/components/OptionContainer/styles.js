import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  optionContainer: {
    // border
    borderWidth: 2,
    borderColor: 'lightgrey',
    borderRadius: 10,
    borderBottomWidth: 4,

    // size
    height: '48%',
    width: '46%',

    // padding
    padding: 10,
    margin: 7,
    alignItems: 'center',
  },
  optionImage: {
    flex: 1,
    height: 100,
    width: '100%',
  },
  optionText: {},
});

export default styles;

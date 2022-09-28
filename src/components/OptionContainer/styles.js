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
  selectedContainer: {
    backgroundColor: '#DDF4FE',
    borderColor: '#81D5FE',
  },
  optionImage: {
    flex: 1,
    height: 100,
    width: '100%',
  },
  optionText: {
    fontWeight: 'bold',
    // fontSize: 40,
  },
  selectedText: {
    color: '#40bef7',
  },
});

export default styles;

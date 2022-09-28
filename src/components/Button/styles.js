import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#58cc02',
    height: 50,
    margin: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',

    // border
    borderRadius: 5,
    borderBottomWidth: 5,
    borderColor: '#57a600',
  },
  disabled: {
    backgroundColor: 'lightgrey',
    borderColor: 'lightgrey',
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textDecorationLine: 'underline',

    borderColor: 'white',
    borderBottomWidth: 1.5,
  },
});

export default styles;

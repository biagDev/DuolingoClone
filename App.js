import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import styles from './App.styles';
import OptionContainer from './src/components/OptionContainer';

const App = () => (
  <SafeAreaView style={styles.root}>
    <Text style={styles.title}>Which of these is a "glass"?</Text>

    <View style={styles.optionsContainer}>
      <OptionContainer
        image={
          'https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png'
        }
        text={'cup'}
      />
      <OptionContainer
        image={
          'https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png'
        }
        text={'glass'}
      />
    </View>
    <StatusBar style='auto' />
  </SafeAreaView>
);

export default App;

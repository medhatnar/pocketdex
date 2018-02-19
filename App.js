import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import Greeting from './Greeting.js';
import CustomButton from './Button.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight underlayColor='pink' activeOpacity={5} onPress={() => console.log('pressing')}>
        <Greeting color='blue' name='friend' webSiteName='PocketDex 1.0' />
      </TouchableHighlight>
        <CustomButton />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
   alignItems: 'center',
   backgroundColor: '#DDDDDD',
   padding: 10
 },
});

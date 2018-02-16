import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Greeting from './Greeting.js';
import CustomButton from './Button.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting color='blue' name='friend' webSiteName='PocketDex 1.0' />
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
});

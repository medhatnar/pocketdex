import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';

import Greeting from './Greeting.js';
import CustomForm from './CustomForm.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        text: '',
      }
  }

  render() {
    return (
      <View style={styles.container}>
        <Greeting color='blue' name='friend' webSiteName='PocketDex 1.0' />
        <CustomForm
        textChangeAction={(newText) => this.setState({text: newText})}
        buttonAction={() => Alert.alert(this.state.text)}
        />
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

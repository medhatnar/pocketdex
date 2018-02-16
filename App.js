import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Greeting from './Greeting.js';
import CustomButton from './Button.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        showGreeting: true,
      }
  }

  changeGreetingState () {
    console.log('yo')
    this.setState({showGreeting: !this.state.showGreeting});
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.showGreeting ? <Greeting color='blue' name='friend' webSiteName='PocketDex 1.0' /> : null}
        <CustomButton stateChangingAction={ () => this.setState({showGreeting: !this.state.showGreeting}) } />
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

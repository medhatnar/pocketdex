import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text style={{color:this.props.color}}>Hi there {this.props.name}!</Text>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Greeting color='blue' name='friend' />
        <Greeting color='green' name='Narmin' />
        <Greeting color='red' name='props are fun!' />
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

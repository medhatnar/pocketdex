import React, { Component } from 'react';
import { Text } from 'react-native';

class PersonalGreeting extends Component {
  render() {
    return (
      <Text>Hi there {this.props.name}</Text>
    )
  }
}

class Greeting extends Component {
  render() {
    return (
      <PersonalGreeting name='Friend!' />
      <Text style={{color:'rebeccapurple', fontWeight: "bold"}}>Welcome to { this.props.webSiteName } !</Text>
    );
  }
};

export default Greeting;

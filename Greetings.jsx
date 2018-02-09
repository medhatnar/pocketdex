import React, { Component } from 'react';
import { Text } from 'react-native';

class PersonalGreeting extends Component {
  render() {
    return (
      <Text style={{color:this.props.color}}>Hi there {this.props.name}</Text>
    )
  }
}

class Greeting extends Component {
  render() {
    return (
      <PersonalGreeting name='Friend!' />
      <Text style={{colo r:'rebeccapurple', fontWeight: "bold"}} >Welcome to { this.props.webSiteName } ! This mobile app provides a visual representation of a locations air quality.</Text>
    );
  }
};

export default Greeting;

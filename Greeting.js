import React, { Component } from 'react';
import { View, Text } from 'react-native';

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
      <View>
      <PersonalGreeting name='Friend!' />
      <Text style={{color:'rebeccapurple', fontWeight: "bold"}} selectable={true} >Welcome to { this.props.webSiteName } ! </Text>
      </View>
    );
  }
};

export default Greeting;

import React from 'react';
import { StyleSheet, Text } from 'react-native';

class Greeting extends React.Component {
  render() {
    return (
        <Text style={{color: this.props.color, fontSize: 20, fontWeight: 'bold' }}> Hello, {this.props.name}! </Text>
    );
  }
}

export default Greeting;

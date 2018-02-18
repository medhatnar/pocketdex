import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

class PokemonEntry extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
      <Text>Name: {this.props.name}</Text>
      <Image source={{uri: this.props.image}} style={{width: 100, height: 100}}/>
      <Text>Type: {this.props.type} </Text>
      </View>
    )
  }
}

export default PokemonEntry;

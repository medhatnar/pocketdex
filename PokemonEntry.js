import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

class PokemonEntry extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={entryStyles.container}>
      <Image source={{uri: this.props.image}} style={{width: 100, height: 100}}/>
      <Text style={entryStyles.name}>Name: {this.props.name}</Text>
      <Text style={entryStyles.type}>Type: {this.props.type} </Text>
      </View>
    )
  }
}

const entryStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#b7e1ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'#eaefec',
    borderWidth: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  type: {
    fontFamily: 'Verdana',
    textDecorationLine: 'underline',
  }
});

export default PokemonEntry;

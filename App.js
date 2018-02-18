import React, { Component } from 'react';
import { StyleSheet, View, Alert, FlatList } from 'react-native';

import { Greeting, PersonalGreeting } from './Greeting.js';
import PokemonEntry from './PokemonEntry.js';
import CustomForm from './CustomForm.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        poke: { name: '', type: '', image: ''},
        data: []
      }
  }

  addToDatabase () {
    this.setState({data : [...this.state.data, this.state.poke]});
  }

  getPokemonData (pokemon) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
    .then((response) => response.json())
    .then((responseJson) => {

      const type = responseJson.types[0].type.name;
      const image = responseJson.sprites.front_default;
      const pokeName = responseJson.name;
      this.setState({poke: { name: pokeName, type, image }})
      this.addToDatabase();
    })
    .catch((err) => {
      Alert.alert('You have not entered a valid id or name.')
    });

}

  render() {
    return (
      <View style={styles.container}>
        <Greeting color='blue' name='friend' webSiteName='PocketDex 1.0' />
        <CustomForm
        textChangeAction={(poke) => this.setState({poke: { name: poke }})}
        buttonAction={() => this.getPokemonData(this.state.poke.name)}
        />
        <FlatList
        data={this.state.data}
        renderItem={({item}) =>  <PokemonEntry {...item}/>}
        keyExtractor={(item, index) => index}
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

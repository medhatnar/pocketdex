import React, { Component } from 'react';
import Greeting from './Greeting.js';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, FlatList, ScrollView, Image, Alert } from 'react-native';

// class PersonalGreeting extends Component {
//   render() {
//     return (
//       <Text style={{color:this.props.color}}>Hi there {this.props.name}</Text>
//     )
//   }
// }

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
//
// class Greeting extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       poke: { name: '', type: '', image: ''},
//       data: []
//     }
// }
//
// addToDatabase () {
//   this.setState({data : [...this.state.data, this.state.poke]});
// }
//
// getPokemonData (pokemon) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
//     .then((response) => response.json())
//     .then((responseJson) => {
//
//       const type = responseJson.types[0].type.name;
//       const image = responseJson.sprites.front_default;
//       const pokeName = responseJson.name;
//       this.setState({poke: { name: pokeName, type, image }})
//       this.addToDatabase();
//     })
//     .catch((err) => {
//       Alert.alert('You have not entered a valid id or name.')
//     });
//
// }

//   render() {
//     return (
//       <View style={styles.container}>
//       <PersonalGreeting name='Friend!' />
//       <Text style={{color:'rebeccapurple', fontWeight: "bold"}} >Welcome to { this.props.webSiteName } The pokedex mobile app.</Text>
//       <TextInput
//               style={{height: 40}}
//               placeholder='Please enter a pokemon id or name!'
//               onChangeText={(poke) => this.setState({poke: { name: poke }})}
//               ref={input => { this.textInput = input }}
//             />
//         <TouchableOpacity activeOpacity={1}>
//           <Button
//             color='#93211f'
//             onPress={() => {
//               this.getPokemonData(this.state.poke.name);
//               this.textInput.clear()
//             }}
//             title="Press Me"
//           />
//           </TouchableOpacity>
//           <FlatList
//                    data={this.state.data}
//                    renderItem={({item}) =>  <PokemonEntry key={item.id} {...item}/>}
//                    keyExtractor={(item, index) => index}
//           />
//           <PokemonEntry />
//       </View>
//     );
//   }
// };

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Greeting webSiteName='PocketDex!'/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginTop: '20%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Alert } from 'react-native';

import Greeting from './Greeting.js';
import CustomForm from './CustomForm.js';
import SpecialText from './SpecialText.js';

export default class App extends React.Component {
  constructor(props) {
  super(props);

    this.state = {
      word: {word : ''},
      database: [],
    }
}

addToData() {
  this.setState({database : [...this.state.database, this.state.word]});
  console.log(this.state.database)
}

  render() {
    return (
      <View style={styles.container}>
      <Image source={{uri:'http://bit.ly/2CF27AF'}} style={{width: 200, height: 200}}/>
      <Greeting color='#00adef' name='Lesbians Who Tech'/>
      <CustomForm
        updatingStateTextAction={(text) => this.setState({ word: { word: text} } )}
        someButtonAction={() => this.addToData()}
        someTitle='add to the list'
      />
      <FlatList
             data={this.state.database}
             renderItem={({item}) =>  <SpecialText someWord={item.word}/>}
             keyExtractor={(item, index) => index}
             />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

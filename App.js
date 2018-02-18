import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Alert, FlatList } from 'react-native';

import { Greeting, PersonalGreeting } from './Greeting.js';
import CustomForm from './CustomForm.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        text: '',
        data: [{color: 'red', name: 'Sven'},{color: 'green', name:'Christine'},{color:'blue', name:'Narmin'}  ]
      }
  }

  render() {
    return (
      <View style={styles.container}>
        <Greeting color='blue' name='friend' webSiteName='PocketDex 1.0' />
        <CustomForm
        textChangeAction={(newText) => this.setState({text: newText})}
        buttonAction={() => Alert.alert(this.state.text)}
        />
        <FlatList
                 data={this.state.data}
                 renderItem={({item}) =>  <PersonalGreeting color={item.color} name={item.name}/>}
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

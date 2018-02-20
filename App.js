import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Alert } from 'react-native';

import { Greeting, PersonalGreeting } from './Greeting.js';
import CustomForm from './CustomForm.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        text: '',

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
        <ScrollView>
          <PersonalGreeting color='green' name='friend' />
          <PersonalGreeting color='green' name='friend' />
          <PersonalGreeting color='green' name='friend' />
          <PersonalGreeting color='green' name='friend' />
        </ScrollView>
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

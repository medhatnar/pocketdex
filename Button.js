import React, { Component } from 'react';
import { Button, TouchableOpacity, Alert } from 'react-native';

class CustomButton extends Component {
  render () {
    return (
      <TouchableOpacity activeOpacity={5}>
        <Button
          color='#93211f'
          onPress={() => {
            Alert.alert('YOU PRESSED ME!');
          }}
          title="Press Me"
        />
        </TouchableOpacity>
    )
  }
}

export default CustomButton;

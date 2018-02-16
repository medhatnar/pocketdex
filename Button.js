import React, { Component } from 'react';
import { Button, TouchableOpacity, Alert } from 'react-native';

class CustomButton extends Component {
  render () {
    return (
      <TouchableOpacity activeOpacity={1}>
        <Button
          color='#93211f'
          onPress={this.props.stateChangingAction}
          title="Press Me"
        />
        </TouchableOpacity>
    )
  }
}

export default CustomButton;

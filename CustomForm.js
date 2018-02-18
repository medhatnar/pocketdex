import React, { Component } from 'react';
import { Button, TouchableOpacity, TextInput, View } from 'react-native';

class CustomForm extends Component {
  render () {
    return (
    <View>
      <TextInput
        style={{height: 40}}
        placeholder='Enter a number or pokemon name'
        onChangeText={this.props.textChangeAction}
        ref={input => { this.textInput = input }}
      />
      <TouchableOpacity activeOpacity={1}>
        <Button
          color='#93211f'
          onPress={() => {
            this.props.buttonAction();
            this.textInput.clear()
          }}
          title="Press Me"
        />
      </TouchableOpacity>
    </View>
    )
  }
}

export default CustomForm;

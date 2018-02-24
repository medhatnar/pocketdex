import React from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

class CustomForm extends React.Component {
  render() {
    return (
      <View>
        <TextInput
          onChangeText={this.props.updatingStateTextAction}
          placeholder='type some text'
          style={styles.input}
          ref={input => { this.textInput = input }}
         />
        <Button
          onPress={() => {
            this.props.someButtonAction();
            this.textInput.clear();
          }}
          title={this.props.someTitle}
          color='purple'
          style={styles.button}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
  button: {
    backgroundColor: 'pink',
    borderColor: 'purple',
  }
});

export default CustomForm;

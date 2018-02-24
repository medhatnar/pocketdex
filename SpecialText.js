import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SpecialText extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.special}> {this.props.someWord} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  special: {
    color: '#00adef',
    textDecorationLine: 'underline',
    fontSize: 20,
    textShadowColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SpecialText;

import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles';

class FlipIt extends Component {
  static navigationOptions = {
    title: 'Flip For It'
  }
  render() {
    return (
      <View>
        <Text>Flip That Coin!</Text>
      </View>
    );
  }
}

export default FlipIt;

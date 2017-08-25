import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles';

class Restaurant extends Component {
  static navigationOptions = {
    title: 'Random Restaurant'
  }
  render() {
    return (
      <View>
        <Text>Pick a Place</Text>
      </View>
    );
  }
}

export default Restaurant;

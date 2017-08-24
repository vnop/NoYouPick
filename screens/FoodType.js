import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles';

class FoodType extends Component {
  static navigationOptions = {
    title: 'Random Food Type'
  }
  render() {
    return (
      <View>
        <Text>What am I Craving?</Text>
      </View>
    );
  }
}

export default FoodType;

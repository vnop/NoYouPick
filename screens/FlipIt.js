import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles';
// import FlipCoin from '../components/FlipCoin';
import AnimateFlip from '../components/AnimateFlip';

class FlipIt extends Component {
  static navigationOptions = {
    title: 'Flip For It'
  }
  render() {
    return (
      <View style={styles.container}>
        <AnimateFlip />
      </View>
    );
  }
}

export default FlipIt;

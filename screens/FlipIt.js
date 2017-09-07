import React, { Component } from 'react';
import { View } from 'react-native';
import styles from '../styles/styles';
import AnimateFlip from '../components/AnimateFlip';

export default class FlipIt extends Component {
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

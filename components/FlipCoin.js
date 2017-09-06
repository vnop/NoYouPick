import React, { Component } from 'react';
import {
  // Animated,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  View,
  // TouchableHighlight
} from 'react-native';
// import { StackNavigator } from 'react-navigation';
// import PropTypes from 'prop-types';
// import styles from '../styles/styles';
import AnimateFlip from './AnimateFlip';

const { width } = Dimensions.get('window');

export default class FlipCoin extends Component {
  render() {
    return (
      <View style={tempStyles.container}>

        <View style={tempStyles.coinContainer}>
          <AnimateFlip style={{backgroundColor: 'powderblue'}}>
            <Image
              source={{uri: imgUrl}}
              style={{width: 200, height: 200}}
            />
          </AnimateFlip>
          <Text> HEADS/TAILS </Text>
        </View>

      </View>
    );
  }
}

const tempStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  coinContainer: {
    flex: 1,
    backgroundColor: '#fefefe',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

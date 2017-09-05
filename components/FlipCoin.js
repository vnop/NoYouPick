import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const { width } = Dimensions.get('window');

export default class FlipCoin extends Component {
  render() {
    let imgUrl = `https://cdn.shopify.com/s/files/1/1280/3657/products/GM-TA-08-DAE-C-1_b94f858d-58f9-47d1-aa40-78f225b81f45_1024x1024.png?v=1477594707`;
    let tails = `https://i0.wp.com/ep.yimg.com/ay/yhst-62697111611463/dragon-coin-king-jaehaerys-got-7.jpg?resize=171%2C162`;
    return (
      <View style={tempStyles.container}>

        <View style={tempStyles.coinContainer}>
          <Image
            source={{uri: imgUrl}}
            style={{width: 200, height: 200}}
          />
          <Image
            source={{uri: tails}}
            style={{width: 200, height: 200}}
          />
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

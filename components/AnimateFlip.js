import React, { Component } from 'react';
import {
  Animated,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/styles';

export default class AnimateFlip extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    });
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    });
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    });
  }

  _flipCoin = () => {
    const random = Math.floor(Math.random() * 2);
    let endValue;
    if (random < 1) {
      if (this.value <= 181) {
        endValue = 2160;
      } else {
        endValue = 0;
      }
    } else {
      if (this.value <= 181) {
        endValue = 1980;
      } else {
        endValue = 180;
      }
    }
    Animated.spring(this.animatedValue, {
      toValue: endValue,
      friction: 8,
      tension: 10,
    }).start();
  }

  render() {
    const frontAnimatedStyle = {
      transform: [
        { rotateX: this.frontInterpolate },
      ],
    };
    const backAnimatedStyle = {
      transform: [
        { rotateX: this.backInterpolate },
      ],
    };
    return (
      <View style={[styles.container, addStyles.container]}>
        <View style={{padding: 10}}>
          <Animated.View style={[addStyles.flipCoin, frontAnimatedStyle]}>
            <Image
              source={require('../assets/images/dragonHead.png')}
              style={{ width: 200, height: 200 }}
            />
          </Animated.View>
          <Animated.View style={[backAnimatedStyle, addStyles.flipCoin, addStyles.flipCoinBack]}>
            <Image
              source={require('../assets/images/dragonTail.png')}
              style={{ width: 200, height: 200 }}
            />
          </Animated.View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => this._flipCoin()}>
          <Text style={styles.buttonText}>Flip that coin!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const addStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipCoin: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
  },
  flipCoinBack: {
    position: 'absolute',
    top: 0,
  },
});

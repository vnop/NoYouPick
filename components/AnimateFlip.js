import React, { Component } from 'react';
import {
  Animated,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class AnimateFlip extends Component {
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

  flipCoin() {
    const random = Math.floor(Math.random() * 2);
    let endValue;
    // DAENERYS
    if (random < 1) {
      if (this.value <= 181) {
        endValue = 2160;
      } else {
        endValue = 0;
      }
    } else {
    // DRAGON
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
      <View style={styles.container}>
        <View>
          <Animated.View style={[styles.flipCoin, frontAnimatedStyle]}>
            <Image
              source={require('../assets/images/dragonHead.png')}
              style={{ width: 200, height: 200 }}
            />
          </Animated.View>
          <Animated.View style={[backAnimatedStyle, styles.flipCoin, styles.flipCoinBack]}>
            <Image
              source={require('../assets/images/dragonTail.png')}
              style={{ width: 200, height: 200 }}
            />
          </Animated.View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => this.flipCoin()}>
          <Text>Flip that coin!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  button: {
    backgroundColor: 'royalblue',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default AnimateFlip;

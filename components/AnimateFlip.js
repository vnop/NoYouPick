import React from 'react';
import {
  Animated,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class AnimateFlip extends React.Component {

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
  }

  flipCoin() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: -2160,
        friction: 8,
        tension: 10,
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 1980,
        friction: 8,
        tension: 10,
      }).start();
    }
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
        <TouchableOpacity onPress={() => this.flipCoin()}>
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
  flipText: {
    width: 90,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AnimateFlip;

import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from '../styles/styles';

const RestaurantButton = (props) => {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => props.goToScreen('Restaurants')}
    >
      <Text style={styles.buttonText}>Random Restaurant Nearby</Text>
    </TouchableHighlight>
  );
};

export default RestaurantButton;
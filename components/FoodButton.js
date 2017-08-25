import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from '../styles/styles';

const FoodButton = (props) => {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => props.goToScreen('FoodType')}
    >
      <Text style={styles.buttonText}>Random Food Type</Text>
    </TouchableHighlight>
  );
};

export default FoodButton;
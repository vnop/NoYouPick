import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from '../styles/styles';

const FlipButton = (props) => {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => props.goToScreen('Flip')}
    >
      <Text style={styles.buttonText}>Flip For It</Text>
    </TouchableHighlight>
  );
};

export default FlipButton;
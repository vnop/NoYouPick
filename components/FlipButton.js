import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
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

FlipButton.propTypes = {
  goToScreen: PropTypes.func.isRequired,
};

export default FlipButton;

import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const RestaurantButton = (props) => {
  let buttonStyle;
  let disabledMessage = null;
  if (props.show) {
    buttonStyle = styles.disabledBtn;
    disabledMessage = props.msg;
  } else {
    buttonStyle = styles.button;
  }
  return (
    <View>
      <TouchableHighlight
        style={buttonStyle}
        onPress={() => props.goToScreen('Restaurants')}
        disabled={props.show}
      >
        <Text style={styles.buttonText}>Random Restaurant Nearby</Text>
      </TouchableHighlight>
      <Text>{disabledMessage}</Text>
    </View>
  );
};

RestaurantButton.propTypes = {
  goToScreen: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  msg: PropTypes.string,
};

RestaurantButton.defaultProps = {
  msg: null,
};

export default RestaurantButton;

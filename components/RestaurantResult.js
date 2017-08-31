import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const restaurantData = ['Restaurant 1', 'Restaurant 2', 'Restaurant 3', 'Restaurant 4', 'Restaurant 5', 'Restaurant 6'];

class RestaurantResult extends Component {
  static PropTypes = {
    selectRestaurant: PropTypes.func.isRequired,
    selectedRestaurant: PropTypes.string.isRequired,
    restaurants: PropTypes.array.isRequired
  }
  randomizeRestaurant() {
    this.props.selectRestaurant(restaurantData[1]);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.randomizeRestaurant()}
          >
            <Text style={styles.buttonText}>Pick Again</Text>
          </TouchableHighlight>
          <Text>Result Image Here</Text>
          <Text>Chosen Food: { this.props.selectedRestaurant }</Text>
        </View>
      </View>
    );
  }
}

export default RestaurantResult;

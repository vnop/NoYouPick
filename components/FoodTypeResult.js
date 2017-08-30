import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const foodTypesData = ['Chinese Food', 'Italian Food', 'American Food', 'Indian Food', 'Thai Food', 'Mexican Food'];

class FoodTypeResult extends Component {
  static PropTypes = {
    selectFood: PropTypes.func.isRequired,
    selectedFood: PropTypes.string.isRequired
  }
  randomizeFood() {
    this.props.selectFood(foodTypesData[1]);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.randomizeFood()}
          >
            <Text style={styles.buttonText}>Pick Again</Text>
          </TouchableHighlight>
          <Text>Result Image Here</Text>
          <Text>Chosen Food: { this.props.selectedFood }</Text>
        </View>
      </View>
    );
  }
}

export default FoodTypeResult;

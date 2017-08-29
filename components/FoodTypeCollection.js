import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const foodTypesData = ['Chinese Food', 'Italian Food', 'American Food', 'Indian Food', 'Thai Food', 'Mexican Food'];

class FoodTypeCollection extends Component {
  static PropTypes = {
    selectFood: PropTypes.func.isRequired,
  }

  randomizeFood() {
    // random algorithm to go here
    this.props.selectFood(foodTypesData[0]);
  }

  render() {
    return (
      <View style={styles.foodContainer}>
        <View style={styles.foodButton}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.randomizeFood()}
          >
            <Text style={styles.buttonText}>What Am I Craving?</Text>
          </TouchableHighlight>
        </View>
          <View style={styles.foodGrid}>
            { foodTypesData.map((item, index) => {
              return <Text style={styles.foodType} key={index}>{item}</Text>;
            }) }
          </View>
      </View>
    );
  }
}

export default FoodTypeCollection;

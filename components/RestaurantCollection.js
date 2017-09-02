import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const restaurantData = ['Restaurant 1', 'Restaurant 2', 'Restaurant 3', 'Restaurant 4', 'Restaurant 5', 'Restaurant 6'];

class RestaurantCollection extends Component {
  static PropTypes = {
    selectRestaurant: PropTypes.func.isRequired,
    restaurants: PropTypes.array.isRequired
  }
  randomizeRestaurant() {
    // random algorithm to go here
    // this.props.selectRestaurant(restaurantData[0]);
  }

  render() {
    console.log('Restaurant props!!:', this.props.restaurants.length);
    console.log('Restaurant ITEM props!!:', this.props.restaurants);
    return (
      <View style={styles.foodContainer}>
        <View style={styles.foodButton}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.randomizeRestaurant()}
          >
            <Text style={styles.buttonText}>Pick a Place</Text>
          </TouchableHighlight>
        </View>
          <View style={styles.foodGrid}>
            { restaurantData.map((item, index) => {
              return <Text style={styles.foodType} key={index}>{item}</Text>;
            }) }
          </View>
      </View>
    );
  }
}

export default RestaurantCollection;

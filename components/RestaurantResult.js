import React, { Component } from 'react';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

class RestaurantResult extends Component {
  static PropTypes = {
    selectRestaurant: PropTypes.func.isRequired,
    selectedRestaurant: PropTypes.number.isRequired,
    restaurants: PropTypes.array.isRequired
  }
  randomizeRestaurant() {
    // this.props.selectRestaurant(2);
  }

  render() {

    let chosenRestaurant = this.props.restaurants[this.props.selectedRestaurant].venue;
    let imageUri = `${chosenRestaurant.featuredPhotos.items[0].prefix}200${chosenRestaurant.featuredPhotos.items[0].suffix}`;

    return (
      <View style={styles.container}>
        <View>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.randomizeRestaurant()}
          >
            <Text style={styles.buttonText}>Pick Again</Text>
          </TouchableHighlight>
          <Image
            source={{uri: imageUri}}
            style={{width: 100, height: 100}}
          >
            <View>
              <Text style={styles.foodText}>Chosen Restaurant: {chosenRestaurant.name}</Text>
            </View>
          </Image>
        </View>
      </View>
    );
  }
}

export default RestaurantResult;

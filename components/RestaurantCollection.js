import React, { Component } from 'react';
import { Image, Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

class RestaurantCollection extends Component {
  static PropTypes = {
    selectRestaurant: PropTypes.func.isRequired,
    restaurants: PropTypes.array.isRequired
  }
  randomizeRestaurant() {
    // random algorithm to go here
    // this.props.selectRestaurant(this.props.restaurants[0]);
  }

  render() {
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
          { this.props.restaurants.map((place, index) => {
            let imageUri = `${place.venue.featuredPhotos.items[0].prefix}200${place.venue.featuredPhotos.items[0].suffix}`;
            return (
              <View key={place.venue.featuredPhotos.items[0].id}>
                <Image
                  source={{uri: imageUri}}
                  style={{width: 100, height: 100}}
                >
                <View>
                  <Text style={styles.foodText}>{place.venue.name}</Text>
                </View>
                </Image>
              </View>
            );
          }) }
        </View>
      </View>
    );
  }
}

export default RestaurantCollection;

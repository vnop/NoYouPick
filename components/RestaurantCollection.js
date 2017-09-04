import React, { Component } from 'react';
import { Dimensions, StyleSheet, Image, Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const { width } = Dimensions.get('window');

class RestaurantCollection extends Component {
  static PropTypes = {
    selectRestaurant: PropTypes.func.isRequired,
    restaurants: PropTypes.array.isRequired
  }
  randomizeRestaurant() {
    // random algorithm to go here
    this.props.selectRestaurant(1);
  }

  render() {
    let imageWidth = width / 2;
    return (
      <View style={tempStyles.container}>

        <View style={tempStyles.foodButton}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.randomizeRestaurant()}
          >
            <Text style={styles.buttonText}>Pick a Place</Text>
          </TouchableHighlight>
        </View>

        <View style={tempStyles.foodGrid}>
          { this.props.restaurants.map((place, index) => {
            let imageUri = `${place.venue.featuredPhotos.items[0].prefix}200${place.venue.featuredPhotos.items[0].suffix}`;
            return (
              <Image
                source={{uri: imageUri}}
                style={{ width: imageWidth, height: 150 }}
                key={place.venue.featuredPhotos.items[0].id}
              >
              <View style={{ backgroundColor: 'rgba(0,0,0,0.4)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    fontWeight: 'bold'
                  }}
                >
                  {place.venue.name}
                </Text>
              </View>
              </Image>
            );
          }) }
        </View>

      </View>
    );
  }
}

export default RestaurantCollection;

const tempStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  foodGrid: {
    flex: 1,
    backgroundColor: 'skyblue',  // to be removed
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'center'
  },
  foodButton: {
    marginBottom: 1,
  }
});

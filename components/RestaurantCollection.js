import React, { Component } from 'react';
import {
  ScrollView,
  Dimensions,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const { width } = Dimensions.get('window');

export default class RestaurantCollection extends Component {
  static PropTypes = {
    selectRestaurant: PropTypes.func.isRequired,
    restaurants: PropTypes.array.isRequired
  }

  _randomizeRestaurant = () => {
    let max = this.props.restaurants.length;
    let randomSelect = Math.floor(Math.random() * max);
    this.props.selectRestaurant(randomSelect);
  }

  render() {
    const imageWidth = width / 2;
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 1 }}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this._randomizeRestaurant()}
          >
            <Text style={styles.buttonText}>Pick a Place</Text>
          </TouchableHighlight>
        </View>
        <ScrollView>
          <View style={styles.foodGrid}>
              { this.props.restaurants.map((place, index) => {
                let imageUri = `${place.venue.featuredPhotos.items[0].prefix}200${place.venue.featuredPhotos.items[0].suffix}`;
                return (
                  <Image
                    source={{uri: imageUri}}
                    style={{ width: imageWidth, height: 150 }}
                    key={place.venue.featuredPhotos.items[0].id}
                  >
                  <View style={styles.fadeBack}>
                    <Text style={styles.fadeText}>
                      {place.venue.name}
                    </Text>
                  </View>
                  </Image>
                );
              }) }
          </View>
        </ScrollView>
      </View>
    );
  }
}

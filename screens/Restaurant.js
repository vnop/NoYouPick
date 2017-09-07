import React, { Component } from 'react';
import { View } from 'react-native';
import { Location } from 'expo';
import styles from '../styles/styles';
import RestaurantCollection from '../components/RestaurantCollection';
import RestaurantResult from '../components/RestaurantResult';
import { clientId, clientSecret } from '../config/fourSquare';

const fourSquareEndPt = `https://api.foursquare.com/v2/venues/explore`;

export default class Restaurant extends Component {
  constructor() {
    super();
    this.state = {
      chosenRestaurant: null,
      restaurantData: [],
      location: null
    }
  }

  componentWillMount() {
    this._getLocationAsync();
  }

  static navigationOptions = {
    title: 'Random Restaurant'
  }

  _getLocationAsync = async () => {
      let location = await Location.getCurrentPositionAsync({});
      this._getVenues(location.coords);
      this.setState({ location: location.coords });
    };

  _getVenues = (location) => {
    const query = this._makeQuery(location);
    fetch(`${fourSquareEndPt}?${query}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ restaurantData: data.response.groups[0].items });
      })
      .catch(err => console.log('foursquare fetch error', err));
  }

  _makeQuery = ({ latitude, longitude, accuracy }) => {
    return `client_id=${clientId}&client_secret=${clientSecret}&v=20170901&ll=${latitude},${longitude}&llAcc=${accuracy}&section=food&limit=10&openNow=1&venuePhotos=1`;
  }

  _chooseRestaurant = (chosenRestaurant) => {
    this.setState({ chosenRestaurant });
  }

  _getScreenContent = () => {
    const { chosenRestaurant, restaurantData } = this.state;
    if (chosenRestaurant === null) {
      return (
        <RestaurantCollection
          selectRestaurant={this._chooseRestaurant}
          restaurants={restaurantData}
        />
      );
    } else {
      return (
        <RestaurantResult
          selectRestaurant={this._chooseRestaurant}
          selectedRestaurant={chosenRestaurant}
          restaurants={restaurantData}
        />
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        { this._getScreenContent() }
      </View>
    );
  }
}

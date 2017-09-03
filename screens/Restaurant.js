import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Location } from 'expo';
import styles from '../styles/styles';
import RestaurantCollection from '../components/RestaurantCollection';
import RestaurantResult from '../components/RestaurantResult';
import { clientId, clientSecret } from '../config/fourSquare';

const fourSquareEndPt = `https://api.foursquare.com/v2/venues/explore`;

class Restaurant extends Component {
  constructor() {
    super();
    this.state = {
      chosenRestaurant: null,
      restaurantData: [],
      location: null
    }
    this.chooseRestaurant = this.chooseRestaurant.bind(this);
  }

  componentWillMount() {
    this._getLocationAsync();
  }

  static navigationOptions = {
    title: 'Random Restaurant'
  }

  _getLocationAsync = async () => {
      let location = await Location.getCurrentPositionAsync({});
      this.getVenues(location.coords);
      this.setState({ location: location.coords });
    };

  getVenues(location) {
    // should look at other api endpoints or change section in query
      // perform another search if there are no results
      // if not results at all, then display a message of no results
    const query = this.makeQuery(location);
    fetch(`${fourSquareEndPt}?${query}`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          restaurantData: data.response.groups[0].items
        })
      })
      .catch(err => console.log('foursquare fetch error', err));
  }

  makeQuery({ latitude, longitude, accuracy }) {
    return `client_id=${clientId}&client_secret=${clientSecret}&v=20170901&ll=${latitude},${longitude}&llAcc=${accuracy}&section=food&limit=10&openNow=1&venuePhotos=1`;
  }

  chooseRestaurant(chosenRestaurant) {
    this.setState({ chosenRestaurant });
  }

  getScreenContent() {
    if (this.state.chosenRestaurant === null) {
      return (
        <RestaurantCollection
          selectRestaurant={this.chooseRestaurant}
          restaurants={this.state.restaurantData}
        />
      );
    } else {
      return (
        <RestaurantResult
          selectRestaurant={this.chooseRestaurant}
          selectedRestaurant={this.state.chosenRestaurant}
          restaurants={this.state.restaurantData}
        />
      );
    }
  }

  render() {
    return (
      <View
      style={styles.container}
      >
        { this.getScreenContent() }
      </View>
    );
  }
}

export default Restaurant;

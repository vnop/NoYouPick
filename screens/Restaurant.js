import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Location } from 'expo';
import styles from '../styles/styles';
import RestaurantCollection from '../components/RestaurantCollection';
import RestaurantResult from '../components/RestaurantResult';
import { clientId, clientSecret } from '../config/fourSquare';

const fourSquareEndPt = `
https://api.foursquare.com/v2/venues/explore
`;

class Restaurant extends Component {
  constructor() {
    super();
    this.state = {
      chosenRestaurant: '',
      restaurantData: [],
      location: null
    }
    this.chooseRestaurant = this.chooseRestaurant.bind(this);
  }

  componentWillMount() {
    // get device location, permission already granted if this screen renders
    this._getLocationAsync();
  }

  // fetch data from fourSquare here, then pass to children
  // componentDidMount() {
  //   this.getVenues();
  // }

  static navigationOptions = {
    title: 'Random Restaurant'
  }

  _getLocationAsync = async () => {
      let location = await Location.getCurrentPositionAsync({});
      this.getVenues(location.coords);
      this.setState({ location: location.coords });
    };

  getVenues(location) {
    const query = this.makeQuery(location); // location info
    console.log('LOCATION: ', query);
    fetch(`${fourSquareEndPt}?${query}`)
      .then(fetch.throwErrors)
      .then(resp => resp.json())
      .then(data => {
        // update the restaurant data
        console.log('4square data: ', data.response.groups);
        // this.setState({
        //   restaurantData: data
        // })
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
    if (this.state.chosenRestaurant === '') {
      return (
        <RestaurantCollection
          selectRestaurant={this.chooseRestaurant}
          restaurants={this.restaurantData}
        />
      );
    } else {
      return (
        <RestaurantResult
          selectRestaurant={this.chooseRestaurant}
          selectedRestaurant={this.state.chosenRestaurant}
          restaurants={this.restaurantData}
        />
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        { this.getScreenContent() }
      </View>
    );
  }
}

export default Restaurant;

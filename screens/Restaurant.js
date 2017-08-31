import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles';
import RestaurantCollection from '../components/RestaurantCollection';
import RestaurantResult from '../components/RestaurantResult';

const fourSquareEndPt = `
https://api.foursquare.com/v2/venues/explore
`;

class Restaurant extends Component {
  constructor() {
    super();
    this.state = {
      chosenRestaurant: '',
      restaurantData: []
    }
    this.chooseRestaurant = this.chooseRestaurant.bind(this);
  }

  // fetch data from fourSquare here, then pass to children
  componentDidMount() {

  }

  static navigationOptions = {
    title: 'Random Restaurant'
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

import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles';
import RestaurantCollection from '../components/RestaurantCollection';
import RestaurantResult from '../components/RestaurantResult';

class Restaurant extends Component {
  constructor() {
    super();
    this.state = {
      chosenRestaurant: ''
    }
    this.chooseRestaurant = this.chooseRestaurant.bind(this);
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
        <RestaurantCollection selectRestaurant={this.chooseRestaurant} />
      );
    } else {
      return (
        <RestaurantResult selectedRestaurant={this.state.chosenRestaurant} selectRestaurant={this.chooseRestaurant} />
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

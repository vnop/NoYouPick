import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles';
import FoodTypeCollection from '../components/FoodTypeCollection';
import FoodTypeResult from '../components/FoodTypeResult';

export default class FoodType extends Component {
  constructor() {
    super();
    this.state = {
      chosenFood: ''
    };
  }

  static navigationOptions = {
    title: 'Random Food Type'
  }

  chooseFood = (chosenFood) => (
    this.setState({
      chosenFood
    });
  )

  getScreenContent() {
    const { chosenFood } = this.state;
    if (chosenFood === '') {
      return (
        <FoodTypeCollection selectFood={this.chooseFood}/>
      );
    }
    return (
      <FoodTypeResult selectedFood={chosenFood} selectFood={this.chooseFood}/>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        { this.getScreenContent() }
      </View>
    );
  }
}

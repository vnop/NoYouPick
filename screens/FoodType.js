import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/styles';
import FoodTypeCollection from '../components/FoodTypeCollection';
import FoodTypeResult from '../components/FoodTypeResult';

class FoodType extends Component {
  constructor() {
    super();
    this.state = {
      chosenFood: ''
    };
    this.chooseFood = this.chooseFood.bind(this);
  }
  static navigationOptions = {
    title: 'Random Food Type'
  }

  chooseFood(chosenFood) {
    this.setState({
      chosenFood
    });
  }

  getScreenContent() {
    if (this.state.chosenFood === '') {
      return (
        <FoodTypeCollection selectFood={this.chooseFood}/>
      );
    } else {
      return (
        <FoodTypeResult selectedFood={this.state.chosenFood} selectFood={this.chooseFood}/>
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

export default FoodType;

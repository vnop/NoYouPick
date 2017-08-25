import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './styles/styles';
import FoodType from './screens/FoodType';
import Restaurant from './screens/Restaurant';
import FlipIt from './screens/FlipIt';
import FoodButton from './components/FoodButton';
import RestaurantButton from './components/RestaurantButton';
import FlipButton from './components/FlipButton';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Can\'t Decide?'
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlipButton goToScreen={navigate} />
        <FoodButton goToScreen={navigate} />
        <RestaurantButton goToScreen={navigate} />
      </View>
    );
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
  FoodType: { screen: FoodType },
  Restaurants: { screen: Restaurant },
  Flip: { screen: FlipIt }
});

export default App;

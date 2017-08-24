import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './styles/styles';
import FoodType from './screens/FoodType';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Can\'t Decide?'
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
        >
          <Text style={styles.buttonText}>Flip For It</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => navigate('FoodType')}
        >
          <Text style={styles.buttonText}>Random Food Type</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
        >
          <Text style={styles.buttonText}>Random Restaurant Nearby</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
  FoodType: { screen: FoodType }
});

export default App;

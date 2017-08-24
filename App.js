import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './styles/styles';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Can\'t Decide?'
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.button}
        >
          <Text style={styles.buttonText}>Flip For It</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
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
  Home: { screen: HomeScreen }
});

export default App
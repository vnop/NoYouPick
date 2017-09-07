import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const { width } = Dimensions.get('window');

export default class FoodTypeResult extends Component {
  static PropTypes = {
    selectFood: PropTypes.func.isRequired,
    selectedFood: PropTypes.number.isRequired,
    foodData: PropTypes.array.isRequired
  }
  randomizeFood() {
    let max = this.props.foodData.length;
    let randomSelect = Math.floor(Math.random() * max);
    this.props.selectFood(randomSelect);
  }

  render() {
    let eat = this.props.foodData[this.props.selectedFood];
    return (
      <View style={styles.container}>

        <View style={{marginBottom: 5}}>
          <Text style={{marginLeft: 5}}>
            I feel like having...
            <Text style={tempStyles.foodText}>
              {eat.type}
            </Text>
          </Text>
          <Image
            source={{uri: eat.url}}
            style={{width, height: 200, marginBottom: 20}}
          />
        </View>

        <View>
          <TouchableHighlight
            style={tempStyles.button}
            onPress={() => this.randomizeFood()}
          >
            <Text style={styles.buttonText}>Pick Again</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const tempStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    backgroundColor: '#fefefe',
  },
  innerContainer2: {
    flex: 1,
    paddingLeft: 5,
  },
  innerContainer3: {
    backgroundColor: '#fefefe',
    paddingLeft: 5,
  },
  button: {
    backgroundColor: 'royalblue',
    padding: 20,
    borderRadius: 5,
    margin: 0,
    marginBottom: 1,
    alignItems: 'center',
  },
  foodText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

import React, { Component } from 'react';
import { View } from 'react-native';
import styles from '../styles/styles';
import FoodTypeCollection from '../components/FoodTypeCollection';
import FoodTypeResult from '../components/FoodTypeResult';
import fb from '../fb/firebase';
import { foodTypes, config } from '../config/config';

export default class FoodType extends Component {
  constructor() {
    super();
    this.state = {
      chosenFood: null,
      foodCollection: []
    };
  }

  componentWillMount() {
    let result = [];
    let imageUri = `gs://${config.storageBucket}/`;
    foodTypes.forEach(item => {
      fb.storage().refFromURL(imageUri).child(item.suffix).getDownloadURL()
        .then(url => {
          let info = { id: item.id, type: item.type, url };
          result = [...result, info];
        })
        .then(data => {
          this.setState({
            foodCollection: result
          });
        })
        .catch(err => console.warn('fb fail', err));
    });
  }

  static navigationOptions = {
    title: 'Random Food Type'
  }

  chooseFood = (chosenFood) => {
    this.setState({
      chosenFood
    });
  }

  getScreenContent() {
    const { chosenFood, foodCollection } = this.state;
    if (chosenFood === null) {
      return (
        <FoodTypeCollection
          selectFood={this.chooseFood}
          foodData={foodCollection}
        />
      );
    }
    return (
      <FoodTypeResult
        selectFood={this.chooseFood}
        selectedFood={chosenFood}
        foodData={foodCollection}
      />
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

import React, { Component } from 'react';
import {
  ScrollView,
  Dimensions,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const { width } = Dimensions.get('window');

export default class FoodTypeCollection extends Component {
  static PropTypes = {
    selectFood: PropTypes.func.isRequired,
    foodData: PropTypes.array.isRequired,
  }

  _randomizeFood = () => {
    let max = this.props.foodData.length;
    let randomSelect = Math.floor(Math.random() * max);
    this.props.selectFood(randomSelect);
  }

  render() {
    let imageWidth = width / 2;
    return (
      <View style={styles.container}>

        <View style={{ marginBottom: 1 }}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this._randomizeFood()}
          >
            <Text style={styles.buttonText}>What Am I Craving?</Text>
          </TouchableHighlight>
        </View>
        <ScrollView>
          <View style={styles.foodGrid}>
            { this.props.foodData.map((item, index) => {
              return (
                <Image
                  source={{uri: item.url}}
                  style={{ width: imageWidth, height: 180 }}
                  key={item.id}
                >
                  <View style={styles.fadeBack}>
                    <Text style={styles.fadeText}>
                      {item.type}
                    </Text>
                  </View>
                </Image>
              );
            }) }
          </View>
        </ScrollView>
      </View>
    );
  }
}

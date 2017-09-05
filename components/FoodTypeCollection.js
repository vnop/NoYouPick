import React, { Component } from 'react';
import {
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const { width } = Dimensions.get('window');

class FoodTypeCollection extends Component {
  static PropTypes = {
    selectFood: PropTypes.func.isRequired,
    foodData: PropTypes.array.isRequired,
  }

  randomizeFood() {
    let max = this.props.foodData.length;
    let randomSelect = Math.floor(Math.random() * max);
    this.props.selectFood(randomSelect);
  }

  render() {
    let imageWidth = width / 2;
    return (
      <View style={tempStyles.container}>

        <View style={tempStyles.foodButton}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.randomizeFood()}
          >
            <Text style={styles.buttonText}>What Am I Craving?</Text>
          </TouchableHighlight>
        </View>
        <ScrollView>
          <View style={tempStyles.foodGrid}>
            { this.props.foodData.map((item, index) => {
              return (
                <Image
                  source={{uri: item.url}}
                  style={{ width: imageWidth, height: 180 }}
                  key={item.id}
                >
                  <View style={{ backgroundColor: 'rgba(0,0,0,0.4)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 15,
                        fontWeight: 'bold'
                      }}
                    >
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

const tempStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  foodGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  foodButton: {
    marginBottom: 1,
  }
});

export default FoodTypeCollection;

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
import fb from '../fb/firebase';
import { foodTypes, config } from '../config/config';

const { width } = Dimensions.get('window');

class FoodTypeCollection extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  static PropTypes = {
    selectFood: PropTypes.func.isRequired,
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
            data: result
          });
        })
        .catch(err => console.warn('fb fail', err));
    });
  }

  randomizeFood() {
    // random algorithm to go here
    this.props.selectFood(foodTypes[0]);
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
            { this.state.data.map((item, index) => {
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

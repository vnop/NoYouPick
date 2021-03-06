import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, TouchableHighlight } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import styles from '../styles/styles';
import FoodButton from '../components/FoodButton';
import RestaurantButton from '../components/RestaurantButton';
import FlipButton from '../components/FlipButton';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      location: null,
      errorMessage: null,
    };
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({ errorMessage: 'Permission to access location was denied' });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  static navigationOptions = {
    title: 'Can\'t Decide?'
  }

  render() {
    const { navigate } = this.props.navigation;
    const { errorMessage } = this.state;
    let restaurantSection = null;
    if (errorMessage) {
      restaurantSection = <RestaurantButton
          goToScreen={navigate}
          msg={errorMessage}
          show={true}
        />;
    } else {
        restaurantSection = <RestaurantButton
          goToScreen={navigate}
          show={false}
        />;
    }
    return (
      <View style={[styles.container, addStyles.container]}>
        <View style={addStyles.buttonSpacing}>
          <FlipButton goToScreen={navigate} />
        </View>
        <View style={addStyles.middleButton}>
          <FoodButton goToScreen={navigate} />
        </View>
        <View style={addStyles.buttonSpacing}>
          {restaurantSection}
        </View>
      </View>
    );
  }
}

const addStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  buttonSpacing: {
    marginLeft: 25,
    marginRight: 25,
  },
  middleButton: {
    margin: 25,
  },
});

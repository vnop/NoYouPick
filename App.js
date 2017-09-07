import React, { Component } from 'react';
import { StyleSheet, Platform, Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants, Location, Permissions } from 'expo';
import styles from './styles/styles';
import FoodType from './screens/FoodType';
import Restaurant from './screens/Restaurant';
import FlipIt from './screens/FlipIt';
import FoodButton from './components/FoodButton';
import RestaurantButton from './components/RestaurantButton';
import FlipButton from './components/FlipButton';

class HomeScreen extends Component {
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
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
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
      <View style={tempStyles.container}>
        <View style={tempStyles.button1}>
          <FlipButton goToScreen={navigate} />
        </View>
        <View style={tempStyles.button2}>
          <FoodButton goToScreen={navigate} />
        </View>
        <View style={tempStyles.button3}>
          {restaurantSection}
        </View>
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

const tempStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    justifyContent: 'center',
  },
  button1: {
    marginLeft: 25,
    marginRight: 25,
  },
  button2: {
    margin: 25,
  },
  button3: {
    marginLeft: 25,
    marginRight: 25,
  }
});

export default App;

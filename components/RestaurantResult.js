import React, { Component } from 'react';
import { Linking, StyleSheet, Image, Text, View, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { WebBrowser } from 'expo';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

class RestaurantResult extends Component {
  static PropTypes = {
    selectRestaurant: PropTypes.func.isRequired,
    selectedRestaurant: PropTypes.number.isRequired,
    restaurants: PropTypes.array.isRequired
  }
  randomizeRestaurant() {
    let max = this.props.restaurants.length;
    let randomSelect = Math.floor(Math.random() * max);
    this.props.selectRestaurant(randomSelect);
  }

  _handleOpenWithWebBrowser(url) {
    WebBrowser.openBrowserAsync(url);
  }

  _handleOpenWithLinking(phone) {
    let phoneUrl = `tel:+1${phone}`;
    Linking.canOpenURL(phoneUrl).then(supported => {
      if(!supported) {
        console.log('Can\'t handle phone url: ' + phoneUrl);
      } else {
        Linking.openURL(phoneUrl)
        .catch(err => {
          console.warn('openURL error', err);
        });
      }
    }).catch(err => console.warn('An unexpected error happened', err));
  }

  render() {

    let chosenRestaurant = this.props.restaurants[this.props.selectedRestaurant].venue;
    let imageUri = `${chosenRestaurant.featuredPhotos.items[0].prefix}200${chosenRestaurant.featuredPhotos.items[0].suffix}`;

    return (
      <View style={tempStyles.container}>
        <View style={tempStyles.innerContainer}>
          <TouchableHighlight
            style={tempStyles.button}
            onPress={() => this.randomizeRestaurant()}
          >
            <Text style={styles.buttonText}>Pick Again</Text>
          </TouchableHighlight>
          <Image
            source={{uri: imageUri}}
            // use device width
            style={{width: 500, height: 150}}
          />
        </View>

        <View style={tempStyles.innerContainer3}>
          <Text style={tempStyles.foodText}>{chosenRestaurant.name}</Text>
        </View>
        <View style={tempStyles.innerContainer2}>
          <Text style={{marginBottom: 5}}>{chosenRestaurant.hours.status}</Text>
          <Text style={{fontWeight: 'bold'}}>Address</Text>
          <Text>{chosenRestaurant.location.formattedAddress[0]}</Text>
          <Text style={{marginBottom: 5}}>{chosenRestaurant.location.formattedAddress[1]}</Text>
          <Text style={{fontWeight: 'bold'}}>Phone</Text>
          <TouchableHighlight
            onPress={() => this._handleOpenWithLinking(chosenRestaurant.contact.phone)}
          >
            <Text style={{color: 'blue', marginBottom: 5}}>{chosenRestaurant.contact.formattedPhone}</Text>
          </TouchableHighlight>
          <Text style={{fontWeight: 'bold'}}>Website</Text>
          <TouchableHighlight
            onPress={() => this._handleOpenWithWebBrowser(chosenRestaurant.url)}
          >
            <Text style={{color: 'blue', marginBottom: 5}}>{chosenRestaurant.url}</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this._handleOpenWithWebBrowser(chosenRestaurant.menu.mobileUrl)}
          >
            <Text style={{color: 'blue', fontWeight: 'bold'}}>Menu</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const tempStyles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 100,
    // marginBottom: 100,
  },
  innerContainer: {
    // flex: 1,
    backgroundColor: '#fefefe',
    // overflow: 'hidden',
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
  innerContainer2: {
    flex: 1,
    paddingLeft: 5,
    // backgroundColor: '#',
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
  innerContainer3: {
    // flex: 1,
    backgroundColor: '#fefefe',
    paddingLeft: 5,
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'royalblue',
    padding: 20,
    // borderWidth: 1,
    borderRadius: 5,
    margin: 0,
    marginBottom: 50,
    alignItems: 'center',
  },
  foodText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default RestaurantResult;

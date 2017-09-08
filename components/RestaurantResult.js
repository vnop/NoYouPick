import React, { Component } from 'react';
import {
  Dimensions,
  Linking,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight } from 'react-native';
import { WebBrowser } from 'expo';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

const { width } = Dimensions.get('window');

export default class RestaurantResult extends Component {
  static PropTypes = {
    selectRestaurant: PropTypes.func.isRequired,
    selectedRestaurant: PropTypes.number.isRequired,
    restaurants: PropTypes.array.isRequired
  }

  _randomizeRestaurant = () => {
    let max = this.props.restaurants.length;
    let randomSelect = Math.floor(Math.random() * max);
    this.props.selectRestaurant(randomSelect);
  }

  _handleOpenWithWebBrowser = (url) => {
    WebBrowser.openBrowserAsync(url);
  }

  _handleOpenWithLinking = (phone) => {
    let phoneUrl = `tel:+1${phone}`;
    Linking.canOpenURL(phoneUrl).then(supported => {
      if(!supported) {
        console.log('Can\'t handle phone url: ' + phoneUrl);
      } else {
        Linking.openURL(phoneUrl)
        .catch(err => {
          // console.warn('openURL error', err);
        });
      }
    }).catch(err => console.warn('An unexpected error happened', err));
  }

  render() {
    let chosenRestaurant = this.props.restaurants[this.props.selectedRestaurant].venue;
    let imageUri = `${chosenRestaurant.featuredPhotos.items[0].prefix}${width}${chosenRestaurant.featuredPhotos.items[0].suffix}`;
    let openHours = null;
    if (chosenRestaurant.hours.status) {
      openHours = chosenRestaurant.hours.status;
    }
    let phoneContact = (<Text>Not Available</Text>);
    if (chosenRestaurant.contact.phone && chosenRestaurant.contact.formattedPhone) {
      phoneContact = (<TouchableHighlight
            onPress={() => this._handleOpenWithLinking(chosenRestaurant.contact.phone)}
          >
            <Text style={{ color: 'blue', marginBottom: 5 }}>{chosenRestaurant.contact.formattedPhone}</Text>
          </TouchableHighlight>);
    }
    let webLink = (<Text>Not Available</Text>);
    if (chosenRestaurant.url) {
      webLink = (<TouchableHighlight
            onPress={() => this._handleOpenWithWebBrowser(chosenRestaurant.url)}
          >
            <Text style={{ color: 'blue', marginBottom: 10 }}>{chosenRestaurant.url}</Text>
          </TouchableHighlight>);
    }
    let menuLink = (<Text>Menu Not Available</Text>);
    if (chosenRestaurant.menu) {
      menuLink = (<TouchableHighlight
            onPress={() => this._handleOpenWithWebBrowser(chosenRestaurant.menu.mobileUrl)}
          >
            <Text style={{ color: 'blue', fontWeight: 'bold' }}>Menu</Text>
          </TouchableHighlight>);
    }
    return (
      <View style={styles.container}>
        <View style={{ paddingLeft: 5 }}>
          <Text style={addStyles.foodText}>
            {chosenRestaurant.name}
          </Text>
          <Text style={{ marginBottom: 5 }}>
            {openHours}
          </Text>
        </View>
        <Image
          source={{uri: imageUri}}
          style={{ width, height: 200, marginBottom: 5 }}
        />

        <View style={addStyles.innerContainer2}>
          <Text style={{ fontWeight: 'bold' }}>Address</Text>
          <Text>{chosenRestaurant.location.formattedAddress[0]}</Text>
          <Text style={{ marginBottom: 5 }}>{chosenRestaurant.location.formattedAddress[1]}</Text>
          <Text style={{ fontWeight: 'bold' }}>Phone</Text>
          {phoneContact}
          <Text style={{ fontWeight: 'bold' }}>Website</Text>
          {webLink}
          {menuLink}
        </View>
        <TouchableHighlight
          style={[styles.button, addStyles.button]}
          onPress={() => this._randomizeRestaurant()}
        >
          <Text style={styles.buttonText}>Pick Again</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const addStyles = StyleSheet.create({
  innerContainer2: {
    flex: 1,
    paddingLeft: 5,
  },
  button: {
    margin: 0,
    marginBottom: 1,
  },
  foodText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

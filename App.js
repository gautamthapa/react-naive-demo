/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import placeImage from "./src/assets/golden_temple.jpg";


export default class App extends Component {

  state ={
    places: [],
    selectedPlace: null
  };
  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri: "https://c1.hiqcdn.com/photos/sh/shareiq-272-1408512090-332930-JPG-destreviewimages-720x512-1408512090-cropped.JPG"
          }
        })
      };
    });
  };
  placeDeletedHandler = () =>{
       this.setState(prevState => {
      return {
        places: prevState.places.filter(place =>{
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  }

  placeSelectedHandler = key =>{
    this.setState(prevState => {
      return{
        selectedPlace : prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <PlaceDetail 
      selectedPlace={this.state.selectedPlace}
      onItemDeleted={this.placeDeletedHandler}
      onModalClosed={this.modalClosedHandler} />
      <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      <PlaceList places={this.state.places} 
      onItemSelected={this.placeSelectedHandler}/>
      </View>
    );
  }
}  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});

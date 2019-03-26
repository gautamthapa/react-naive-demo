/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';
import placeImage from "./src/assets/golden_temple.jpg";


class App extends Component {
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
    console.log('Place Added!');
  };

  placeDeletedHandler = () =>{
       this.props.onDeletePlace();
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }

  placeSelectedHandler = key =>{
    this.props.onSelectPlace(key);
  }

  render() {
    return (
      <View style={styles.container}>
      <PlaceDetail 
      selectedPlace={this.props.selectedPlace}
      onItemDeleted={this.placeDeletedHandler}
      onModalClosed={this.modalClosedHandler} />
      <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      <PlaceList places={this.props.places} 
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

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispathchToProps = dispatch =>{
  return {
    onAddPlace : (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()) 
  };
};

export default connect(mapStateToProps, mapDispathchToProps)(App);




// ========================================================================
state = {
  respStyles: {
      pwContainerDirection: "column",
      pwContainerJustifyContent: "flex-start",
      pwWrapperWidth: "100%"
  }
}

constructor(props){
  super(props);
  Dimensions.addEventListener("change", dims => {
      this.setState({
          respStyles: {
              pwContainerDirection: Dimensions.get('window').height > 500 ? "column" : "row",
              pwContainerJustifyContent: Dimensions.get('window').height > 500 ? "flex-start" : "space-between",
              pwWrapperWidth: Dimensions.get('window').height > 500 ? "100%" : "45%"
          }
      })
  });
}
// ========================================================================
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

import ListItem from './src/components/ListItem/ListItem';

type Props = {};
export default class App extends Component<Props> {

  state ={
    placeName: '',
    places: []
  };
  placeNameChangeHandler = val =>{
    this.setState({
      placeName: val
    })
  }

  placeSubmitHandler =()=>{
    if(this.state.placeName.trim() === ""){
      return;
    }
    this.setState(prevState =>{
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    })
  }

  render() {
    const placesOutput = this.state.places.map((place, i) =>(
      <ListItem key={i} placeName={place}/>
    ));
    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput
      style={styles.placeInput}
      value={this.state.placeName}
      placeholder="Enter place name"
      onChangeText={this.placeNameChangeHandler}
      />
       <Button title="Add" 
       style={styles.placeButton}
       onPress={this.placeSubmitHandler} />
       <Text>This is test</Text>
      </View>
      <View style={styles.listContainer}>
        {placesOutput}
      </View>
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
  },
  inputContainer: {
  //  flex: 1, 
  width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput:{
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});

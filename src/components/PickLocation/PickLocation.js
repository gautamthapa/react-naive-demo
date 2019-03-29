import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

class PickLocation extends Component {

    state = {
        focusedLocaton: {
        latitude: 37.7900352,
        longitude: -122.4013726,
        latitudeDelta: 0.0122,
        longitudeDelta: 
        Dimensions.get("window").width /
        Dimensions.get("window").height *
        0.0122
        },
        locationChosen: true
    }

    pickLocationHandler = event => {
        const coords = event.nativeEvent.coordinate;
        this.setState(prevState => {
            return {
                focusedLocaton: {
                    ...prevState.focusedLocaton,
                    latitude: coords.latitude,
                    longitude: coords.longitude 
                },
                locationChosen: true
            }
        });
    }

    render() {

        let marker = null;

        if(this.state.locationChosen) {
            marker = <MapView.Marker coordinate={this.state.focusedLocaton} />
        }
        return(
            <View style={styles.container}>
                <MapView
                initialRegion={this.state.focusedLocaton}
                region={this.state.focusedLocaton}
                style={styles.map}
                onPress={this.pickLocationHandler}
                >
                {marker}
                </MapView>
                <View style={styles.buttons}>
                    <Button title="Locate Me" />
                </View>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    map: {
        width: "100%",
        height: 250
    },
    buttons: {
        margin: 8
    }
});


export default PickLocation;
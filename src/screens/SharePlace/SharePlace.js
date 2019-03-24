import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from "react-redux";

import { addPlace } from "../../store/actions/index";
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import imagePlaceholder from '../../assets/golden_temple.jpg';

class SharePlaceScreen extends Component{

    constructor(props){
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        console.log(event);
        if(event.type === "NavBarButtonPress"){
            if(event.id === "sideDrawerToggle"){
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            }
        }
    }


    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    }

    render(){
        return(
            <ScrollView>
            <View style={styles.container}>
                <MainText>
                    <HeadingText>Share a Place With Us!</HeadingText>
                </MainText>
                <View style={styles.placeholder}>
                    <Image source={imagePlaceholder} style={styles.previewImage} />
                </View>
                <View style={styles.buttons}>
                    <Button title="Pick Image" />
                </View>
                <View style={styles.placeholder} >
                    <Text>Map</Text>
                </View>
                <View style={styles.buttons}>
                    <Button title="Locate Me" />
                </View>
                <DefaultInput placeholder="Place Name" />
                <View style={styles.buttons}>
                    <Button title="Share the Place!" />
                </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150
    },
    previewImage: {
        width: "100%",
        height: "100%"
    },
    buttons: {
        margin: 8
    }
});

const mapDispathToProps = dispath => {
    return {
        onAddPlace: (placeName) => dispath(addPlace(placeName))
    };
};

export default connect(null, mapDispathToProps)(SharePlaceScreen);
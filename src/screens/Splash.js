//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Splash = () => {
    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        fontSize: 22
    },
});

//make this component available to the app
export default Splash;

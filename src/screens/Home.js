import React, { Component } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { AuthContext } from '../App/context'

// create a component
const Home = ({navigation}) => {
    const { signOut } = React.useContext(AuthContext)
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <View style={styles.margin}>
                <Button title='SignOut' 
                onPress={()=> signOut()} />
            </View>
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
    },
    margin: {
        margin: 20
    }
});

//make this component available to the app
export default Home;

//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ayuColor } from '../utils/colors'

const SignIn = ({navigation}) => {
    const [mobile, setMobile] = React.useState('9999574804')
    const [error, setError] = React.useState(false)

    const validate = () => {
        (mobile === '' || mobile.length < 10)
        ? (
            console.log('hello', mobile),
            setError(true)
        )
        : (
            setError(false),
            console.log('hello 2', mobile),
            navigation.navigate('Otp', {phone: mobile})
        )
    }
    
    return (
        <View style={styles.container}>
            <View>
                <Image style={{width: 80, height: 80, marginBottom: 50}} source={require('../../assets/ayu_logo.png')} />
                <Text style={{fontSize: 26, fontWeight: 'bold'}}>Welcome to Ayu.Health</Text>
                <Text style={{fontSize: 15, marginTop: 10, color: '#595959'}}>Enter your details below to access your medical reports and hospital</Text>
            </View>
            <View style={{height: 60, flexDirection: 'row', marginTop: 50, borderColor: (error) ? 'red' : ayuColor, borderWidth: 1, borderRadius: 7}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name="call" color='grey' size={24} />
                </View>
                <View style={styles.validation}>
                    <TextInput 
                        style={styles.textInput}
                        value={mobile}
                        placeholder='Enter mobile number'
                        keyboardType='numeric'
                        onChangeText={(text) => {setMobile(text.replace(/[^0-9]/g, '')), setError(false)}}
                        maxLength={10}
                    />
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Icon name="chevron-forward-circle" color= {(error) ? '#D3F2F7' : ayuColor} size={35} 
                        onPress={() => validate()}
                    />
                </View>
            </View>
            
            <View style={{alignSelf: 'stretch'}}>
                {
                    (error) ?
                    <Text style={{color: '#ff0000', fontSize: 13}}>Please enter 10 digit mobile number</Text>
                    :
                    <Text style={{color: '#ff0000', fontSize: 0}}></Text>
                }
            </View>
            <Text style={{color: 'grey', marginTop: 10}}>OTP code will be sent to this number</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        backgroundColor: '#fff',
        flexDirection: 'column',
        padding: 30
    },
    validation: {
        flexDirection: 'row',
        flex: 6
    },
    textInput: {
        backgroundColor: '#fff',
        width: '100%',
        fontSize: 18
    }
});

export default SignIn;

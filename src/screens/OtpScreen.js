//import liraries
import React, { Component, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import HamburgerMenuHeader from './HamburgerMenuHeader'
import OTPTextInput from 'react-native-otp-textinput'
import { ayuColor } from '../utils/colors';
import HeaderInOtp from '../utils/HeaderInOtp'
import { AuthContext } from '../App/context'

const OtpScreen = ( {route, navigation} ) => {
    const { phone } = route.params
    const [isVerifyEnabled, setIsVerifyEnabled] = React.useState(false)
    const { signIn } = React.useContext(AuthContext)

    const handleOtpChange = (text) => {
        if(text && text.length == 4){
            setIsVerifyEnabled(true)
            return;
        }
        setIsVerifyEnabled(false)
    }

    const maskNumber = (number) => {
        let maskNumber = '********' + number.substring(8,10)
        return maskNumber
    }

    const verifyOtp = () => {
        if(isVerifyEnabled){
            signIn()
        }
    }
    
    return (
        <View style={{flexDirection: 'column', flex: 1, backgroundColor: '#fff'}}>
            <HeaderInOtp navigation = {navigation} title = 'Verify phone number'/>
            <View style={{flexDirection: 'column', paddingVertical: 40, paddingHorizontal: 30}}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Enter OTP Code</Text>
                <Text style={{ fontSize: 15, color: '#595959' }}>Please verify your number with 4-digit OTP code sent to {maskNumber(phone)}</Text>
                <OTPTextInput
                    handleTextChange={(text) => {handleOtpChange(text)}}
                    containerStyle={styles.textInputContainer}
                    textInputStyle={styles.roundedTextInput}
                    inputCount={4}
                    inputCellLength={1}
                    tintColor={ayuColor}
                />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 15 }}>Didn't receive code?</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' ,color: '#f27e0a' ,paddingHorizontal: 5}}>Resend</Text>
                </View>

                <TouchableOpacity
                style={{marginTop: 50, backgroundColor: (isVerifyEnabled) ? '#f27e0a' : '#f2ceaa', height: 50, width: 180, borderRadius: 7, justifyContent: 'center', alignItems: 'center'}}
                activeOpacity={0.8}
                onPress={() => {verifyOtp()}}>
                    <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>Verify OTP</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    textInputContainer: {
        marginVertical: 30,
        marginRight: 150
      },
      roundedTextInput: {
        borderRadius: 10,
        borderWidth: 2,
      },
});


//make this component available to the app
export default OtpScreen;

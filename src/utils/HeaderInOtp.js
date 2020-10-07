import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ayuColor } from './colors'

const HeaderInOtp = ({ navigation, title }) => {
    return (
        // <View style={{ backgroundColor: ayuColor, height: 60,  padding: 15, flexDirection: 'column', alignItems: 'center' }}>
        //     <View style={{ backgroundColor: 'red', height: 60,  padding: 15, alignItems: 'center' }}></View>
        //     <View style={{flexDirection: 'row'}}>
        //         <Text style={{flex: 9, color: '#fff', fontSize: 20, marginHorizontal: 20}}>{title}</Text>
        //         <Icon
        //             size={30}
        //             name='close-outline'
        //             style={{color: '#fff', flex: 1}}
        //             onPress={() => navigation.goBack()}
        //         />
        //     </View>
            
        // </View>

        <View>
            <View style={{backgroundColor: '#ebebeb', height: 60}}>

            </View>
            <View style={{backgroundColor: ayuColor, height: 60, justifyContent: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 9, color: '#fff', fontSize: 20, fontWeight: 'bold', marginHorizontal: 20}}>{title}</Text>
                    <Icon
                        size={30}
                        name='close-outline'
                        style={{color: '#fff', flex: 1}}
                        onPress={() => navigation.goBack()}
                    />
                </View>
            </View>
        </View>
                    

    );
};

export default HeaderInOtp;

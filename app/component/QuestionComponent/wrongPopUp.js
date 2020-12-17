import React from 'react';
import {  ImageBackground, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; 

function wrongPopUp({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <LinearGradient
                // Background Linear Gradient
                colors={['tomato', 'lightcoral']}
                style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: "100%"
                }}
            />

            <AntDesign name="frowno" size={180} color="white" />
            <Text style={{ fontSize: 30 , color:'white', margin:60 }}>哎呀!你答錯喇!</Text>
            {/* <Button color='white' onPress={() => navigation.navigate('MapsScreen')} title="返回" />         */}
            <TouchableHighlight
                style={{width: 60,
                height: 40,
                borderColor: 'white', 
                borderWidth: 1,
                margin:10,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center'}}
                onPress={() => navigation.navigate('MapsScreen')}
                underlayColor='#fff'>
                    <Text style={{color:'white'}}>返回</Text>
            </TouchableHighlight>
                    
        </View>
    );
}

export default wrongPopUp;
import React from 'react';
import {  ImageBackground, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; 

function CorrectPopUp({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <LinearGradient
                // Background Linear Gradient
                colors={[  'palegreen' ,'aquamarine']}
                style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: "100%"
                }}
            />          
            <AntDesign name="smileo" size={180} color="white" />
            <Text style={{ fontSize: 30 , color:'white', margin:60  }}>哈哈!你答啱喇!</Text>
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


            {/* <Button onPress={() => navigation.navigate('MapsScreen')} title="返回" /> */}
        </View>
    );
}

export default CorrectPopUp;
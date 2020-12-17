import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';

function Intro(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>This is Intro!</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Intro;
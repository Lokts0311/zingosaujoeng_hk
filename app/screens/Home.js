import React from 'react';
import {  ImageBackground, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Entypo, FontAwesome5, AntDesign } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

function WelcomeScreen({ navigation }) {
    return (
            <ImageBackground 
                blurRadius={7}
                style={styles.background}
                source={require("../assets/dimsum.jpg")}
            >
                <StatusBar style='dark' />
                <View style={styles.logoContainer}>
                    <Text style={styles.title}>港人的自我修養</Text>
                </View>
                <View style={styles.buttonSets}>

                    <TouchableHighlight style={styles.button} underlayColor='orange' onPress={() => navigation.navigate('IntroScreen')}>
                        <View>
                            <LinearGradient
                                colors={[ 'khaki' ,'lemonchiffon']}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    height: "136%",
                                    borderRadius:17
                                }}
                            />
                            <View style={{ justifyContent:'center',alignItems:'center'}}>
                                <Entypo name="open-book" size={50} color='grey' style={{margin:32}} />
                                <Text style={styles.text}>簡介</Text>
                            </View>    
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} underlayColor='orange' onPress={() => navigation.navigate('MapsScreen')}>
                        <View>
                            <LinearGradient
                                colors={[ 'khaki' ,'lemonchiffon']}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    height: "138%",
                                    borderRadius:17
                                }}
                            />
                            <View style={{ justifyContent:'center',alignItems:'center'}}>
                                <FontAwesome5 name="map-marked" size={50} color="blue" style={{margin:32}} />
                                <Text style={styles.text}>千履奇緣</Text>
                            </View>    
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} underlayColor='orange' onPress={() => navigation.navigate('PrizeScreen')}>
                        <View>
                            <LinearGradient
                                colors={[ 'khaki' ,'lemonchiffon']}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    height: "138%",
                                    borderRadius:17
                                }}
                            />
                            <View style={{ justifyContent:'center',alignItems:'center'}}>
                                <AntDesign name="gift" size={50} color="red" style={{margin:32}} />
                                <Text style={styles.text}>獎賞換領</Text>
                            </View>    
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button} underlayColor='orange' onPress={() => navigation.navigate('RankScreen')}>
                        <View>
                            <LinearGradient
                                colors={[ 'khaki' ,'lemonchiffon']}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    height: "138%",
                                    borderRadius:17
                                }}
                            />
                            <View style={{ justifyContent:'center',alignItems:'center'}}>
                                <AntDesign name="Trophy" size={50} color="gold" style={{margin:32}} />
                                <Text style={styles.text}>排行榜</Text>
                            </View>    
                        </View>
                        {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <AntDesign name="Trophy" size={50} color="black" style={{marginBottom:10}} />
                            <Text style={styles.text}>排行榜</Text>
                        </View> */}
                    </TouchableHighlight>
                </View>
            </ImageBackground>
            
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        position: 'absolute',
        top: 80,
        alignItems: 'center'
    },
    title:{
        fontSize:40,
        color:'goldenrod'
    },
    buttonSets: {
        flexDirection: 'row',
        top: 40,
        flex: 0.7,
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    button:{
        width: 150,
        height: 200,
        marginTop: 40,
        borderColor: 'peachpuff', 
        borderWidth: 2,
        borderRadius: 20,
    },
    text:{
        fontSize:28,
        color:'dimgray'
    },
})

export default WelcomeScreen;
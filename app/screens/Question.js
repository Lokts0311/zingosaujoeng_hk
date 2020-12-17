import React , { useState } from 'react';
import { StyleSheet, View, Text ,TouchableOpacity,  ImageBackground } from 'react-native';

function Question({navigation}) {

    const correctAnswer = 'D';

    const [colorA,setColorA] = useState('#e1f5fe');
    const [colorB,setColorB] = useState('#e1f5fe');
    const [colorC,setColorC] = useState('#e1f5fe');
    const [colorD,setColorD] = useState('#e1f5fe');

    function checkAnswer(choice){
        
        switch(choice){
            case 'A':
                if(correctAnswer == choice){
                    console.log('You choose right ans!');
                    setColorA('#00e676')
                    navigation.navigate('CorrectPopUp');
                }
                else{
                    console.log('You choose wrong ans!');
                    setColorA('#d72730')
                    navigation.navigate('WrongPopUp');
                }
                break;
            case 'B':
                if(correctAnswer == choice){
                    console.log('You choose right ans!');
                    setColorB('#00e676')
                    navigation.navigate('CorrectPopUp');
                }
                else{
                    console.log('You choose wrong ans!');
                    setColorB('#d72730')
                    navigation.navigate('WrongPopUp');
                }
                break;
            case 'C':
                if(correctAnswer == choice){
                    console.log('You choose right ans!');
                    setColorC('#00e676')
                    navigation.navigate('CorrectPopUp');
                }
                else{
                    console.log('You choose wrong ans!');
                    setColorC('#d72730')
                    navigation.navigate('WrongPopUp');
                }
                break;
            case 'D':
                if(correctAnswer == choice){
                    console.log('You choose right ans!');
                    setColorD('#00e676');
                    navigation.navigate('CorrectPopUp');
                }
                else{
                    console.log('You choose wrong ans!');
                    setColorD('#d72730')
                    navigation.navigate('WrongPopUp');
                }
                break;
            default:
                break;

        }
    }

    return (
        <ImageBackground 
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Text style={{fontSize: 20}}>問題</Text>
                <Text style={{fontSize: 25}}>利東街，俗稱囍帖街，香港歌手謝安琪的同名歌曲於哪一年奪得年度歌曲？</Text>
            </View>
            <View style={
                styles.testButton
            }>
                <TouchableOpacity 
                    style={{
                        borderWidth: 4,
                        borderRadius: 50,
                        backgroundColor: colorA,
                        width: '100%',
                        height: '20%',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}
                    onPress={() => checkAnswer('A')}
                >
                    <Text style={{fontSize: 20}}>
                        甲
                    </Text>
                    <Text style={{fontSize: 25}}>二零零零年</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{
                        borderWidth: 4,
                        borderRadius: 50,
                        backgroundColor: colorB,
                        width: '100%',
                        height: '20%',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}
                    onPress={() => checkAnswer('B')}
                >
                    <Text style={{fontSize: 20}}>
                        乙
                    </Text>
                    <Text style={{fontSize: 25}}>二零零四年</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{
                        borderWidth: 4,
                        borderRadius: 50,
                        backgroundColor: colorC,
                        width: '100%',
                        height: '20%',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'                     
                    }}
                    onPress={() => checkAnswer('C')}
                >
                    <Text style={{fontSize: 20}}>
                        丙
                    </Text>
                    <Text style={{fontSize: 25}}>二零零七年</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{
                        borderWidth: 4,
                        borderRadius: 50,
                        backgroundColor: colorD,
                        width: '100%',
                        height: '20%',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}
                    onPress={() => checkAnswer('D')}
                >
                    <Text style={{fontSize: 20}}>
                        丁
                    </Text>
                    <Text style={{fontSize: 25}}>二零零八年</Text>
                </TouchableOpacity>
            </View>

            
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        padding: 24,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    testButton: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: "65%",
    },
    logoContainer: {
        borderWidth: 4,
        borderRadius: 6,
        justifyContent: 'space-evenly',
        width: '100%',
        height: "22%",
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
    }
})

export default Question;
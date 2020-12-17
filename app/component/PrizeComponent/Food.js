import React from 'react';
import { Text, View , SafeAreaView, ScrollView, TouchableOpacity, Alert} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
// eldage

function Food(props) {

    

    return (
        <View>
            <StatusBar style='dark' />
            <SafeAreaView>
            </SafeAreaView>
            <View style={{
                    flexDirection:'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '10%'
               }}>
                <MaterialCommunityIcons name="food" size={25} color='black' />
                <Text style={{
                    color: 'black',
                    fontSize: 25
                }}>飲食</Text>  
            </View>
            <View style={{ height:'100%'}}>
                <ScrollView style={{ backgroundColor: 'white'}}
                            contentContainerStyle={{ paddingBottom: '45%'}}
                > 
                    <LinearGradient
                        colors={[ 'palegreen' ,'aquamarine']}
                        style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: "100%"
                        }}
                    /> 
                    <View style={{marginHorizontal: 10,
                            marginVertical: 10,
                            borderRadius: 10,
                            backgroundColor: 'lightyellow',
                            shadowColor: '#000000',
                            shadowOpacity: 0.4,
                            shadowRadius: 1}}>

                        <View style={{
                            marginVertical: 10,
                            height: 150,
                            backgroundColor: 'white'}}>
                        </View>

                        <View style={{marginHorizontal: 10}}>
                            <Text style={{fontSize: 15}} >[店舖名稱]</Text>
                            <Text style={{fontSize: 15, marginTop: 5}}>積分: [xxxx]</Text>
                            <Text style={{fontSize: 15, marginVertical: 5}}>剩餘: [xxxx]</Text>
                        </View>

                        <TouchableOpacity
                            style={{ alignItems: "center",
                            backgroundColor: "darkgrey",
                            padding: 10,
                            borderBottomStartRadius: 10,
                            borderBottomEndRadius: 10}}
                            onPress={()=> Alert.alert("換領","你是否確定換領?",[ {text: '是', onPress: ()=> console.log('yes')},
                                                                                {text: '否', onPress: ()=> console.log('no')}])}
                        >
                            <Text>換領</Text>
                        </TouchableOpacity>
                    </View>         

                    <View style={{marginHorizontal: 10,
                            marginVertical: 10,
                            borderRadius: 10,
                            backgroundColor: 'lightyellow',
                            shadowColor: '#000000',
                            shadowOpacity: 0.4,
                            shadowRadius: 1}}>

                        <View style={{
                            marginVertical: 10,
                            height: 150,
                            backgroundColor: 'white'}}>
                        </View>

                        <View style={{marginHorizontal: 10}}>
                            <Text style={{fontSize: 15}} >[店舖名稱]</Text>
                            <Text style={{fontSize: 15, marginTop: 5}}>積分: [xxxx]</Text>
                            <Text style={{fontSize: 15, marginVertical: 5}}>剩餘: [xxxx]</Text>
                        </View>

                        <TouchableOpacity
                            style={{ alignItems: "center",
                            backgroundColor: "darkgrey",
                            padding: 10,
                            borderBottomStartRadius: 10,
                            borderBottomEndRadius: 10}}
                            onPress={()=> Alert.alert("換領","你是否確定換領?",[ {text: '是', onPress: ()=> console.log('yes')},
                                                                                {text: '否', onPress: ()=> console.log('no')}])}
                        >
                            <Text>換領</Text>
                        </TouchableOpacity>
                    </View>         

                    <View style={{marginHorizontal: 10,
                            marginVertical: 10,
                            borderRadius: 10,
                            backgroundColor: 'lightyellow',
                            shadowColor: '#000000',
                            shadowOpacity: 0.4,
                            shadowRadius: 1}}>

                        <View style={{
                            marginVertical: 10,
                            height: 150,
                            backgroundColor: 'white'}}>
                        </View>

                        <View style={{marginHorizontal: 10}}>
                            <Text style={{fontSize: 15}} >[店舖名稱]</Text>
                            <Text style={{fontSize: 15, marginTop: 5}}>積分: [xxxx]</Text>
                            <Text style={{fontSize: 15, marginVertical: 5}}>剩餘: [xxxx]</Text>
                        </View>

                        <TouchableOpacity
                            style={{ alignItems: "center",
                            backgroundColor: "darkgrey",
                            padding: 10,
                            borderBottomStartRadius: 10,
                            borderBottomEndRadius: 10}}
                            onPress={()=> Alert.alert("換領","你是否確定換領?",[ {text: '是', onPress: ()=> console.log('yes')},
                                                                                {text: '否', onPress: ()=> console.log('no')}])}
                        >
                            <Text>換領</Text>
                        </TouchableOpacity>
                    </View>         
        
                </ScrollView>
            </View>
        </View>
        

    );
}



export default Food;
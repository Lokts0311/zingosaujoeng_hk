import React from 'react';
import { Text, View , SafeAreaView, FlatList, StyleSheet, ScrollView } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

function accumulateScore(props) {
    const DATA = [
        {
            key: 'Devin',
            score: 500
        },
        {
            key: 'Dan',
            score: 450
        },
        {
            key: 'Dominic',
            score: 440
        },
        {
            key: 'Jackson',
            score: 430
        },
        {
            key: 'James',
            score: 415
        },
        {
            key: 'Joel',
            score: 395
        },
        {
            key: 'John',
            score: 385
        },
        {
            key: 'Jillian',
            score: 370
        },
        {
            key: 'Jimmy',
            score: 300
        },
        {   
            key: 'Julie',
            score: 100
        },
        {   
            key: 'Jack',
            score: 5
        }
    ];
      
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
                <Entypo name="bar-graph" color='black' size={25} />
                <Text style={{
                color: 'black',
                fontSize: 25,
              }}>累積得分</Text>  
            </View>
              
            <FlatList
                data={DATA}
                style={{backgroundColor:'lavender'}}
                contentContainerStyle={{ paddingBottom: '20%'}}
                renderItem={({item}) => 
                    <View style={styles.item}>
                        {/* <View>
                            <Text>
                                1
                            </Text>
                        </View> */}
                        <LinearGradient
                            colors={[ 'palegreen' ,'aquamarine']}
                            style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                borderRadius: 15,
                                height:"340%"
                            }}
                        /> 
                        <View>
                            <Text>
                                {item.key}
                            </Text>
                        </View>
                        <View>
                            <Text>
                               {item.score}
                            </Text>
                        </View>
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'white',
      padding: 20,
      marginVertical: 6,
      marginHorizontal: 6,
      borderRadius: 20,
      shadowColor: '#000000',
      shadowOpacity: 0.4,
      shadowRadius: 1,
      //marginHorizontal: 16,
    },
});
export default accumulateScore;
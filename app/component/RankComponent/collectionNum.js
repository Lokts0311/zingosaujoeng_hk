import React, {useState} from 'react';
import { Text, View , SafeAreaView, FlatList, StyleSheet} from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

function collectionNum(props) {

    const DATA = [
        {
            key: 'Jillian',
            score: 14
        },
        {
            key: 'Joel',
            score: 14
        },
        {
            key: 'James',
            score: 13
        },
        {
            key: 'Mike',
            score: 13
        },
        {
            key: 'Dominic',
            score: 12
        },
        {
            key: 'Dan',
            score: 11
        },
        {
            key: 'John',
            score: 9
        },
        {
            key: 'Jimmy',
            score: 8
        },
        {
            key: 'Jackson',
            score: 4
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
                   <Feather name="box" color='black' size={25} />
            <Text style={{
                color: 'black',
                fontSize: 25,
              }}>收集品數量</Text>  
            </View>

            <FlatList
                data={DATA}
                style={{backgroundColor:'lavendero'}}
                contentContainerStyle={{ paddingBottom: '20%'}}
                renderItem={({item}) => 
                    <View style={styles.item}>
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
                        {/* <View>
                            <Text>
                                {rank}
                            </Text>
                        </View> */}
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
      //borderWidth: 5,
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
    title: {
      fontSize: 32,
    },
});
export default collectionNum;
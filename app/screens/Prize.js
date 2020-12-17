import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Food from '../component/PrizeComponent/Food';
import Workshop from '../component/PrizeComponent/Workshop';
import Others from '../component/PrizeComponent/Others';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; 


function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Food"
            tabBarOptions={{
                activeTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
                name="Food"
                component={Food}
                options={{
                tabBarLabel: '飲食',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="food" size={size} color={color} />
                ),
                }}
            />
            <Tab.Screen
                name="Workshop"
                component={Workshop}
                options={{
                tabBarLabel: '工作坊',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="file-document-box-outline" size={size} color={color} />
                ),
                }}
            />
            <Tab.Screen
                name="Others"
                component={Others}
                options={{
                tabBarLabel: '其他',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="more-horiz" size={size} color={color} />
                ),
                }}
            />
        </Tab.Navigator>
    )
}

const Tab = createBottomTabNavigator();


function Prize(props) {
    return (
        <MyTabs/>
    );
}

export default Prize;
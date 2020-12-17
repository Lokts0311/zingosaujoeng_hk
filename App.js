import React from 'react';

import Login from './app/screens/Login';
import HomeScreen from './app/screens/Home';
import IntroScreen from './app/screens/Intro';
import PrizeScreen from './app/screens/Prize';
import RankScreen from './app/screens/Rank';
import MapsScreen from './app/screens/Maps';
import QuestionScreen from './app/screens/Question';
import CorrectPopUp from './app/component/QuestionComponent/correctPopUp';
import WrongPopUp from './app/component/QuestionComponent/wrongPopUp';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }} 
      initialRouteName="HomeScreen">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="MapsScreen" component={MapsScreen} />
        <Stack.Screen name="PrizeScreen" component={PrizeScreen} />
        <Stack.Screen name="RankScreen" component={RankScreen} />
        <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
        <Stack.Screen name="CorrectPopUp" component={CorrectPopUp} />
        <Stack.Screen name="WrongPopUp" component={WrongPopUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


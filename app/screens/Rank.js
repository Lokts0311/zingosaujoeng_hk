import * as React from 'react';
import { Text, View , SafeAreaView, Header} from 'react-native';

import accumulateScore from '../component/RankComponent/accumulateScore';
import collectionNum from '../component/RankComponent/collectionNum';

//expo install react-native-gesture-handler react-native-reanimated react-native-screens @react-navigation/bottom-tabs
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//expo install @expo/vector-icons
import { Entypo, Feather } from '@expo/vector-icons'; 


function MyTabs() {
    return (
        <Tab.Navigator
      initialRouteName="accumulateScore"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="accumulateScore"
        component={accumulateScore}
        options={{
          tabBarLabel: '累積得分',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="bar-graph" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="collectionNum"
        component={collectionNum}
        options={{
          tabBarLabel: '收集品數量',
          tabBarIcon: ({ color, size }) => (
            <Feather name="box" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function Rank(props) {
    return (
        <MyTabs/>
    );
}

export default Rank;

import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from "../AuthScreen/ProfileScreen";
import ArticleScreen from "./ArticleScreen";
import { Ionicons,FontAwesome5,FontAwesome,AntDesign ,MaterialCommunityIcons} from '@expo/vector-icons';
import AddScreen from "./AddScreen";




const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#0891b2',
      }}>
      <Tab.Screen
        name="Articles"
        component={ArticleScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
              <AntDesign name="home" size={24} color="black" />
          ),
        }}
      />
        <Tab.Screen
            name="Add Article"
            component={AddScreen}
            options={{
                tabBarLabel: 'ADD',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
            }}
        />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeScreen;

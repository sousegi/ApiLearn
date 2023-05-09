import React from 'react';
import SignScreen from '../screens/AuthScreen/SignScreen';
import CreateScreen from '../screens/AuthScreen/CreateScreen';
import ResetScreen from '../screens/AuthScreen/ResetScreen';
import ProfileScreen from '../screens/AuthScreen/ProfileScreen';
import HomeScreen from '../screens/NewsScreen/HomeScreen';

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import ArticleScreen from "../screens/NewsScreen/ArticleScreen";
import indexArticle from "../screens/NewsScreen/indexArticle";

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name={'SignScreen'}
                component={SignScreen}
                options={{headerShown: false }}
                />
            <Stack.Screen
                name={'Create'}
                component={CreateScreen}
            />
            <Stack.Screen
                name={'Reset'}
                component={ResetScreen}
            />
            <Stack.Screen
                name={'Profile'}
                component={ProfileScreen}
            />
            <Stack.Screen
              name={'HomeScreen'}
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
                name={'ArticleScreen'}
                component={ArticleScreen}
            />
            <Stack.Screen
                name={'indexArticle'}
                component={indexArticle}

            />
        </Stack.Navigator>
    </NavigationContainer>;
}

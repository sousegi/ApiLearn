import React from 'react';
import SignScreen from '../screens/AuthScreen/SignScreen';
import CreateScreen from '../screens/AuthScreen/CreateScreen';
import ResetScreen from '../screens/AuthScreen/ResetScreen';
import ProfileScreen from '../screens/AuthScreen/ProfileScreen';

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name={'SignScreen'}
                component={SignScreen}
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
        </Stack.Navigator>
    </NavigationContainer>;
}
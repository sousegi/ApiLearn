import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Navigate from "../../navigation/Navigation";
import Profile from "../AuthScreen/ProfileScreen";


function Feed() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Feed!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function ArticleScreen() {
    return (
        <View></View>
    );
}

export default ArticleScreen;

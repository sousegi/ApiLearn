/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

function Profile({}): JSX.Element {

    // const handleLogout = async () => {
    //     const response = await fetch('https://test.dev.ourbox.org/api/auth/logout', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });
    //
    //
    //     if (response.ok) {
    //         return navigation.navigate('SignScreen')
    //     } else {
    //         Alert.alert('Login failed');
    //     }
    // };

    const handleLogout = async () => {
        const [ userInfo, setUserInfo] = useState({});

        axios
            .post(
                'https://test.dev.ourbox.org/api/auth/logout',
                {},
                {
                    headers: {Authorization: `Bearer ${userInfo.token}`},
                },
            ).then(response => {
                console.log(response.data);
                AsyncStorage.removeItem('userInfo');
                setUserInfo({});
        }).catch(e => {
            console.log(`logout error ${e}`);
        });
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}>this is name</TextInput>
            <Text>this is email</Text>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.login}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F3F5',
        justifyContent: 'center',
    },
    input: {
        margin: 10,
        borderWidth: 1,
    },
    button: {
        height: 50,
        marginBottom: 12,
        margin: 10,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e8e8e8',
    },
    login: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#0891b2',
    },
});

export default Profile;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useContext, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View, Button, Alert,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AuthContext} from "../../context/AuthContext";

type SectionProps = PropsWithChildren<{
    title: string;
}>;

function Create({ navigation }): JSX.Element {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {register} = useContext(AuthContext)

    // const handleRegister = async () => {
    //     const response = await fetch('https://test.dev.ourbox.org/api/auth/register', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             name,
    //             email,
    //             password,
    //         }),
    //     });
    //
    //     if (response.ok) {
    //         // Alert.alert('Registration successful');
    //         return navigation.navigate('SignScreen')
    //     } else {
    //         Alert.alert('Logout failed');
    //     }
    // };

    const sign = () => {
        navigation.navigate('SignScreen')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.signIn}>Create Account</Text>
            <Text style={styles.forgot}>with your email and password</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter Name" />
            <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Enter email" />
            <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Enter Password" secureTextEntry />
            <TouchableOpacity style={styles.button} onPress={() => {
                register(name, email, password);
            }}>
                <Text style={styles.login}>Create account</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.create} onPress={sign}>Sign In</Text>
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
    signIn: {
        fontSize: 42,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    input: {
        height: 50,
        marginBottom: 12,
        margin: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#e8e8e8',
        marginVertical: 0.1,
    },
    button: {
        height: 50,
        marginBottom: 12,
        margin: 10,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#0891b2',
    },
    login: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    forgot: {
        fontSize: 18,
        alignSelf: 'center',
        padding: 15,
    },
    reset: {
        alignSelf: 'center',
        color: '#1C58B2',
    },
    create: {
        fontSize: 18,
        alignSelf: 'center',
        color: '#0891b2',
        fontWeight: 500,
    },
});

export default Create;
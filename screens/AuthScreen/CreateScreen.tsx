/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
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

type SectionProps = PropsWithChildren<{
    title: string;
}>;

function Create({ navigation}): JSX.Element {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        const response = await fetch('https://test.dev.ourbox.org/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            Alert.alert('Registration successful');
        } else {
            Alert.alert('Registration failed');
        }
    };
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <View style={styles.container}>
            <Text style={styles.signIn}>Sign In</Text>
            <Text style={styles.forgot}>with your email and password</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter Name" />
            <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Enter email" />
            <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Enter Password" secureTextEntry />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.login}>Create account</Text>
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
        borderRadius: 10,
        borderWidth: 1,
    },
    button: {
        height: 50,
        marginBottom: 12,
        margin: 10,
        padding: 10,
        borderRadius: 10,
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
        padding: 30,
    },
    reset: {
        alignSelf: 'center',
        color: '#1C58B2',
    },
    create: {
        fontSize: 18,
        alignSelf: 'center',
        color: '#1C58B2',
    },
});

export default Create;
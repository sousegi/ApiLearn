/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View, Button, Alert,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';


function Main({ navigation}): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const response = await fetch('https://test.dev.ourbox.org/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            return navigation.navigate('HomeScreen')
        } else {
            Alert.alert('Login failed');
        }
    };

    const reset = () => {
        navigation.navigate('Reset')
    }
    const create = () => {
        navigation.navigate('Create')
    }
    // const profile = () => {
    //     navigation.navigate('Profile')
    // }

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <View style={styles.container}>
            <Text style={styles.signIn}>Sign In</Text>
            <Text style={styles.forgot}>with your email and password</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Enter email" />
            <TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="Enter Password" secureTextEntry />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.login}>Log In</Text>
            </TouchableOpacity>
            <Text style={styles.forgot}>
                Forgot password? <TouchableOpacity>
                <Text style={styles.reset} onPress={reset}>RESET</Text>
            </TouchableOpacity>
            </Text>
            <TouchableOpacity>
                <Text style={styles.create} onPress={create}>Create account</Text>
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
        color: '#0891b2',
    },
    create: {
        fontSize: 18,
        alignSelf: 'center',
        color: '#0891b2',
    },
});

export default Main;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
    title: string;
}>;

function Reset({navigation}): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const sign = () => {
        navigation.navigate('SignScreen')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.signIn}>Reset Password</Text>
            <TextInput style={styles.input} placeholder="Enter email" />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.login}>Reset your Password</Text>
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
        padding: 30,
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

export default Reset;

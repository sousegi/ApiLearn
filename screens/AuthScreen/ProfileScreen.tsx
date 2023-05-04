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
    View, Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
    title: string;
}>;

function Profile(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <View style={styles.container}>
            <Text style={styles.input}>this is name</Text>
            <Text style={styles.input}>this is email</Text>
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

export default Profile;

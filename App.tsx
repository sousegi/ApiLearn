/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Box,
  Pressable,
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

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signIn}>Sign In</Text>
      <Text style={styles.forgot}>with your email and password</Text>
      <TextInput style={styles.input} placeholder="Enter email" />
      <TextInput style={styles.input} placeholder="Enter Password" />
      <Pressable style={styles.button}>
        <Text style={styles.login}>Log In</Text>
      </Pressable>
      <Text style={styles.forgot}>
        Forgot password?
        <Pressable>
          <Text style={styles.reset}>RESET</Text>
        </Pressable>
      </Text>
      <Text style={styles.create}>Create account</Text>
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
    backgroundColor: '#DB2927',
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
    fontSize: 18,
    alignSelf: 'center',
    padding: 30,
    color: '#1C58B2',
  },
  create: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#1C58B2',
  },
});

export default App;

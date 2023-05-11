/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

function Profile(): JSX.Element {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}>this is name</TextInput>
      <Text>this is email</Text>
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
});

export default Profile;

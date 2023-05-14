/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext";

function Add({props}): JSX.Element {
    const [height, setHeight] = useState(0);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {store} = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle}/>
            <Text style={styles.title}>Content</Text>
            <TextInput {...props}
                       multiline={true}
                       value={content}
                       onChangeText={(content) => setContent(content)}
                       onContentSizeChange={(event) =>
                           setHeight(event.nativeEvent.contentSize.height)
                       }
                       style={[styles.input, { height: Math.max(35, height) }]}
                       />
            <TouchableOpacity style={styles.button} onPress={ () => {store(title, content)}}>
                <Text style={styles.login}>Create Article</Text>
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
        height: 50,
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
    create: {
        fontSize: 18,
        alignSelf: 'center',
        color: '#0891b2',
        fontWeight: 500,
    },
    title: {
        padding: 10,
        fontWeight: 700,
        fontSize: 18,
    },
});

export default Add;

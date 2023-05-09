import * as React from 'react';
import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {useEffect, useState} from 'react';

function Article() {

    return (
        <View>
            <Text style={styles.date}>09.05.2023</Text>
            <Text style={styles.title}>12321 fdsf ds fdsfdsf dsf fdsvcdzx fdsf sefvcdx vdv 321</Text>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://mimigram.ru/wp-content/uploads/2020/07/foto-kak-tehnologia.jpg',
                }}
            />

            <Text style={styles.content}>12321 fdsf ds fdsfdsf dsf fdsvcdzx fdsf sefvcdx vdv 321 12321 fdsf ds fdsfdsf dsf fdsvcdzx fdsf sefvcdx vdv 321 12321 fdsf ds fdsfdsf dsf fdsvcdzx fdsf sefvcdx vdv 321 12321 fdsf ds fdsfdsf dsf fdsvcdzx fdsf sefvcdx vdv 321</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F3F5',
        justifyContent: 'center',
    },
    article: {
        marginTop: 5,
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.25,
        paddingBottom: 15,
    },
    image: {
        height: 300,
        marginTop: 10,
        marginStart: 15,
        marginEnd: 15,
        borderRadius: 10,
    },
    title: {
        marginEnd: 15,
        marginStart: 20,
        marginTop: 10,
        fontSize: 22,
        fontWeight: 700,
    },
    content: {
        marginEnd: 15,
        marginStart: 20,
        marginTop: 10,
        fontSize: 16,
        fontWeight: 400,
    },
    date: {
        marginStart: 20,
        marginTop: 10,
        fontSize: 14,
        fontWeight: 400,
    },
    text: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});

export default Article;

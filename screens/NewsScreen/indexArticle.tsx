import * as React from 'react';
import {
    Image, ScrollView,
    StyleSheet,
    Text,
} from 'react-native';
import {useEffect, useState} from 'react';
import {Loading} from "../../components/Loading";

function Article({ route, navigation }) {
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const { id, title } = route.params;

    const fetchArticleData = () => {
        navigation.setOptions({
           title,
        });
        setIsLoading(true);
        fetch('https://test.dev.ourbox.org/api/article/' + id)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setArticle(data);
            }).finally(() => {
            setIsLoading(false);
        });
    };
    useEffect(() => {
        fetchArticleData();
    }, []);

    if (isLoading) {
        return <Loading/>;
    }

    return (
        <ScrollView>
            <Text style={styles.date}>Publish Date {new Date(article.created_at).toLocaleDateString()}</Text>
            <Text style={styles.title}>{article.title}</Text>
            <Image
                style={styles.image}
                source={{ uri: article.image,}}/>
            <Text style={styles.content}>{article.content}</Text>
        </ScrollView>
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

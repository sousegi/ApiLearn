import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {useEffect, useState} from 'react';
import {Loading} from '../../components/Loading';

function MyArticle({navigation}) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  const fetchMyArticlesData = () => {
    setIsLoading(true);
    fetch('https://test.dev.ourbox.org/api/myarticles')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setArticles(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchMyArticlesData();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 600);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {articles.map(article => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('indexArticle', {
              id: article.id,
              title: article.title,
            })
          }>
          <View style={styles.article}>
            <Image style={styles.image} source={{uri: article.image}} />
            <View style={styles.text}>
              <Text style={styles.title}>{article.title}</Text>
              <Text style={styles.date}>
                {new Date(article.created_at).toLocaleDateString()}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
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
    height: 100,
    width: 100,
    marginTop: 10,
    marginStart: 20,
    borderRadius: 15,
    marginRight: 15,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 700,
  },
  content: {
    fontSize: 14,
    fontWeight: 400,
  },
  date: {
    fontSize: 11,
    fontWeight: 400,
  },
  text: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default MyArticle;

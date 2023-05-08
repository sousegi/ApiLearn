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

function ArticleScreen() {
  const [articles, setArticles] = useState([]);

  const fetchArticlesData = () => {
    fetch('https://test.dev.ourbox.org/api/articles')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setArticles(data);
      });
  };
  useEffect(() => {
    fetchArticlesData();
  }, []);
  return (
    <View>
      {articles.map(article => (
        <TouchableOpacity>
          <View style={styles.article}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://mimigram.ru/wp-content/uploads/2020/07/foto-kak-tehnologia.jpg',
              }}
            />
            <View style={styles.text}>
              <Text style={styles.title}>{article.title}</Text>
              <Text style={styles.date}>{new Date(article.created_at).toLocaleDateString()}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
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
    marginTop: 10,
    flexDirection: 'row',
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

export default ArticleScreen;

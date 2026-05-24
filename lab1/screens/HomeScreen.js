import React from 'react';
import { FlatList, Text, View } from 'react-native';
import NewsItem from '../components/NewsItem';
import Footer from '../components/Footer';
import styles from '../styles/HomeScreenStyles';

const news = Array(7).fill({
  title: 'Світ котиків',
  date: 'Дата публікації',
  text: 'Тут опис всіх котиків, та їхні породи, також поради за доглядом',
});

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Котики</Text>
      <FlatList
        data={news}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <NewsItem {...item} />}
      />
      <Footer />
    </View>
  );
}

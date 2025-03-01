import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import Config from 'react-native-config';
import MovieCard from '../components/MovieCard';

const HomeScreen = () => {
  const [filmes, setFilmes] = useState([]);
  const apiKey = Config.TMDB_API_KEY; // Chave da API aqui

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(response => setFilmes(response.data.results))
      .catch(error => console.error('Erro ao buscar filmes:', error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmes Populares</Text>
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MovieCard
            title={item.title}
            poster={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            rating={item.vote_average}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
});

export default HomeScreen;
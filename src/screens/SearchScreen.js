import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import Config from 'react-native-config';
import MovieCard from '../components/MovieCard';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const apiKey = Config.TMDB_API_KEY; // Chave da API aqui

  const searchMovies = () => {
    if (query.trim() === '') return;

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
      .then(response => setResults(response.data.results))
      .catch(error => console.error('Erro ao buscar filmes:', error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar filmes..."
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={searchMovies}
      />
      <FlatList
        data={results}
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});

export default SearchScreen;
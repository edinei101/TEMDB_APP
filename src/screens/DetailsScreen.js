import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import Config from 'react-native-config';

const DetailsScreen = ({ route }) => {
  const { movieId } = route.params;
  const [filme, setFilme] = useState(null);
  const apiKey = Config.TMDB_API_KEY; // Chave da API aqui

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
      .then(response => setFilme(response.data))
      .catch(error => console.error('Erro ao buscar detalhes do filme:', error));
  }, [movieId]);

  if (!filme) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${filme.poster_path}` }}
        style={styles.poster}
      />
      <Text style={styles.title}>{filme.title}</Text>
      <Text style={styles.overview}>{filme.overview}</Text>
      <Text style={styles.details}>⭐ {filme.vote_average}</Text>
      <Text style={styles.details}>Data de Lançamento: {filme.release_date}</Text>
      <Text style={styles.details}>Duração: {filme.runtime} minutos</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  poster: { width: '100%', height: 400, borderRadius: 8, marginBottom: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  overview: { fontSize: 16, marginBottom: 16 },
  details: { fontSize: 14, marginBottom: 8 },
});

export default DetailsScreen;
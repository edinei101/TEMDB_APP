import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const App = () => {
  const [filmes, setFilmes] = useState([]);
  const apiKey = '2afd187264ced401f856c9c587d9dd5f';

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
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  item: { fontSize: 18, marginBottom: 8 },
});

export default App;
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MovieCard = ({ title, poster, rating, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: poster }} style={styles.poster} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.rating}>⭐ {rating}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { margin: 10, alignItems: 'center' },
  poster: { width: 150, height: 200, borderRadius: 10 },
  title: { fontSize: 16, marginTop: 8, textAlign: 'center' },
  rating: { fontSize: 14, color: 'gray' },
});

export default MovieCard;
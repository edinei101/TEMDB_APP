import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import CategoryScreen from '../screens/CategoryScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'TEMDB.APP' }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Buscar Filmes' }} />
        <Stack.Screen name="Category" component={CategoryScreen} options={{ title: 'Categoria' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
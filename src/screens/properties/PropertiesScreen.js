// src/screens/properties/PropertiesScreen.js
import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

export default function PropertiesScreen({ navigation }) {
  const properties = [
    { id: '1', name: 'Apartment 1A', address: '123 Main St' },
    { id: '2', name: 'House 2B', address: '456 Oak Ave' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={globalStyles.card}
      onPress={() => navigation.navigate('PropertyDetail', { property: item })}>
      <Text style={globalStyles.title}>{item.name}</Text>
      <Text style={globalStyles.subtitle}>{item.address}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={properties}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
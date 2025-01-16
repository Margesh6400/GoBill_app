// src/screens/properties/PropertyDetailScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function PropertyDetailScreen({ route }) {
  const { property } = route.params;
  
  return (
    <View style={styles.container}>
      <Text>Property Details</Text>
      <Text>Name: {property.name}</Text>
      <Text>Address: {property.address}</Text>
      <Button title="Edit Property" onPress={() => {}} />
    </View>
  );
}
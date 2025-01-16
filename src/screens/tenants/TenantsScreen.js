
// src/screens/tenants/TenantsScreen.js
import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';

export default function TenantsScreen({ navigation }) {
  const tenants = [
    { id: '1', name: 'John Doe', unit: 'Apt 1A' },
    { id: '2', name: 'Jane Smith', unit: 'House 2B' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={tenants}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('TenantDetail', { tenant: item })}>
            <Text>{item.name}</Text>
            <Text>{item.unit}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
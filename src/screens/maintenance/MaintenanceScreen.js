// src/screens/maintenance/MaintenanceScreen.js
import React from 'react';
import { View, FlatList, Text, Button } from 'react-native';

export default function MaintenanceScreen() {
  const requests = [
    { id: '1', unit: 'Apt 1A', issue: 'Leaky faucet', status: 'Pending' },
    { id: '2', unit: 'House 2B', issue: 'AC repair', status: 'In Progress' },
  ];

  return (
    <View style={styles.container}>
      <Button title="New Request" onPress={() => {}} />
      <FlatList
        data={requests}
        renderItem={({item}) => (
          <View>
            <Text>{item.unit}</Text>
            <Text>{item.issue} - {item.status}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
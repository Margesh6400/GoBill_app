// src/screens/payments/PaymentsScreen.js
import React from 'react';
import { View, FlatList, Text } from 'react-native';

export default function PaymentsScreen() {
  const payments = [
    { id: '1', tenant: 'John Doe', amount: 1000, status: 'Paid' },
    { id: '2', tenant: 'Jane Smith', amount: 1200, status: 'Pending' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={payments}
        renderItem={({item}) => (
          <View>
            <Text>{item.tenant}</Text>
            <Text>${item.amount} - {item.status}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

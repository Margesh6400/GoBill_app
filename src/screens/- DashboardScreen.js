// src/screens/DashboardScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text>Dashboard Summary</Text>
      <Text>Total Properties: 5</Text>
      <Text>Total Tenants: 8</Text>
      <Text>Pending Payments: 3</Text>
      <Text>Maintenance Requests: 2</Text>
    </View>
  );
}
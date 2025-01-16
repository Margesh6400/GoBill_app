// src/screens/tenants/TenantDetailScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function TenantDetailScreen({ route }) {
  const { tenant } = route.params;
  
  return (
    <View style={styles.container}>
      <Text>Tenant Details</Text>
      <Text>Name: {tenant.name}</Text>
      <Text>Unit: {tenant.unit}</Text>
      <Button title="Edit Tenant" onPress={() => {}} />
    </View>
  );
}
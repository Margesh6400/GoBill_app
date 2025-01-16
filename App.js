// File: App.js
// import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



// Screens
import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import PropertiesScreen from './src/screens/properties/PropertiesScreen';
import PropertyDetailScreen from './src/screens/properties/PropertyDetailScreen';
import TenantsScreen from './src/screens/tenants/TenantsScreen';
import TenantDetailScreen from './src/screens/tenants/TenantDetailScreen';
import PaymentsScreen from './src/screens/payments/PaymentsScreen';
import MaintenanceScreen from './src/screens/maintenance/MaintenanceScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Properties"
        component={PropertiesNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-group" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Tenants"
        component={TenantsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Payments"
        component={PaymentsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cash" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Maintenance"
        component={MaintenanceScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="tools" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function PropertiesNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PropertiesList" component={PropertiesScreen} />
      <Stack.Screen name="PropertyDetail" component={PropertyDetailScreen} />
    </Stack.Navigator>
  );
}

function TenantsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TenantsList" component={TenantsScreen} />
      <Stack.Screen name="TenantDetail" component={TenantDetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="MainApp"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// File: src/screens/auth/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    navigation.navigate('MainApp');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
});

// File: src/screens/properties/PropertiesScreen.js
import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function PropertiesScreen({ navigation }) {
  const properties = [
    { id: '1', name: 'Apartment 1A', address: '123 Main St' },
    { id: '2', name: 'House 2B', address: '456 Oak Ave' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.propertyCard}
      onPress={() => navigation.navigate('PropertyDetail', { property: item })}>
      <Text style={styles.propertyName}>{item.name}</Text>
      <Text>{item.address}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={properties}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   propertyCard: {
//     padding: 15,
//     backgroundColor: 'white',
//     borderRadius: 5,
//     marginBottom: 10,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//   },
//   propertyName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
// });
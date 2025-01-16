// src/screens/auth/RegisterScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [userData, setUserData] = useState({ email: '', password: '', name: '' });
  
  return (
    <View style={styles.container}>
      <TextInput placeholder="Name" onChangeText={text => setUserData({...userData, name: text})} />
      <TextInput placeholder="Email" onChangeText={text => setUserData({...userData, email: text})} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={text => setUserData({...userData, password: text})} />
      <Button title="Register" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
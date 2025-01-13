import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const App = () => {

  const [text, setText] = useState('');
  const[sumittedText, setSubmittedText] = useState('');

  const handleSubmit =  () =>{
    setSubmittedText(text);
    setText('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        value={text}
        onChangeText={setText}
      />
      <Button title="Submit" onPress={handleSubmit}></Button>
      {sumittedText ? (<Text>Result : {text}</Text>) : null}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20,
    gap: 10,
  },
  title: {  
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    alignItems: 'center',
    color: 'blue',
  },  
  input: {
    width: '100%',
    padding: 5,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
  }
}); 
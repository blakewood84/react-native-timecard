import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function App() {
  const getTimeStamp = () => {
    let timeStamp = new Date();
    let utcDate = timeStamp.toUTCString();
  }
  return (
    <View style={styles.container}>
      <Text>Time Card:</Text>
      <Button color="#841fff" style={styles.button} onPress={getTimeStamp} title="Punch Time" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width:150,
    height:20,
    backgroundColor: '#000000',
  }
});

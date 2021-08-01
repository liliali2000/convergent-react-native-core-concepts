import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image style={{width: 70, height: 70}} source={require('./../assets/images/convergent-logo.png')}/>
      <Text style={styles.title}>Welcome to the TX Convergent Tutorial App!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
});
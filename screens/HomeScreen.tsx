/**
 * - Home Screen -
 * 
 * Welcome to the code for the Home Screen! Here we will discuss two things:
 * 1. View Component
 * 2. Styling
 * 
 * - View Component -
 * The View component in RN is the most fundamental component for building a UI.
 * It is essentially a container that supports layouts with flexbox, style, some
 * touch handling, and accessibility controls. It maps directly to the native view
 * equivalent on whatever platform React Native is running on (iOS, Android, or web).
 * 
 * A View is designed to be nested inside other views and can have 0 to as many
 * children of any type that is likes.
 * 
 * Here our View is already styled and can be cound in the '../component/Themed' folder
 * but you can also just use the default view provided by React Native:
 * import { View } from 'react-native';
 * and style it yourself!
 * 
 * Refer here for more on the functionality of the View component: https://reactnative.dev/docs/view
 * 
 * - Styling -
 * In this file we utilize React Native's StyleSheet to style our components. StyleSheet is basically 
 * an abstract similar to CSS StyleSheets. It helps with removing excessive code from styling from the 
 * render function to make it easier to read.
 */
import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

import HomeScreenInfo from '../components/HomeScreenInfo';
import { Text, View } from '../components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./../assets/images/convergent-logo.png')}/>
      <Text style={styles.title}>Welcome to the TX Convergent Tutorial App!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <HomeScreenInfo/>
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
  separator: {
    marginVertical: 20,
    height: 1,
    width: '80%',
  },
  logo: {
    width: 70,
    height: 70,
  }
});
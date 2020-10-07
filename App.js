import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppInsider from './src/App/'

// create a component
const Index = () => {
  return (
    <AppInsider />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default Index;

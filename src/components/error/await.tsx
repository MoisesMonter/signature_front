import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function LoadingComponent() {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/400/processing.gif')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 100,  
    height: 100,
  },
});
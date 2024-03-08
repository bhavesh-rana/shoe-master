// In BackgroundImage.js (assuming this is your component file)
import React from 'react';
import { ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { Assets } from '../constants/Assets';

const win = Dimensions.get('window');

const BackgroundImage = ({ children }:any) => {
  return (
    <ImageBackground
      source={Assets.backGroundImage}
      style={styles.background}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: win.width+5, // Use window dimensions to ensure full width
    height: win.height, // Use window dimensions to ensure full height
    position: 'absolute', // Position it absolutely to cover the whole screen
    top: 0,
    left: 0,
  },
});

export default BackgroundImage;

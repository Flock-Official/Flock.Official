import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons';
import * as Font from 'expo-font';
import birdFlying from './bird-flying.gif'

const AuthScreen = ({ onButtonClick }) => {
  const handlePress = () => {
    onButtonClick();
  };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>FLOCK</Text>
      <Text style={styles.text}>GO ANYWHERE SAFE</Text>
      <StatusBar style="auto" />
      
      <Image
          style={styles.image}
          source={birdFlying}
            
          />
      <StatusBar style="auto" />
      <Button title="Get Started" onPress={handlePress}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50
  },
  text: {
    fontFamily: 'Pixel',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'purple',
  },
  image: {
    justifyContent: 'center',
    width: 150, 
    height: 150,
    marginTop: 30,
    marginBottom:70,
  }
});

const loadFontsAsync = async () => {
  await Font.loadAsync({
    'Righteous-Regular': require('../../assets/fonts/Righteous-Regular.ttf'),
    'Nintendo': require('../../assets/fonts/RoSpritendoSemiboldBeta-vmVwZ.otf'),
    'superMario': require('../../assets/fonts/SuperMarioBros-ov7d.ttf'),
    'Pixel': require('../../assets/fonts/Pixeled.ttf'),
  });
};

loadFontsAsync();

export default AuthScreen;

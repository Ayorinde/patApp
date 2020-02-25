import React from 'react';
import {StyleSheet, View, Text, Button, TouchableHighlight, StatusBar} from 'react-native';

import colors from '../styles/colors'
import patstyle from '../styles/style'

const Welcome = ({navigation}) => {
    
  return (
    <>
        <View style={styles.container}>
            <Text style={styles.title}>Pat App</Text>

            <TouchableHighlight style={patstyle.button} onPress={()=> navigation.navigate('Signup')}>
                <Text style={patstyle.buttonText}> Sign Up </Text>
            </TouchableHighlight>

            <TouchableHighlight style={patstyle.button} onPress={()=> navigation.navigate('Orders')}>
                <Text style={patstyle.buttonText}> My Orders </Text>
            </TouchableHighlight>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: colors.light,
  },
  title: {
    marginTop: 40,
    marginBottom: 30,
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.textPrimary
  },
});

export default Welcome;

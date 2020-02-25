import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

import colors from '../styles/colors'

const Signup = ({navigation}) => {
  return (
    <>
        <View style={styles.container}>
            <View style={styles.topMessage}>
                <Text style={styles.title}>Create your Account</Text>
                <Text>It's free and easy to set up!</Text>
            </View>
            
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: colors.light,
  },
  title: {
    marginTop: 80,
    marginBottom: 30,
    fontSize: 25,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: colors.textPrimary
  },
});

export default Signup;

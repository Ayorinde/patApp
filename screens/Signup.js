import React, {useState} from 'react';
import {
    StyleSheet, View, Text, StatusBar,
    TextInput, TouchableHighlight
} from 'react-native';

import colors from '../styles/colors'
import patstyle from '../styles/style'

const Signup = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <>
        <View style={styles.container}>
            <View style={styles.topMessage}>
                <Text style={styles.title}>Create your Account</Text>
                <Text>It's free and easy to set up!</Text>
            </View>
            <View style={styles.texInputs}>
                <TextInput style={styles.textInput} placeholder="Username"
                    onChangeText={text => setUsername(text)} value={username} 
                />
                <TextInput style={styles.textInput}  placeholder="Email"
                    onChangeText={text => setEmail(text)} value={email} 
                />
                <TextInput style={styles.textInput} placeholder="Password"
                    onChangeText={text => setPassword(text)} value={password} 
                />
            </View>
            <View style={styles.buttonSection}>
                <TouchableHighlight style={patstyle.button} onPress={()=> navigation.navigate('Signup')}>
                    <Text style={patstyle.buttonText}> Sign Up </Text>
                </TouchableHighlight>
                <View>
                    <Text style={styles.smallText}> Existing user? Signin</Text>
                </View>
            </View>
            
            
    
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    padding: 30,
    backgroundColor: colors.primary,
  },
  topMessage: {
      flex: 1,
      //alignSelf: 'flex-end' 
      marginTop: 70,
  },
  texInputs: {
      flex: 3,
  },
  buttonSection: {
    flex: 2,
    //marginVertical: 50,
  },
  title: {
    //marginTop: 80,
    //marginBottom: 30,
    fontSize: 25,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: colors.textPrimary
  },
  textInput: {
       height: 60, 
       //borderColor: colors.primary, 
       
       borderBottomWidth: 1,
       borderBottomColor: colors.secondary
    },
    smallText: {
        textAlign: 'center',
        fontSize: 14,
    }

});

export default Signup;

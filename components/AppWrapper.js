import React from 'react';
import {View, Text, Button, StatusBar, SafeAreaView} from 'react-native';
import AppNavigation from './appNavigation';
const App= (props) => {
    return (
    <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
        <View>{props.children}</View>
        </SafeAreaView>
    </>
    )   
}

export default App;
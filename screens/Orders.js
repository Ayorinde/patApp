import React from 'react';
import {StyleSheet, View, Text, Button, TouchableHighlight, StatusBar} from 'react-native';

import colors from '../styles/colors'
import patstyle from '../styles/style'

const Orders = ({navigation}) => {
  return (
    <>
        <View style={styles.container}>
            <View style={styles.orderTitle}>
                <Text style={styles.title}>My Orders</Text>
            </View>
            <View style={styles.orderList}>

            </View>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    //alignItems: 'center', 
    //justifyContent: 'center',
    backgroundColor: colors.light,
  },
  title: {
    marginTop: 40,
    fontSize: 26,
    fontWeight: 'bold'
  },
});

export default Orders;

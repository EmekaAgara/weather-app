import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';

const Welcome = () => {
  return (
    
    <View style={styles.container}>
        <Image style={styles.weatherAnimation}
            source={require('../assets/weather.gif')}
        />

      <Text style={styles.text}>Welcome</Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },

    text:{
        color:'white'
    },

    weatherAnimation:{
        width:200,
        resizeMode:'contain'
    }
  });
  
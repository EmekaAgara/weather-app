import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';

const Welcome = () => {
  return (
    
    <View style={styles.container}>
        <Image style={styles.weatherAnimation}
            source={require('../assets/weather.gif')}
        />

      <Text style={styles.mainText}>Check the weather in your Location</Text>
      <Text style={styles.subText}>Selcct your current location and get the weather forcast in seconds</Text>
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

    mainText:{
        color:'white',
        fontSize:30,
        fontWeight:700,
        textAlign:'center',
        paddingHorizontal:50,
        paddingBottom:20,
    },

    subText:{
        color:'white',
        fontSize:15,
        fontWeight:500,
        textAlign:'center', 
        paddingHorizontal:50,
        color:'#818589',
        lineHeight:20
    },

    weatherAnimation:{
        width:200,
        resizeMode:'contain',
    }
  });
  
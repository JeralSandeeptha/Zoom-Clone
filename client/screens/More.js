import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const More = ({navigation}) => {
  return (
    <View style={styles.container}>

      <StatusBar backgroundColor='#38394D' barStyle='light-content'/>

      <TouchableOpacity style={styles.lbtn} onPress={ () => navigation.navigate('Welcome')}>
          <Text style={styles.text2}>Log Out</Text>
      </TouchableOpacity>

    </View>
  )
}

export default More

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  lbtn: {
    backgroundColor: '#0A5CFE',
    width: '100%',
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15
  },
  text2: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
  },
})
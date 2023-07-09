import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Welcome = ({navigation}) => {

  const signIn = () => {
    navigation.navigate('SignIn');
  }

  const logIn = () => {
    navigation.navigate('LogIn');
  }

  return (
    <View style={styles.container}>

      <StatusBar backgroundColor='#0A5CFE'/>
      
      <View style={styles.upperdiv}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
      </View>

      <View style={styles.lowerdiv}>

        <Text style={styles.header}>Welcome</Text>

        <Text style={styles.subheader}>Get Started with your account</Text>
        
        <TouchableOpacity style={styles.sbtn}>
          <Text style={styles.text1}>Join a Meeting</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lbtn} onPress={signIn}>
          <Text style={styles.text2}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lbtn} onPress={logIn}>
          <Text style={styles.text2}>Log In</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A5CFE',
  },
  upperdiv: {
    backgroundColor: '#0A5CFE',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lowerdiv: { 
    backgroundColor: '#fff',
    flex: 1,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingHorizontal: 30,
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }, 
  sbtn: {
    backgroundColor: '#0A5CFE',
    width: '100%',
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  lbtn: {
    backgroundColor: '#F0EFF4',
    width: '100%',
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    fontWeight: '800'
  },
  header: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 10,
  },
  subheader: {
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 20,
  },
  text1: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
  },
  text2: {
    color: 'black',
    fontWeight: '600',
    fontSize: 15,
  }
})
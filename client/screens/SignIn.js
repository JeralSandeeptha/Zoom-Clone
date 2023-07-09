import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native'
import React, {useState} from 'react'
import { TextInput } from 'react-native-gesture-handler'

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [btns, setBtns] = useState([
    {
      name: 'Continue with Google',
      image: 'https://cdn-icons-png.flaticon.com/128/2702/2702602.png'
    },
    {
      name: 'Continue with Apple',
      image: 'https://cdn-icons-png.flaticon.com/128/1532/1532495.png'
    },
    {
      name: 'Continue with Facebook',
      image: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png'
    },
    {
      name: 'Continue with SSO',
      image: 'https://cdn-icons-png.flaticon.com/512/807/807292.png'
    },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='white'/>
      <Text style={{marginTop: 10, marginBottom: 10}}>ENTER YOUR EMAIL ADDRESS</Text>
      <TextInput 
        placeholder='Email'
        textAlign='center'
        value={email}
        onChange={ (text) => setEmail(text)}
        style={styles.textfield}
      />
      <TextInput 
        placeholder='Password'
        textAlign='center'
        value={password}
        onChange={ (text) => setPassword(text)}
        style={styles.textfield}
      />
      <TouchableOpacity style={styles.lbtn}>
          <Text style={styles.text2}>Sign In</Text>
      </TouchableOpacity>
      <Text style={{marginTop: 20, marginBottom: 10}}>OTHER SIGN IN METHODS</Text>

      {
        btns.map( (btn, index) => {
          return(
            <TouchableOpacity key={index} style={styles.btns}>
              <Image 
                source={{uri: `${btn.image}`}}
                style={{
                  width: 30,
                  height: 30
                }}
              />
              <Text style={styles.text1}>{btn.name}</Text>
          </TouchableOpacity>
          )
        } )
      }
      
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 25
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
  textfield: {
    backgroundColor: '#fff',
    height: 50,
    borderColor: '#f7f7f9',
    borderWidth: 1
  },
  btns: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    height: 50,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 15,
  },
  text1: {
    color: 'black',
    fontWeight: '600',
    fontSize: 15,
  },
})
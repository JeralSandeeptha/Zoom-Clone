import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const ForgotPassword = () => {

    const [email, setEmail] = useState('');

    return (
    <View style={styles.container}>
      <Text style={{marginTop: 10, marginBottom: 10}}>ENTER YOUR EMAIL ADDRESS</Text>
      <TextInput 
        placeholder='Email'
        textAlign='center'
        value={email}
        onChange={ (text) => setEmail(text)}
        style={styles.textfield}
      />
      <Text style={{marginTop: 10, marginBottom: 10}}>To reset password, please enter your email address. You may need to check your spam folder or unblock no-reply@zoom.us.</Text>
      <TouchableOpacity style={styles.lbtn}>
          <Text style={styles.text2}>Send</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ForgotPassword

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
})
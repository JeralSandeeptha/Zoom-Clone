import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const StartMeeting = ({name, roomId, setName, setRoomId, joinRoom}) => {
  return (
    <View>
      <TextInput 
        placeholder='Enter your secret name'
        textAlign='center'
        ref={name}
        onChange={ (text) => setName(text)}
        style={styles.textfield}
      />
      <TextInput 
        placeholder='Enter your room id'
        textAlign='center'
        ref={roomId}
        onChange={ (text) => setRoomId(text)}
        style={styles.textfield}
      />
      <TouchableOpacity style={styles.lbtn} onPress={ () => joinRoom()}>
          <Text style={styles.text2}>Join Meeting</Text>
      </TouchableOpacity>
    </View>
  )
}

export default StartMeeting

const styles = StyleSheet.create({
    textfield: {
        backgroundColor: '#fff',
        height: 50,
        borderColor: '#f7f7f9',
        borderWidth: 1
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
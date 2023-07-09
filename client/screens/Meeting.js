import { Alert, StatusBar, StyleSheet, Text, View } from 'react-native'          //3.28.00
import React, { useState, useEffect } from 'react'
import StartMeeting from '../components/StartMeeting';
import { io } from 'socket.io-client';
// import { Camera } from 'expo-camera';

let socket;

const Meeting = ({navigation}) => {

  const [name, setName] = useState();
  const [roomId, setRoomId] = useState();
  const [activeUsers, setActiveUsers] = useState();
  // const [startCamera, setStartCamera] = useState(false);

  // const _startCamera = async () => {
  //   const { status } = await Camera.requestCameraPermissionsAsync();
  //   if (status === "granted") {
  //     setStartCamera(true);
  //   } else {
  //     Alert.alert("Access Denied");
  //   }
  // }
  
  const joinRoom = () => {
    navigation.navigate('MeetingCall');
    // _startCamera();
    // socket.emit('join-room', { roomId: roomId, userName: name })
  }

  // useEffect(() => {
  //   socket = io("http://192.168.1.139:3001");
  //   socket.on('connection', () => console.log("connected"));
  //   socket.on("all-users", users => {
  //     console.log("Active Users");
  //     console.log(activeUsers);
  //     setActiveUsers(activeUsers);
  //   });
  // }, [])
  
  return (
    <View style={styles.container}>

      <StatusBar backgroundColor='white' barStyle='dark-content'/>

      <StartMeeting 
        name={name}
        roomId={roomId}
        setName={setName}
        setRoomId={setRoomId}
        joinRoom={joinRoom}
      />
      
    </View>
  )
}

export default Meeting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20
  }
})
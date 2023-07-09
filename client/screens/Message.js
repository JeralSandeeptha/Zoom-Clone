import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import ChatInput from '../navigators/ChatInput';

const Message = ({navigation, route}) => {

  const handleBack = () => {
    navigation.goBack('Chat');
  }

  const { title, online, icon } = route.params;

  return (
    <View style={styles.conatiner}>

      <StatusBar backgroundColor='#38394D' barStyle='light-content'/>

      <View style={styles.header}>
        <Ionicons name='ios-chevron-back-outline' size={25} color='white' onPress={handleBack}/>
        <View style={{
          width: 20,
          height: 20,
          backgroundColor: online == "Yes" ? 'red' : 'green',
          borderRadius: 50
        }}></View>
        <Text style={styles.name}>{title}</Text>
        <View style={styles.icons}>
          <Octicons name='device-camera-video' size={25} color='white'/>
          <Feather name='info' size={25} color='white'/>
        </View>
      </View>

      <ChatInput title={title}/>

    </View>
  )
}

export default Message

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingVertical: 15,
  },
  header: {
    backgroundColor: '#38394D',
    paddingVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  icons: {
    flexDirection: 'row', 
    gap: 10, 
  },
  name: {
    color: 'white',
    fontSize: 17
  },
})
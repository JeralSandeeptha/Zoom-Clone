import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const UserInfo = ({navigation, route}) => {

  const [isClick, setisClick] = useState(false);

  const handleBack = () => {
    navigation.goBack('Contacts');
  }

  const { title, online, icon, email } = route.params;

  const handlePress = () => {
    setisClick(!isClick);
  }

  const handleChat = () => {
    navigation.navigate('Message', {
      title: title,
      online: online
    });
  }

  const handleAudioMeet = () => {
    navigation.navigate('Audio', {
      title: title,
      icon: icon,
    });
  }

  const handleVedioMeet = () => {
    navigation.navigate('Vedio', {
      title: title
    });
  }

  return (
    <View style={styles.conatiner}>

      <StatusBar backgroundColor='#38394D' barStyle='light-content'/>

      <View style={styles.header}>
        <Ionicons name='ios-chevron-back-outline' size={25} color='white' onPress={handleBack}/>
        
        <Text style={styles.name}>{title}</Text>
        <View style={styles.icons}>
          <AntDesign name={isClick ? 'staro' : 'star'} size={25} color='white' onPress={handlePress}/>
          <Feather name='info' size={25} color='white'/>
        </View>
      </View>

      <View style={styles.picContainer}>
        <Image source={{uri: `${icon}`}} style={styles.pic}/>
      </View>

      <View style={styles.status}>
        <View style={{
            width: 20,
            height: 20,
            backgroundColor: online == "Yes" ? 'red' : 'green',
            borderRadius: 50
          }}></View>
        <Text>{online == "Yes" ? 'Offline' : 'Online'}</Text>  
      </View>  

      <View style={styles.menuBtns}>
          <TouchableOpacity onPress={handleVedioMeet}>
            <View>
              <View style={styles.btn}>
                <FontAwesome  name='video-camera' size={25} color='white'/>
              </View>
              <Text style={styles.text}>Vedio Meet</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={handleAudioMeet}>
            <View>
              <View style={styles.btn}>
                <FontAwesome5 name='video-slash' size={25} color='white'/>
              </View>
              <Text style={styles.text}>Audio Meet</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={handleChat}>
            <View>
              <View style={styles.btn}>
                <Ionicons name='chatbox' size={25} color='white'/>
              </View>
              <Text style={styles.text}>Chat</Text>
            </View>
          </TouchableOpacity>
      </View>

      <View style={styles.details}>
        <Text style={styles.email}>{email}</Text>
      </View>

    </View>
  )
}

export default UserInfo

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
  status: {
    gap: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  pic: {
    width: 100,
    height: 100,
    borderRadius: 30,
  },
  menuBtns: {
    paddingHorizontal: 20,
    flexDirection:'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10
  }, 
  btn: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    height: 65,
    backgroundColor: '#0A5CFE'
  }, 
  text: {
    marginTop: 5,
    color: '#0A5CFE'
  },
  details: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30
  }
})
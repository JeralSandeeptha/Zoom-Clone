import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Dashboard = ({navigation}) => {

  const handleMeeting = () => {
    navigation.navigate('Meeting');
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#38394D' barStyle='light-content'/>
      <View style={styles.menuBtns}>
          <View style={styles.btnOuter}>
            <TouchableOpacity style={styles.btn} onPress={handleMeeting}>
                <FontAwesome name='video-camera' size={25} color='#efefef'/>
            </TouchableOpacity>
            <Text style={styles.title}>New Meeting</Text>
          </View>
          <View style={styles.btnOuter}>
            <TouchableOpacity style={styles.bbtn} onPress={handleMeeting}>
                <Entypo name='squared-plus' size={25} color='#efefef'/>
            </TouchableOpacity>
            <Text style={styles.title}>Join</Text>
          </View>
          <View style={styles.btnOuter}>
            <TouchableOpacity style={styles.bbtn}>
                <Entypo name='calendar' size={25} color='#efefef'/>
            </TouchableOpacity>
            <Text style={styles.title}>Schedule</Text>
          </View>
          <View style={styles.btnOuter}>
            <TouchableOpacity style={styles.bbtn}>
                <Ionicons name='share' size={25} color='#efefef'/>
            </TouchableOpacity>
            <Text style={styles.title}>Share Screen</Text>
          </View>
      </View>
      <ScrollView 
        style={{flex: 1}}
        showsVerticalScrollIndicator={true}
      >
        <Text style={styles.text}>Add a Calendar</Text>
      </ScrollView>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  menuBtns: {
    backgroundColor: '#F9f9f9',
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: '#0A5CFE',
    textAlign: 'center',
    marginTop: 20,
  },
  btn: {
    backgroundColor: '#ff742f',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 70,
  },
  title: {
    fontSize: 12,
    marginTop: 10
  },
  btnOuter: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 75
  },
  bbtn: {
    backgroundColor: '#0A5CFE',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 70
  }
})
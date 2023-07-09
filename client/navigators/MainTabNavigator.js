import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Contacts from '../screens/Contacts';
import Chat from '../screens/Chat';
import More from '../screens/More';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MainTabNavigator = () => {

    const Tab = createBottomTabNavigator();

    const openModel = () => {}

    return (
      <Tab.Navigator
        initialRouteName='Dashboard'
        screenOptions={ ({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if(route.name === 'Dashboard'){
                  iconName = 'videocam';
                  color = focused ? '#0A5CFE' : 'gray';
                  size = 22;
              }else if(route.name === 'Chat'){
                  iconName = 'chat-bubble';
                  color = focused ? '#0A5CFE' : 'gray';
                  size = 22;
              }else if(route.name === 'Contacts'){
                  iconName = 'contact-page';
                  color = focused ? '#0A5CFE' : 'gray';
                  size = 22;
              }else if(route.name === 'More'){
                  iconName = 'keyboard-control';
                  color = focused ? '#0A5CFE' : 'gray';
                  size = 22;
              }
              return(
                  <MaterialIcons
                      name={iconName}
                      size={size}
                      color={color}
                  />
              )
          }
        })
      }
      >
        <Tab.Screen 
          name="Dashboard" 
          component={Dashboard} 
          options={{
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerTitle: 'Meetings',
            headerRight: () => <Ionicons onPress={openModel} style={{marginRight: 25}} name='information-circle-outline' size={25} color='#efefef'/>,
            headerStyle: {
              backgroundColor: '#38394D',
           },
          }}
        />
        <Tab.Screen 
          name="Chat" 
          component={Chat} 
          options={{
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerTitle: 'Team Chat',
            headerRight: () => <Entypo onPress={openModel} style={{marginRight: 25}} name='notification' size={25} color='#efefef'/>,
            headerStyle: {
              backgroundColor: '#38394D',
           },
          }}
        />
        <Tab.Screen 
          name="Contacts" 
          component={Contacts} 
          options={{
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerTitle: 'Contacts',
            headerRight: () => <FontAwesome onPress={openModel} style={{marginRight: 25}} name='pencil-square-o' size={25} color='#efefef'/>,
            headerStyle: {
              backgroundColor: '#38394D',
           },
          }}
        />
        <Tab.Screen 
          name="More" 
          component={More} 
          options={{
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerTitle: 'More',
            headerStyle: {
              backgroundColor: '#38394D',
           },
          }}
        />
      </Tab.Navigator>
    )
}

export default MainTabNavigator

const styles = StyleSheet.create({})
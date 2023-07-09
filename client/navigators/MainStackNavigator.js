import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Welcome from '../screens/Welcome';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import Meeting from '../screens/Meeting';
import Message from '../screens/Message';
import UserInfo from '../screens/UserInfo';
import AudioCall from '../screens/AudioCall';
import VedioCall from '../screens/VedioCall';
import Call from '../screens/Call';
import MeetingCall from '../screens/MeetingCall';
import RoomMessage from '../screens/RoomMessage';

const MainStackNavigator = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Welcome" 
                    component={Welcome} 
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }} 
                />
                <Stack.Screen 
                    name="SignIn" 
                    component={SignIn}
                    options={{
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen 
                    name="LogIn" 
                    component={SignUp}
                    options={{
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen 
                    name="ForgotPassword" 
                    component={ForgotPassword}
                    options={{
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen 
                    name="Meeting" 
                    component={Meeting}
                    options={{
                        headerTitle: 'Start a Meeting',
                        headerTitleAlign: 'center',
                    }}
                />
                <Stack.Screen 
                    name="Message" 
                    component={Message}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="UserInfo" 
                    component={UserInfo}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="Audio" 
                    component={AudioCall}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="Vedio" 
                    component={VedioCall}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="Call" 
                    component={Call}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="MeetingCall" 
                    component={MeetingCall}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="RoomMessage" 
                    component={RoomMessage}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator

const styles = StyleSheet.create({})
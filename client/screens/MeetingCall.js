import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Camera, CameraType  } from 'expo-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MeetingCall = ({navigation}) => {

    const [type, setType] = useState(CameraType.front);
    const [startCamera, setStartCamera] = useState(false);

    const _startCamera = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        if (status === "granted") {
        setStartCamera(true);
        } else {
        Alert.alert("Access Denied");
        } 
    }

    const handleBack = () => {
        navigation.goBack('Dashboard');
    }

    const toggleCameraType = () => {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    const openChat = () => {
        navigation.navigate('RoomMessage');
    }

    useEffect( () => {
        _startCamera();
    })

  return (
        <View style={styles.container}>
        
            <StatusBar backgroundColor='black' barStyle='light-content'/>

            <View style={styles.topBar}>
                <Ionicons name='ios-chevron-back-outline' size={30} color='white' onPress={handleBack}/>
                <Ionicons name={type === CameraType.front ? 'md-camera-reverse-outline' : 'camera-reverse'} size={30} color='white' onPress={toggleCameraType}/>
                <Text style={{color: 'white', fontSize: 18}}>Zoom</Text>
                <TouchableOpacity style={styles.btn} onPress={handleBack}>
                    <Text style={styles.btnText}>End</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cameraContainer}>
                <Camera
                    type={type}
                    style={styles.camera}
                ></Camera>
            </View>

            <View style={styles.bottomBar}>
                <ScrollView
                    horizontal={true}
                >
                    <View style={styles.iconBtn}>
                        <FontAwesome name='file-audio-o' size={20} color='white' />
                        <Text style={{color: 'white', fontSize: 12}}>Mute</Text>
                    </View>
                    <View style={styles.iconBtn}>
                        <FontAwesome name='video-camera' size={20} color='white' />
                        <Text style={{color: 'white', fontSize: 12}}>Stop Vedio</Text>
                    </View>
                    <View style={styles.iconBtn}>
                        <AntDesign name='team' size={20} color='white' />
                        <Text style={{color: 'white', fontSize: 12}}>Participants</Text>
                    </View>
                    <View style={styles.iconBtn}>
                        <Ionicons name='chatbox' size={20} color='white' onPress={openChat}/>
                        <Text style={{color: 'white', fontSize: 12}}>Chat</Text>
                    </View>
                    <View style={styles.iconBtn}>
                        <Entypo name='emoji-happy' size={20} color='white' />
                        <Text style={{color: 'white', fontSize: 12}}>Reactions</Text>
                    </View>
                    <View style={styles.iconBtn}>
                        <Ionicons name='share' size={20} color='white' />
                        <Text style={{color: 'white', fontSize: 12}}>Share</Text>
                    </View>
                    <View style={styles.iconBtn}>
                        <Entypo name='clipboard' size={20} color='white' />
                        <Text style={{color: 'white', fontSize: 12}}>Whiteboard</Text>
                    </View>
                    <View style={styles.iconBtn}>
                        <Entypo name='dots-three-vertical' size={20} color='white' />
                        <Text style={{color: 'white', fontSize: 12}}>More</Text>
                    </View>
                </ScrollView>
            </View>
        
        </View>
  )
}

export default MeetingCall

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    topBar: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    cameraContainer: {
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    camera: {
        width: '100%',
        height: '90%'
    },
    bottomBar: {
        backgroundColor: '#121619',
        flex: 1,
        gap: 20,
        paddingLeft: 20
    },
    btn: {
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10
    },
    btnText: {
        color: 'white'
    },
    iconBtn: {
        paddingHorizontal: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
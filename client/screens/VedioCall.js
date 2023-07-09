import { Image, StyleSheet, Text, TouchableOpacity, View, StatusBar,Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Camera, CameraType  } from 'expo-camera';

const VedioCall = ({navigation, route}) => {

    const { title } = route.params;

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
        navigation.navigate('Contacts');
    }

    useEffect( () => {
        _startCamera();
    })

    return (
        <View style={styles.container}>

            <StatusBar backgroundColor='black' barStyle='light-content'/>

            <View style={styles.top}>
                <Text style={{fontSize: 25, color: 'white', marginTop: 20}}>{title}</Text>
            </View>
            <View style={styles.middle}>
                <Camera
                    type={type}
                    style={styles.camera}
                ></Camera>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.btn} onPress={handleBack}>
                    <Text style={styles.endText}>End Call</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

export default VedioCall

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        flex: 1.5,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    middle: {
        flex: 10,
        backgroundColor: 'blue'
    },
    bottom: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        height: 50,
        backgroundColor: 'red',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        borderRadius: 5,
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    endText: {
        fontSize: 18, 
        color: 'white'
    },
    camera: {
        width: '100%',
        height: '100%'
    },
})
import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const AudioCall = ({navigation, route}) => {

    const [isGo, setIsGO] = useState(true);

    const { title, icon } = route.params;

    useEffect( () => {
        if(isGo == true){
          setTimeout( () => {
            navigation.navigate('Call', {
                title: title,
                icon: icon
            });
            setIsGO(false);
          }, 3000);
        }
      });

    return (
        <View style={styles.container}>

            <View style={styles.name}>
                <Text style={styles.text1}>{title}</Text>
                <Text style={styles.text}>Dialing...</Text>
            </View>

            <Image 
                source={{uri: `${icon}`}}
                style={styles.image}
            />

            <TouchableOpacity style={styles.endCall} onPress={ () => navigation.navigate('Contacts')}>
                <Text style={styles.text}>End Call</Text>
            </TouchableOpacity>

        </View>
    )
}

export default AudioCall

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#525252'
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 40,
        marginBottom: 30,
    },
    endCall: {
        marginTop: 30,
        backgroundColor: 'red',
        paddingHorizontal: 30,
        paddingVertical: 15,
        maxWidth: 250,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        borderRadius: 5,
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    text: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10
    },
    text1: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 10
    },
    name: {
        position: 'absolute',
        top: 80
    }
})
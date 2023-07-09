import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const Call = ({navigation, route}) => {

  const [time, setTime] = useState(0);

  const { title, icon } = route.params;

  return (
    <View style={styles.container}>

            <View style={styles.name}>
                <Text style={styles.text1}>{title}</Text>
                <Text style={styles.text}>00.00</Text>
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

export default Call

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
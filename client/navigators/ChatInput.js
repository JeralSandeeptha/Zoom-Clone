import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import AntDesign from 'react-native-vector-icons/Feather';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { TextInput } from 'react-native-gesture-handler';

const ChatInput = ({title}) => {

    const [message, setMessage] = useState('');

  return (
    <View style={styles.container}>
        <AntDesign name='plus' size={25} color='#d0d0d0'/>
        <View style={styles.textfield}>
            <TextInput 
                placeholder={`Message ${title}`}
                textAlign='center'
                style={styles.text}
                onChange={ (text) => setMessage(text)}
            />
            <Entypo name='emoji-happy' size={25} color='#d0d0d0'/>
        </View>
        <Feather name='send' size={25} color='#d0d0d0'/>
    </View>
  )
}

export default ChatInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0
    },
    textfield: {
        backgroundColor: '#fff',
        height: 50,
        borderColor: '#f7f7f9',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        paddingVertical: 10,
        gap: 10,
        maxWidth: 300,
        width: 300
    },
    text: {
        width: 200
    }
})
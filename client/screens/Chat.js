import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Chat = ({navigation}) => {

  const [items, setItems] = useState([
    {
      title: 'Starred',
      icon: 'star'
    },
    {
      title: 'Folders',
      icon: 'folderopen'
    }
  ]);

  const [contacts, setContacts] = useState([
    {
      title: '156 (you)',
      icon: 'https://gamedevbeginner.com/wp-content/uploads/Random-Feature.jpg',
      lastMessage: 'Bye Jeral',
      online: 'Yes'
    },
    {
      title: 'Maneesha Perera',
      icon: 'https://c8.alamy.com/comp/2D2YFY5/randomization-instrument-tool-concept-random-number-generator-2D2YFY5.jpg',
      lastMessage: 'Bye Maneesha',
      online: 'No'
    },
    {
      title: 'Ayesha Udunuwarage',
      icon: 'https://www.create8.co.uk/wp-content/uploads/2020/06/image-copyrights-blog-post.jpg',
      lastMessage: 'Bye Ayesha',
      online: 'Yes'
    },
    {
      title: '156 (you)',
      icon: 'https://gamedevbeginner.com/wp-content/uploads/Random-Feature.jpg',
      lastMessage: 'Bye Jeral',
      online: 'Yes'
    },
    {
      title: 'Maneesha Perera',
      icon: 'https://c8.alamy.com/comp/2D2YFY5/randomization-instrument-tool-concept-random-number-generator-2D2YFY5.jpg',
      lastMessage: 'Bye Maneesha',
      online: 'No'
    },
    {
      title: 'Ayesha Udunuwarage',
      icon: 'https://www.create8.co.uk/wp-content/uploads/2020/06/image-copyrights-blog-post.jpg',
      lastMessage: 'Bye Ayesha',
      online: 'Yes'
    },
    {
      title: 'Maneesha Perera',
      icon: 'https://c8.alamy.com/comp/2D2YFY5/randomization-instrument-tool-concept-random-number-generator-2D2YFY5.jpg',
      lastMessage: 'Bye Maneesha',
      online: 'No'
    },
    {
      title: 'Ayesha Udunuwarage',
      icon: 'https://www.create8.co.uk/wp-content/uploads/2020/06/image-copyrights-blog-post.jpg',
      lastMessage: 'Bye Ayesha',
      online: 'Yes'
    },
    {
      title: '156 (you)',
      icon: 'https://gamedevbeginner.com/wp-content/uploads/Random-Feature.jpg',
      lastMessage: 'Bye Jeral',
      online: 'Yes'
    },
    {
      title: 'Maneesha Perera',
      icon: 'https://c8.alamy.com/comp/2D2YFY5/randomization-instrument-tool-concept-random-number-generator-2D2YFY5.jpg',
      lastMessage: 'Bye Maneesha',
      online: 'No'
    },
  ]);

  return (
    <View style={styles.conatiner}>

      <StatusBar backgroundColor='#38394D' barStyle='light-content'/>

      <View style={styles.serachSection}>
        <Fontisto name='search' size={25} color='gray'/>
        <TextInput placeholder='Search' style={{color: 'gray'}}/>
      </View>

      {
        items.map( (item, index) => {
          return(
            <TouchableOpacity key={index} style={styles.contact}>
              <View style={styles.image}>
                <AntDesign name={item.icon} size={25} color='gray'/>
              </View>
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          )
        })
      }

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          contacts.map( (contact, index) => {
            return(
              <TouchableOpacity key={index} style={styles.contactContact} onPress={ () => navigation.navigate('Message', {
                title: contact.title,
                online: contact.online,
                icon: contact.icon
              })}>
                <View style={{
                  width: 15,
                  height: 15,
                  borderRadius: 50,
                  position: 'absolute',
                  borderColor: 'white',
                  borderWidth: 2,
                  backgroundColor: `${contact.online == 'Yes' ? 'red' : 'green'}`,
                  zIndex: 10,
                  top: 0,
                  left: 0
                }}></View>
                <Image source={{uri: `${contact.icon}`}} style={styles.userImage}></Image>
                <View style={styles.info}>
                  <Text style={styles.name}>{contact.title}</Text>
                  <Text style={styles.description}>{contact.lastMessage}</Text>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>

    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  serachSection: {
    flexDirection: 'row',
    backgroundColor: '#d0d0d0',
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 15
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  image: {
    width: 60,
    height: 60,
    backgroundColor: '#d0d0d0',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  },
  title: {
    fontSize: 18,
    fontWeight: '700'
  },
  contactContact: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  userImage: {
    width: 60,
    height: 60,
    backgroundColor: '#d0d0d0',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  },
  name: {
    fontSize: 16,
    fontWeight: '700'
  },
  description: {
    fontSize: 13
  },
  info: {
    justifyContent: 'center'
  },
})
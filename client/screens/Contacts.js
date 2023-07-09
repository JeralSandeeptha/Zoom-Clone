import { StatusBar, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';

const Contacts = ({navigation}) => {

  const [contacts, setContacts] = useState([
    {
      title: '156 (you)',
      icon: 'https://gamedevbeginner.com/wp-content/uploads/Random-Feature.jpg',
      lastMessage: 'Bye Jeral',
      online: 'Yes',
      email: 'jeral.sandeeptha1@gmail.com'
    },
    {
      title: 'Maneesha Perera',
      icon: 'https://c8.alamy.com/comp/2D2YFY5/randomization-instrument-tool-concept-random-number-generator-2D2YFY5.jpg',
      lastMessage: 'Bye Maneesha',
      online: 'No',
      email: 'maneesha@gmail.com'
    },
    {
      title: 'Ayesha Udunuwarage',
      icon: 'https://www.create8.co.uk/wp-content/uploads/2020/06/image-copyrights-blog-post.jpg',
      lastMessage: 'Bye Ayesha',
      online: 'Yes',
      email: 'ayesh@gmail.com'
    },
    {
      title: '156 (you)',
      icon: 'https://gamedevbeginner.com/wp-content/uploads/Random-Feature.jpg',
      lastMessage: 'Bye Jeral',
      online: 'Yes',
      email: 'jeral.sandeeptha1@gmail.com'
    },
    {
      title: 'Maneesha Perera',
      icon: 'https://c8.alamy.com/comp/2D2YFY5/randomization-instrument-tool-concept-random-number-generator-2D2YFY5.jpg',
      lastMessage: 'Bye Maneesha',
      online: 'No',
      email: 'maneesha@gmail.com'
    },
    {
      title: 'Ayesha Udunuwarage',
      icon: 'https://www.create8.co.uk/wp-content/uploads/2020/06/image-copyrights-blog-post.jpg',
      lastMessage: 'Bye Ayesha',
      online: 'Yes',
      email: 'ayesh@gmail.com'
    },
    {
      title: 'Maneesha Perera',
      icon: 'https://c8.alamy.com/comp/2D2YFY5/randomization-instrument-tool-concept-random-number-generator-2D2YFY5.jpg',
      lastMessage: 'Bye Maneesha',
      online: 'No',
      email: 'maneesha@gmail.com'
    },
    {
      title: 'Ayesha Udunuwarage',
      icon: 'https://www.create8.co.uk/wp-content/uploads/2020/06/image-copyrights-blog-post.jpg',
      lastMessage: 'Bye Ayesha',
      online: 'Yes',
      email: 'ayesh@gmail.com'
    },
    {
      title: '156 (you)',
      icon: 'https://gamedevbeginner.com/wp-content/uploads/Random-Feature.jpg',
      lastMessage: 'Bye Jeral',
      online: 'Yes',
      email: 'jeral.sandeeptha1@gmail.com'
    },
    {
      title: 'Maneesha Perera',
      icon: 'https://c8.alamy.com/comp/2D2YFY5/randomization-instrument-tool-concept-random-number-generator-2D2YFY5.jpg',
      lastMessage: 'Bye Maneesha',
      online: 'No',
      email: 'maneesha@gmail.com'
    },
  ]);

  return (
    <View style={styles.conatiner}>

      <StatusBar backgroundColor='#38394D' barStyle='light-content'/>
      
      <View style={styles.serachSection}>
        <Fontisto name='search' size={25} color='gray'/>
        <TextInput placeholder='Search' style={{color: 'gray'}}/>
      </View>

      <View style={styles.headerSection}>
        <Text style={styles.header}>My Contacts</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          contacts.map( (contact, index) => {
            return(
              <TouchableOpacity 
                key={index} 
                style={styles.contactContact}
                onPress={ () => navigation.navigate('UserInfo', {
                  title: contact.title,
                  online: contact.online,
                  icon: contact.icon,
                  email: contact.email
                })}
              >
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

export default Contacts

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
  headerSection: {
    marginBottom: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import MainTabNavigator from '../navigators/MainTabNavigator';

const Home = () => {
  return (
    <MainTabNavigator />
  )
}

export default Home

const styles = StyleSheet.create({})
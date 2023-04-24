import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SousTitre from '../Components/Elle/SousTitre'
import ElleVueFirst from '../Vues/Elle/ElleVueFirst'
import {createStackNavigator} from '@react-navigation/stack'
import VueElle2 from '../Components/Elle/VueElle2'
const Stack = createStackNavigator()
import { NavigationContainer } from '@react-navigation/native';



const screenOptions = {
  headerShown:false,  
}


export default function ElleNav() {
  return (
    
      <Stack.Navigator initialRouteName='ElleVueFirst' screenOptions={screenOptions}>
        <Stack.Screen name='ElleVueFirst' component={ElleVueFirst} />
        <Stack.Screen name='VueElle2' component={VueElle2} />
      </Stack.Navigator>
    
  )
}

const styles = StyleSheet.create({})
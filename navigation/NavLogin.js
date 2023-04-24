import {createStackNavigator} from '@react-navigation/stack'
import React, { useContext,useState,useEffect } from 'react'
import {NavigationContainer} from '@react-navigation/native';

 


//context

import SignUpScreen from '../Vues/login/SignUpScreen'
import LoginScreen from '../Vues/login/LoginScreen'
import NavPrincipal from './NavPrincipal'


const Stack = createStackNavigator() 

const screenOptions = { headerShown:false }
 
const NavLogin = () => {

  return(
   <Stack.Navigator screenOptions={screenOptions} initialRouteName='LoginScreen'>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
      <Stack.Screen name='NavPrincipal' component={NavPrincipal} />
  </Stack.Navigator>
)}

 

export default NavLogin 
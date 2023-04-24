import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState,useContext } from 'react';
import PintNav from './navigation/PintNav';
import ElleNav from './navigation/ElleNav';
import VueTikTok from './Vues/tiktok/VueTikTok';
import NavPrincipal from './navigation/NavPrincipal';
import LoginScreen from './Vues/login/LoginScreen';
import SignUpScreen from './Vues/login/SignUpScreen';
import NavLogin from './navigation/NavLogin';
import NewNav from './navigation/NewNav';
import "expo-dev-client"


export default function App() {

  return (
  <NewNav />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { View, Text, SafeAreaView, ScrollView,Modal,Dimensions, TouchableOpacity, ImageBackground, TextInput, Alert } from 'react-native'
import React, { useState,useContext } from 'react'

import { UserContext } from '../../navigation/NavPrincipal'
//import { Video, AVPlaybackStatus } from 'expo-av';
//import firebase from '../../config'
//import { Mydb } from '../../config'
//import { doc, updateDoc, arrayUnion, arrayRemove,serverTimestamp,Timestamp,getDoc } from "firebase/firestore";
import ElleVueFirst from './ElleVueFirst';
import ElleStage from './ElleStage';
import EllePost from './EllePost';

const ElleVue2 = () => {
  const {vueElle,setVueElle}= useContext(UserContext)
  return (
    <View>
    {  vueElle=="ElleVueFirst"?
    <ElleVueFirst />
     :
      ( vueElle=="ellevue3"?
      <ElleStage />
      :
      ( vueElle=="ellepost"?
      <EllePost />
      :( vueElle=="ellevue4"?
      <View style={{backgroundColor:'green',height:500,width:1000}}></View>
      :( vueElle=="ellevue5"?
      <View style={{backgroundColor:'blue',height:500,width:1000}}></View>
      :( vueElle=="ellevue6"?
      <View style={{backgroundColor:'orange',height:500,width:1000}}></View>
      :( vueElle=="ellevue7"?
      <View style={{backgroundColor:'red',height:500,width:1000}}></View>
      :( vueElle=="ellevue7"?
      <View style={{backgroundColor:'red',height:500,width:1000}}></View>
      :( vueElle=="ellevue8"?
      <View style={{backgroundColor:'red',height:500,width:1000}}></View>
      :( vueElle=="ellevue9"?
      <View style={{backgroundColor:'red',height:500,width:1000}}></View>
      :( vueElle=="ellevue10"?
      <View style={{backgroundColor:'red',height:500,width:1000}}></View>
      :( vueElle=="ellevue11"?
      <View style={{backgroundColor:'red',height:500,width:1000}}></View>
      :( vue=="ellevue12"?
      <View style={{backgroundColor:'red',height:500,width:1000}}></View>
      :( vue=="ellevue13"?
      <View style={{backgroundColor:'red',height:500,width:1000}}></View>
      :( vueElle=="ellevue14"?
      <View style={{backgroundColor:'red',height:500,width:1000}}></View>
      :( vueElle=="ellevue15"?
      <View style={{backgroundColor:'red',height:500,width:1000}}></View>
      :<View></View>))))))))))
      ))
      )
      )
      )
     }
    </View>
  )
}

export default ElleVue2

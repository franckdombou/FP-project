import { View, Text, SafeAreaView, ScrollView,Modal,Dimensions, TouchableOpacity, ImageBackground, TextInput, Alert } from 'react-native'
import React, { useState,useContext } from 'react'
import Carre from '../../Components/pinterest/Carre'
import CarreSmall from '../../Components/pinterest/CarreSmall'
import Bande from '../../Components/pinterest/Bande'
import VueBande from '../../Components/pinterest/VueBande'
import { UserContext } from '../../navigation/NavPrincipal'
import { Video, AVPlaybackStatus } from 'expo-av';
import firebase from '../../config'
import { Mydb } from '../../config'
import { doc, updateDoc, arrayUnion, arrayRemove,serverTimestamp,Timestamp,getDoc } from "firebase/firestore";
import HeaderNav from '../../Components/pinterest/HeaderNav'
import VuesFirst from './VuesFirst'
import Vue2 from './Vue2'
import Vue4 from './Vue4'
import Vue5 from './Vue5'
import VueFirstEscaro from './VueFirstEscaro'
import Vue7 from './Vue7'


const Vue3 = () => {
  const {vue,setVues}= useContext(UserContext)
  return (
    <View>
    {  vue=="vue5"?
    <Vue5 />
     :
      ( vue=="vue1"?
      <VueFirstEscaro />
      :
      ( vue=="vue2"?
      <Vue2 />
      :( vue=="vue7"?
      <Vue7 />
      :( vue=="VuesFirst"?
      <VuesFirst />
      :( vue=="vue4"?
      <Vue4 />
      :( vue=="vue15"?
      <Vue5 />
      :( vue=="vue6"?
      <View style={{backgroundColor:'red',height:500,width:1000}}></View>
      :( vue=="vue7"?
      <View style={{backgroundColor:'red',height:500,width:1000}}></View>
      :( vue=="vue8"?
      <View style={{backgroundColor:'red',height:500,width:1000}}></View>
      :( vue=="vue9"?
      <View style={{backgroundColor:'red',height:500,width:1000}}></View>
      :( vue=="vue10"?
      <View style={{backgroundColor:'red',height:500,width:1000}}></View>
      :( vue=="vue11"?
      <View style={{backgroundColor:'red',height:500,width:1000}}></View>
      :( vue=="vue12"?
      <View style={{backgroundColor:'red',height:500,width:1000}}></View>
      :( vue=="vue13"?
      <View style={{backgroundColor:'red',height:500,width:1000}}></View>
      :( vue=="vue14"?
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

export default Vue3
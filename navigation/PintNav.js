import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import VuesFirst from '../Vues/Pinterest/VuesFirst';
import { useState,createContext,useContext } from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import VuesFirstEscaro from '../Vues/Pinterest/VueFirstEscaro';
import Vue3 from '../Vues/Pinterest/Vue3';
import Vue4 from '../Vues/Pinterest/Vue4';
import Vue5 from '../Vues/Pinterest/Vue5';
import Vue6 from '../Vues/Pinterest/Vue6';
import NavPrincipal from './NavPrincipal';
const Stack = createStackNavigator()
//export const UserContext = createContext()
import firebase from '../config'
import HeaderNav from '../Components/pinterest/HeaderNav';


const screenOptions = {
  headerShown:false,  
}



//Dimension
const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width


export default function PintNav() {

  const [modalChoose, setModalChoose]= useState(false)
  const [modalChoose2, setModalChoose2]= useState(false)
  const [valChoose,setValChoose] = useState(5)
  const [modalPanier,setModalPanier]=useState(false)
  const [ChooseChoise,setChooseChoise]=useState([])
  const [ChooseChoiseImage,setChooseChoiseImage]=useState("")
  const [ChooseChoiseName,setChooseChoiseName]=useState("")
  const [ChooseChoisePrice,setChooseChoisePrice]=useState(0)
  const [PanierPriceTotal,setPanierPriceTotal]=React.useState(0)


    //firebase debut
    let  ref = 0 
    
    const [values, SetValues] =React.useState("")
    const [datUser1, setDatUser1] =React.useState("")
    ref = firebase.firestore().collection("2023USER")
  
    // console.log(ref)
     
    const [data,setData]=React.useState([])
    const [loader,setLoader] =React.useState(true)
   
    function getData(){
     ref.onSnapshot((querySnapshot) => { 
       const items = []
       querySnapshot.forEach((doc) => {
         items.push(doc.data())
       })
       setData(items)
       setDatUser1(items)
       setLoader(false)
     })
    } 
  
    React.useEffect(() =>{
     getData()
 //  console.log('mes dataaaaaaa123 dans NAVPRINCIPAL',data)
    },[])


  return (
    <React.Fragment>
      <HeaderNav />
    <Stack.Navigator initialRouteName='VueUn1' screenOptions={screenOptions}>
     <Stack.Screen name='VueUn1' component={VuesFirst} />
     <Stack.Screen name='VueUn2' component={VuesFirstEscaro} />
     <Stack.Screen name='VueUn3' component={Vue3} />
     <Stack.Screen name='VueUn4' component={Vue4} />
     <Stack.Screen name='VueUn5' component={Vue5} />
     <Stack.Screen name='VueUn6' component={Vue6} />
     <Stack.Screen name='Nav' component={HeaderNav} />
    </Stack.Navigator>
    </React.Fragment>
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

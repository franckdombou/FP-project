import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Ionicons from 'react-native-vector-icons/Ionicons'
//import Icon from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from '@expo/vector-icons/Ionicons';


const Tab = createBottomTabNavigator();
import PintNav from './PintNav'
import ElleNav from './ElleNav';
import { Dimensions, Image, ImageBackground, Modal, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState,useContext,createContext, useEffect } from 'react';
//import { UserContext } from './PintNav';
import firebase from '../config'
export const UserContext = createContext()


import LazyLoad from '../Vues/tiktok/LazyLoad';
import VuesFirst from '../Vues/Pinterest/VuesFirst';
import Vue4 from '../Vues/Pinterest/Vue4';
import HeaderNav from '../Components/pinterest/HeaderNav';
import Vue3 from '../Vues/Pinterest/Vue3';
import VueParams from '../Vues/Params/VueParams';
import ElleHeader from '../Components/Elle/ElleHeader';
import ElleVue2 from '../Vues/Elle/ElleVue2';
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
import {onAuthStateChanged} from "firebase/auth"
import { auth } from '../config';
//import { UserContextNavApp } from './NavPrinc2';
import { UserContextNewNav } from './NewNav';
import VueTikTok from '../Vues/tiktok/VueTikTok';

// Screen names 
const homeName = 'Home'
const detailsName = 'Profil'
const settingsName = 'LeCosmopolitain'


export default function NavPrincipal(props) {

  const {currentUserNewNav, setCurrentUserNewNav}=useContext(UserContextNewNav)
  
  const [modalPanier,setModalPanier]=useState(false)
  const [modalPaiement,setModalPaiement]=useState(false)
  const [modalOM,setModalOM]=useState(false)
  const [modalMomo,setModalMomo]=useState(false)
 // const {emailSignUp}=props.route.params
{/*<Ionicons name='md-checkmark-circle' size={32} color='green' />;*/} 
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
   const [dataUsers1, setDatUsers1] = useState('')
  useEffect(() =>{
    onAuthStateChanged(auth, (currentUser)=>{
    setCurrentUserNewNav(currentUser)  
    })
//   console.log('current user', currentUser)  
},[])
useEffect(() =>{
 subscribed()
},[])
      
function subscribed (){ firebase.firestore()
.collection('2023USER')
.doc(currentUserNewNav.email)
.onSnapshot(doc => {
 const items = []
 
 items.push(doc.data())

 setDatUsers1(doc.data())
 //setCurrentUserRecent(doc.data())
// setMes(doc.data().name)
})}


    
    const [modalChoose, setModalChoose]= useState(false)
    const [modalChoose2, setModalChoose2]= useState(false)
    const [valChoose,setValChoose] = useState([""])
  //  const [modalPanier,setModalPanier]=useState(false)
    const [ChooseChoise,setChooseChoise]=useState([])
    const [ChooseChoiseImage,setChooseChoiseImage]=useState("")
    const [ChooseChoiseName,setChooseChoiseName]=useState("")
    const [ChooseChoisePrice,setChooseChoisePrice]=useState(0)
    const [PanierPriceTotal,setPanierPriceTotal]=React.useState(0)
   
   const [vue,setVues]=useState('vue5')
   const [vueElle,setVueElle]=useState('ElleVueFirst')
  const [modalElleCommentaire,setModalElleCommentaire] = useState(false)
  const [ElleComments,setElleComments]=useState([])
  const [ElleImageTwitt,setElleImageTwitt]=useState("")
  const [ElleVideoTwitt,setElleVideoTwitt]=useState("")
  const [ElleTextComments,setElleTextComments]=useState("")
  const [ElleNomTitre,setElleNomTitre]=useState("")
  const [ElleImageTitre,setElleImageTitre]=useState("")
  const [ElleEmail,setElleEmail]=useState("")
  const [ElleTwitt,setElleTwitt]=useState("")
  const [ElleLike,setElleLike]=useState(["a"])

  const [modalElleStage,setElleModalStage]= useState(false)


  
return (
  <UserContext.Provider value={{ElleLike,setElleLike,dataUsers1, setDatUsers1,ElleNomTitre,setElleNomTitre,ElleImageTitre,setElleImageTitre,modalElleStage,setElleModalStage,ElleVideoTwitt,setElleVideoTwitt,ElleTwitt,setElleTwitt,ElleEmail,setElleEmail,ElleComments,setElleComments,ElleImageTwitt,setElleImageTwitt,ElleTextComments,setElleTextComments,modalElleCommentaire,setModalElleCommentaire,vueElle,setVueElle,vue,setVues,datUser1, setDatUser1,ChooseChoisePrice,setChooseChoisePrice,ChooseChoiseName,setChooseChoiseName,modalChoose, setModalChoose,valChoose,setValChoose,modalChoose2, setModalChoose2,modalPanier,setModalPanier,ChooseChoise,setChooseChoise,ChooseChoiseImage,setChooseChoiseImage,PanierPriceTotal,setPanierPriceTotal}}>

    
    <Tab.Navigator
     screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        let rn = route.name;

        if(rn === homeName) {
            iconName = focused ? 'cart' : 'cart-outline'
        } else if(rn === detailsName) {
            iconName = focused ? 'man' : 'man-outline'
        } else if (rn === settingsName){
            iconName = focused ? 'infinite' : 'infinite-outline'
        }
      return <Ionicons  name={iconName} size={size} color={color} />
    },
      tabBarStyle:{backgroundColor:'#000'},
      headerStyle: {
        backgroundColor: '#000',
      },
     // headerShown:false,
      //tabBarActiveTintColor:'white',
      tabBarActiveTintColor: 'rgb(249, 180, 45)',
      tabBarInactiveTintColor: 'gray',

  })}
    >
     
      <Tab.Screen 
        name="Home" 
        component={Vue3}
        
        options={{
          headerTitle:()=>(
          <HeaderNav />
          )
        }} 
      />

      <Tab.Screen 
        name="LeCosmopolitain" 
        component={ElleVue2}
        options={{
          headerTitle:()=>(
            <ElleHeader />
          )
        }}
        />



      <Tab.Screen 
        name="Profil"
      //  tabBarStyle={{backgroundColor:'#000'}} 
       component={VueParams}
      //  component={VueTikTok}
       
      />


   {/* <Tab.Screen 
        name="panier"
      //  tabBarStyle={{backgroundColor:'#000'}} 
        component={VueTikTok}
        options={{
          headerTitle:false
        }}
        />*/}
    </Tab.Navigator>
    
  
  </UserContext.Provider>
  );
}

const ModPanier = ()=>{
    
  return(
    <Modal animationType='slide'
    transparent={true}
    visible={modalPanier}
    onRequestClose={() => {
      setModalPanier(!modalPanier)
  }}
  >
    <SafeAreaView style={{backgroundColor:'#000',height:HEIGHT,width:WIDTH}}>

    

      <ImageBackground source={require('../assets/titre/escarpin.jpg')} style={{height:HEIGHT,marginBottom:20}}>
      <ScrollView>
        <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
          <TouchableOpacity>
            <Text style={{fontSize:30,fontWeight:'800',color:'red'}}> {"<"} </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize:30,fontWeight:'800',color:'red'}}>...</Text>
          </TouchableOpacity>
       
          </View>

       

    

      
       


        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  </Modal>

  )
}

const Produit = ({price,name,image,})=>{
  
 // setPanierPrice(PanierPrice+price)


  return(
    <View style={{width:WIDTH*0.9,height:150,backgroundColor:'white',margin:10,alignSelf:'center',borderRadius:10,flexDirection:'row',justifyContent:'space-between'}}>
    <Image source={{uri:image}} style={{height:100,width:100,margin:10,alignSelf:'center'}} />
    <View style={{width:230,margin:5,flexDirection:'column',justifyContent:'space-between'}}>
      <View style={{height:50,margin:5}}>
        <Text style={{alignSelf:'center',fontWeight:'800',fontSize:15,flexWrap:'wrap'}}> {name} </Text>
      </View>

      <View style={{height:50,margin:5,flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{alignSelf:'center',fontWeight:'800',fontSize:15,flexWrap:'wrap',marginTop:1}}>fcfa {price}K</Text>
        
        <View style={{height:50,width:150,justifyContent:'center',alignSelf:'center'}}>
          
          <View style={{height:30,width:120,alignSelf:'center',borderRadius:20,justifyContent:'space-between',flexDirection:'row'}}>
            
            <TouchableOpacity style={{height:30,width:100,backgroundColor:'white',borderRadius:20,backgroundColor:'red',borderBottomLeftRadius:20}}>
              <Text style={{alignSelf:'center',fontWeight:'800',fontSize:20}}>annuler</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>

    </View>
  </View>  
  )
}
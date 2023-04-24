import React from 'react'
import {onAuthStateChanged} from "firebase/auth"
import { createContext,useState,useEffect,useContext } from "react";
import { auth } from '../config';

import firebase from '../config'

 
export const UserContextNavApp = createContext()



import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer';
import NavPrincipal from './NavPrincipal';

const Drawer = createDrawerNavigator();


const screenOptions = {
  headerShown:false,  
} 

const Stack = createStackNavigator()



 
const NavPrinc2 = () => {

  const [donnees,setDonnees] = useState('') 
  const [currentUserdata, setCurrentUserdata] = useState()
  //gestion des donnees 


 
//shop cart
const [modalVisible, setModalVisible] = React.useState(false)


//fin gestion des donnees


  
 const [loadingData, setLoadingData] = useState(false)
const [currentUserContainer, setCurrentUserContainer] = useState()
const [logingPending,setLogingPending] = useState(false)
 
const [modalArchive,setModalArchive]=useState(false)

const [emailHigh,setEmailHigh] = useState('eben1@gmail.com')


 
  useEffect(() =>{
    onAuthStateChanged(auth, (currentUser)=>{
      setCurrentUserContainer(currentUser)
       setLoadingData(true)  
     })
  //   console.log('current user', currentUser)  
   },[])

   const [datUser, setDatUser] = useState(null)

        const [mes, setMes]= useState()
      
        function subscribed (){ firebase.firestore()
        .collection('2023USER')
        .doc(emailHigh)
        .onSnapshot(doc => {
         const items = []
         
         items.push(doc.data())
       
         setDatUser(doc.data())
         setMes(doc.data().name)
       }
       )
        
       }
       
       useEffect(() =>{
         subscribed()
        },[])

 
  return (
<Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      >
        <Drawer.Screen
        name="NavPrincipal"
        options={{drawerLabel: 'Home Screen'}}
        component={NavPrincipal}
      />  
  </Drawer.Navigator>
  )  
}


export default NavPrinc2
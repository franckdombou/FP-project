import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createContext,useState,useEffect,useContext } from "react";

export const UserContextNewNav = createContext()
import firebase from '../config'
import {onAuthStateChanged} from "firebase/auth"
import { auth } from '../config';
import NavPrincipal from './NavPrincipal';
import NavLogin from './NavLogin';
import Screen from '../Vues/login/Screen';
import NavPrinc2 from './NavPrinc2';
const Stack = createStackNavigator();

export default function NewNav() {
   // const [donnees,setDonnees] = useState('') 
   // const [currentUserdata, setCurrentUserdata] = useState()
    //gestion des donnees 
  
  
   
  //shop cart
 // const [modalVisible, setModalVisible] = React.useState(false)
  
  
  //fin gestion des donnees
  
  
    
 //  const [loadingData, setLoadingData] = useState(false)
 // const [currentUser, setCurrentUser] = useState()
  const [currentUserRecent, setCurrentUserRecent] = useState(["",""])
 // const [logingPending,setLogingPending] = useState(false)
   
 // const [modalArchive,setModalArchive]=useState(false)
 // const [datUser, setDatUser] = useState(docRecentNewNav)
  const [datUser, setDatUser] = useState()
  //const [datUserTest, setDatUserTest] = useState(true)
 // const [emailHigh,setEmailHigh] = useState('eben1@gmail.com')
  
 // const [mes, setMes]= useState()
  
  const [currentUserNewNav, setCurrentUserNewNav]= useState('')
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
  
   setDatUser(doc.data())
   setCurrentUserRecent(doc.data())
  // setMes(doc.data().name)
  }
  )
  
  }
  
    return (
  <UserContextNewNav.Provider value={{currentUserNewNav, setCurrentUserNewNav}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          {/* SplashScreen which will come once for 5 Seconds */}
          <Stack.Screen
            name="Screen"
            component={Screen}
            // Hiding header for Splash Screen
            options={{headerShown: false}}
          />
          {/* Auth Navigator: Include Login and Signup */}
          <Stack.Screen
            name="NavLogin"
            component={NavLogin}
            options={{headerShown:false}}
          />
          {/* Navigation Drawer as a landing page */}
          <Stack.Screen
            name="NavPrinc2"
            component={NavPrinc2}
            // Hiding header for Navigation Drawer
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </UserContextNewNav.Provider>
  
    )
  }
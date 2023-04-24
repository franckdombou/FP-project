



import { Dimensions, Image, ImageBackground, Modal, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState,useContext,createContext } from 'react';
//import { UserContext } from './PintNav';
import firebase from '../config'
//export const UserContext = createContext()
import { UserContext } from './NavPrincipal'
import { UserContextNewNav } from './NewNav';
import {onAuthStateChanged} from "firebase/auth"
import { auth } from '../config';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default function Panier() {

    const {vue,setVues}= useContext(UserContext)
    const {datUser1, setDatUser1,ChooseChoisePrice,setChooseChoisePrice,ChooseChoiseName,setChooseChoiseName,modalChoose, setModalChoose,valChoose,setValChoose,modalChoose2, setModalChoose2,modalPanier,setModalPanier,ChooseChoise,setChooseChoise,ChooseChoiseImage,setChooseChoiseImage,PanierPriceTotal,setPanierPriceTotal} = useContext(UserContext)
    const {currentUserNewNav, setCurrentUserNewNav}=useContext(UserContextNewNav)
    useEffect(() =>{
      onAuthStateChanged(auth, (currentUser)=>{
       setCurrentUserNewNav(currentUser)
       })
     //   console.log('current user', currentUser)  
     },[])

    ref = firebase.firestore().collection("2023USER")
 
    function subscribed (){ firebase.firestore()
      .collection('2023USER')
      .doc(currentUserNewNav.email)
      .onSnapshot(doc => {
       const items = []
       
       items.push(doc.data())
       setData(doc.data())
      // setDatUser(doc.data())
     //  setCurrentUserRecent(doc.data())
      // setMes(doc.data().name)
      }
      )
      
      }
     
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
     subscribed ()
 //  console.log('mes dataaaaaaa123 dans NAVPRINCIPAL',data)
    },[])
 

  return (
    <View>
    <SafeAreaView style={{backgroundColor:'#E8E8E8',height:HEIGHT,width:WIDTH}}>

   

      <View style={{height:HEIGHT,marginBottom:20,}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',margin:10,backgroundColor:'white'}}>
          <TouchableOpacity onPress={()=>setModalPanier(false)}>
            <Text style={{fontSize:30,fontWeight:'800',color:'#000'}}> {"<"} </Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row',alignSelf:'center'}}>
            <Text style={{fontSize:12,fontWeight:'800',color:'#000',alignSelf:'center'}}>solde : </Text>
            <Text style={{fontSize:12,fontWeight:'800',color:'#000'}}>150000</Text>
            <Text style={{fontSize:12,fontWeight:'800',color:'#000',alignSelf:'center'}}> fcfa</Text>
          </View>

          <TouchableOpacity onPress={()=>setModalPaiement(!modalPaiement)} style={{backgroundColor:'green',height:50,width:150,alignSelf:'center',alignContent:'center'}}>
            <Text style={{color:'#fff',alignSelf:'center',textAlign:'center',fontSize:12,fontWeight:'bold',margin:15,flexWrap:'wrap'}}>Recharger solde</Text>
          </TouchableOpacity>
       
        </View>
     
      <ScrollView>
      
      {
            data.map((pan,kei)=>
              pan.etat=="panier" ?  <Produit   price={pan.prix} name={pan.nom} image={pan.image} key={kei} /> 
              :
               <View key={kei}></View>
            )
          }
      

      </ScrollView>

      
      <View style={{height:80,width:WIDTH,backgroundColor:'#fff',marginBottom:50,flexDirection:'row',justifyContent:'flex-end',}}>
        <Text style={{alignSelf:'center',marginRight:10,fontWeight:'600'}}>fcfa  K</Text>
        <TouchableOpacity style={{backgroundColor:'#000',marginRight:25,height:50,width:150,alignSelf:'center',alignContent:'center'}}>
          <Text style={{color:'#fff',alignSelf:'center',textAlign:'center',fontSize:20,fontWeight:'bold',marginTop:10}}>PAYER</Text>
        </TouchableOpacity>
       
      </View>
      </View>

      <Modal animationType='slide'
    transparent={true}
    visible={modalPaiement}
    onRequestClose={() => {
      setModalPaiement(!modalPaiement)
  }}
  >
    <SafeAreaView style={{backgroundColor:'#F8F8F8',height:HEIGHT,}}>
      <ScrollView style={{height:40}}>
        <View style={{justifyContent:'space-between',flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>setModalPaiement(false)}>
            <Text style={{fontSize:30,fontWeight:'900',marginLeft:17}}>{"<"}</Text>
          </TouchableOpacity>
          <Text style={{fontSize:15,fontWeight:'900',marginLeft:12,marginTop:15,marginRight:10}}>solde : 15000.00 fcfa</Text>
        </View>
        <ImageBackground source={require('../assets/icons/nikenoir.jpg')} style={{width:WIDTH,height:200,marginTop:20}}>

        </ImageBackground>

      <View style={{backgroundColor:'#fff',marginBottom:10}}>
        <Text style={{alignSelf:'center',marginTop:10,fontWeight:'600',color:'#000',}}>METHODES RECOMMENDEES</Text>

        <View style={{flexDirection:'column',}}>
          
          <TouchableOpacity onPress={()=>setModalOM(!modalOM)} style={{backgroundColor:'white',flexDirection:'column',alignSelf:'center',margin:10}}>
            <Image source={require('../assets/icons/OM.jpg')} style={{height:100,width:150}} />
            <View style={{backgroundColor:'#FF8C00',height:30,alignContent:'center',}}>
              <Text style={{alignSelf:'center',color:'white',fontWeight:'900',marginTop:7}}>ORANGE MONEY</Text>
            </View>
          </TouchableOpacity>

          < TouchableOpacity onPress={()=>setModalMomo(!modalMomo)} style={{backgroundColor:'white',flexDirection:'column',alignSelf:'center',marginBottom:10}}>
            <Image source={require('../assets/icons/momo.jpg')} style={{height:100,width:150}} />
            <View style={{backgroundColor:'#4682B4',height:30}}>
              <Text style={{alignSelf:'center',color:'white',fontWeight:'900',marginTop:7}}>MOBILE MONEY</Text>
            </View>
          </TouchableOpacity>

          </View>
        </View>

        <ImageBackground source={require('../assets/icons/LVMH.png')} style={{width:WIDTH,height:200,marginTop:20}}>

        </ImageBackground>

      </ScrollView>
    </SafeAreaView>


                  {/** modal orange */}
                  <Modal animationType='slide'
    transparent={true}
    visible={modalOM}
    onRequestClose={() => {
      setModalOM(!modalOM)
  }}
  >
    <SafeAreaView style={{height:HEIGHT,backgroundColor:'#fff'}}>
      <View style={{height:200,backgroundColor:'red',marginTop:30,}}>
        <ImageBackground source={require('../assets/icons/OM.jpg')} style={{height:100}}>

        </ImageBackground>

        <View style={{backgroundColor:'green',height:100}}>

        </View>

        <View style={{height:100,justifyContent:'space-between',flexDirection:'row',margin:10,width:250,alignSelf:'center'}}>
          
          <TouchableOpacity onPress={()=>setModalOM(false)} style={{backgroundColor:'red',width:90,height:40}}>
            <Text style={{textAlign:'center',alignSelf:'center',margin:10,color:'white',fontWeight:'900',}}>ANNULER</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={{backgroundColor:'green',width:90,height:40}}>
            <Text style={{textAlign:'center',alignSelf:'center',margin:10,color:'white',fontWeight:'900',}}>VALIDER</Text>
          </TouchableOpacity>
          
        </View>

        </View>
    </SafeAreaView>
  </Modal>

  {/** modal MOMO */}
  <Modal animationType='slide'
    transparent={true}
    visible={modalMomo}
    onRequestClose={() => {
      setModalMomo(!modalMomo)
  }}
  >
    <SafeAreaView style={{height:HEIGHT,backgroundColor:'#fff'}}>
      <View style={{height:200,backgroundColor:'red',marginTop:30,}}>
        <ImageBackground source={require('../assets/icons/momo.jpg')} style={{height:100}}>

        </ImageBackground>

        <View style={{backgroundColor:'green',height:100}}>

        </View>

        <View style={{height:100,justifyContent:'space-between',flexDirection:'row',margin:10,width:250,alignSelf:'center'}}>
          <TouchableOpacity onPress={()=>setModalMomo(!modalMomo)} style={{backgroundColor:'red',width:90,height:40}}>
            <Text style={{textAlign:'center',alignSelf:'center',margin:10,color:'white',fontWeight:'900',}}>ANNULER</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'green',width:90,height:40}}>
            <Text style={{textAlign:'center',alignSelf:'center',margin:10,color:'white',fontWeight:'900',}}>VALIDER</Text>
          </TouchableOpacity>
        </View>

        </View>
    </SafeAreaView>
  </Modal>

   
  </Modal>
      
    </SafeAreaView>

          {/** MODAL ORANGE MONEY ET MOMO */}
    
          </View>
  )
}

const styles = StyleSheet.create({})

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
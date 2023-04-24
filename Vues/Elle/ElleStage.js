import { Dimensions, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
//import React, { useEffect, useState } from 'react'
import React, { useContext, useState } from 'react'
//import { UserContext } from '../../navigation/NavPrincipal'
import WebView from 'react-native-webview'
//import SousTitre from '../../Components/Elle/SousTitre'
//import WebView from 'react-native-webview'
import { UserContext } from '../../navigation/NavPrincipal'
import firebase from '../../config'


const tab =["C","C","S","C","D","E","E","D","D","D","D","D"]
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('screen').height


export default function ElleStage() {

  const [img,setImg]=useState('')
  const [lienc,setLienc]=useState('')
  const [textc,setTextc]=useState('')
  const [datec,setDatec]=useState('')
  const [nomc,setNomc]=useState('')
  const [modalV,setModalv]=useState(false)

   // const {modalElleStage,setElleModalStage}= useState(UserContext)
     //la webview
     const webviewRef = React.useRef(null);
     function webViewgoback() {
       if (webviewRef.current) webviewRef.current.goBack();
     }
     let refAnnonce=0
     const [dataAnnonce,setDataAnnonce]=React.useState([])
     refAnnonce = firebase.firestore().collection("/2023TWITT/a2twitt/opportunites")
     function getDataAnnonce(){
      refAnnonce.onSnapshot((querySnapshot) => { 
        const items = []
        querySnapshot.forEach((doc) => {
          items.push(doc.data())
        })
        setDataAnnonce(items)
      })
     }
     React.useEffect(() =>{
      getDataAnnonce()
     },[])
 
  return (
    <SafeAreaView style={{backgroundColor:'#000',height:HEIGHT}}>
      <ScrollView style={{marginTop:1,backgroundColor:'#000'}}>
      {
        dataAnnonce.reverse().map((list,key)=>
                <React.Fragment  key={key}>
                <SousTitre setNomc={setNomc} setModalv={setModalv} setImg={setImg} setDatec={setDatec} setTextc={setTextc} setLienc={setLienc} image={list.image} text={list.text} lien={list.lien} date={list.date} nom={list.nom} />
                <View style={{width:WIDTH,borderStartWidth:10,backgroundColor: 'black',height:1}}></View>
                </React.Fragment>
        )
      }
    
      </ScrollView>

      <Modal animationType='slide'
    // transparent={true}
      visible={modalV}
      onRequestClose={() => {
      setModalv(!modalV)
   }}
   >
    <ScrollView style={{padding:17}}>
    <TouchableOpacity onPress={()=>setModalv(false)} style={{margin:5,marginTop:25}}>
        <Text style={{fontSize:25,fontWeight:'bold',padding:15}}>{'<'}</Text>
    </TouchableOpacity>  
      <Text style={{fontSize:20,fontWeight:'900',textAlign:'center',marginTop:19}}> {nomc} </Text>
      <Text style={{padding:25}}> {textc} </Text>

      <Text style={{fontSize:10,fontWeight:'900',textAlign:'center',marginTop:19}}> Leur site web </Text>

    <WebView
      style={{width:WIDTH*0.9,height:HEIGHT*0.67,borderRadius:20,backgroundColor:'red',padding:10,alignSelf:'center'}}
      startInLoadingState={true}
      ref={webviewRef}
      source={{uri:lienc }} />
      <Image resizeMode='contain' source={{uri:img}} style={{height:350,width:350,backgroundColor:'#000',margin:10,alignSelf:'center',borderRadius:20}} />
    </ScrollView>
   </Modal>
      
    </SafeAreaView>
  )
}








const  SousTitre=({nom,date,image,lien,text,setImg,setDatec,setTextc,setNomc,setLienc,setModalv}) => {
  const {modalElleStage,setElleModalStage}= useContext(UserContext)

   //la webview
   const webviewRef = React.useRef(null);
   function webViewgoback() {
     if (webviewRef.current) webviewRef.current.goBack();
   }
   function Afficher(){
    setImg(image)
    setDatec(date)
    setTextc(text)
    setLienc(lien)
    setNomc(nom)
    setModalv(true)
   }


  return (
    <TouchableOpacity style={{backgroundColor:'#000'}} onPress={()=>Afficher()}>
    <View style={{flexDirection:'row',marginTop:10,margin:15,justifyContent:'space-around',backgroundColor:'#000'}}>
      <View>
        <Image source={{uri:image}} style={{height:80,width:80,borderRadius:15}} />
      </View>
      <View style={{width:220,alignSelf:'center'}}>
        <Text style={{fontSize:14,color:'#bbbb'}}>{text.length > 25 ? text.slice(0,30)+'...':text}</Text>
        <View style={{flexDirection:'row',marginTop:5}}>
            <Text style={{fontWeight:'bold',marginRight:10,color:'#bbbb'}}>{nom}</Text>
            <Text style={{color:'#bbbb'}}>{date}</Text>
        </View>
      </View>
    </View>
  
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({})
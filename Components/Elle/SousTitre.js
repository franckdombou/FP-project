import { Dimensions, Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { UserContext } from '../../navigation/NavPrincipal'
import WebView from 'react-native-webview'
const WIDTH = Dimensions.get('screen').width
const HEIGHT = Dimensions.get('screen').height
const dest = 'Kloe kardashian de nouveau en couple? Elle repond Kloe kardashian de nouveau en couple? Elle repond Kloe kardashian de nouveau en couple? Elle repond Kloe kardashian de nouveau en couple? Elle repond'

export default function SousTitre({nom,date,image,lien,text}) {
  const {modalElleStage,setElleModalStage}= useContext(UserContext)

   //la webview
   const webviewRef = React.useRef(null);
   function webViewgoback() {
     if (webviewRef.current) webviewRef.current.goBack();
   }


  return (
    <TouchableOpacity style={{backgroundColor:'#000'}} onPress={()=>setElleModalStage(!modalElleStage)}>
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
    <Modal animationType='slide'
    // transparent={true}
      visible={modalElleStage}
      onRequestClose={() => {
      setElleModalStage(!modalElleStage)
   }}
   >
    <ScrollView style={{padding:17}}>
    <TouchableOpacity onPress={()=>setElleModalStage(false)} style={{margin:5,marginTop:25}}>
        <Text style={{fontSize:25,fontWeight:'bold',padding:15}}>{'<'}</Text>
    </TouchableOpacity>
    <Text style={{fontSize:10,fontWeight:'900',textAlign:'center',marginTop:19}}> Leur site web </Text>

    <WebView
      style={{width:WIDTH*0.9,height:HEIGHT*0.67,borderRadius:20,backgroundColor:'red',padding:10,alignSelf:'center'}}
      startInLoadingState={true}
      ref={webviewRef}
      source={{uri:lien }} />
      
      
      <Text style={{fontSize:20,fontWeight:'900',textAlign:'center',marginTop:19}}> {nom} </Text>
      <Text style={{padding:25}}> {text} </Text>
      <Image resizeMode='contain' source={{uri:image}} style={{height:350,width:350,backgroundColor:'#000',margin:10,alignSelf:'center',borderRadius:20}} />
    </ScrollView>
   </Modal>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})
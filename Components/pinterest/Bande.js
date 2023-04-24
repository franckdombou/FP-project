import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Bande = ({nom,props}) => {
  const voirMessage = () => {
    props.navigation.navigate('VueUn1',{})    
  }
 
  return (
    <TouchableOpacity onPress={()=>voirMessage()} style={{width:165,height:41,marginTop:20,borderRadius:20,margin:8,}}>
        <ImageBackground source={require('../../assets/nike/nike4.jpg')} style={{height:48,width:'100%',borderRadius:50,opacity:0.9,}}>
            <Text style={{fontSize:25, color:'#fff',fontWeight:'800',alignSelf:'center',marginTop:10 }}> {nom} </Text>
        </ImageBackground>
    </TouchableOpacity>
  )
}

export default Bande
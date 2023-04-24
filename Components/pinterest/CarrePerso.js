import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../../navigation/NavPrincipal'







const CarrePerso = ({image,}) => {

  const {ChooseChoisePrice,setChooseChoisePrice,ChooseChoise,setChooseChoise,ChooseChoiseName,setChooseChoiseName,modalChoose, setModalChoose,valChoose,setValChoose,ChooseChoiseImage,setChooseChoiseImage} = useContext(UserContext)

  
  return (
    <SafeAreaView style={{width:155,height:310,marginTop:20,borderRadius:20,margin:1}}>
            <Image  source={{uri:image}} style={{height:290,width:'100%',borderRadius:20}} />
      
    </SafeAreaView>
  )
}

export default CarrePerso
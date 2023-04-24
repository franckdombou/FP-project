import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../../navigation/NavPrincipal'







const CarrePersoLike = ({image,}) => {

  const {ChooseChoisePrice,setChooseChoisePrice,ChooseChoise,setChooseChoise,ChooseChoiseName,setChooseChoiseName,modalChoose, setModalChoose,valChoose,setValChoose,ChooseChoiseImage,setChooseChoiseImage} = useContext(UserContext)

  
  return (
    <SafeAreaView style={{width:195,height:320,marginTop:20,margin:1}}>
        <Image  source={{uri:image}} style={{height:310,width:'100%'}} />
    </SafeAreaView>
  )
}

export default CarrePersoLike
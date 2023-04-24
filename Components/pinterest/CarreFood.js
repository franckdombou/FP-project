import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../../navigation/NavPrincipal'







const CarreFood = ({name,image,price,similaire}) => {

  const {ChooseChoisePrice,setChooseChoisePrice,ChooseChoise,setChooseChoise,ChooseChoiseName,setChooseChoiseName,modalChoose, setModalChoose,valChoose,setValChoose,ChooseChoiseImage,setChooseChoiseImage} = useContext(UserContext)

  const VoirChoose = ()=>{
    setChooseChoisePrice(price)
    setChooseChoise([name,image,price,similaire])
    setValChoose(similaire)
    setModalChoose(true)
  }

  return (
    <SafeAreaView style={{width:"45%",height:310,marginTop:20,borderRadius:20,margin:1}}>
        <TouchableOpacity style={{height:250,width:'100%',borderRadius:20,backgroundColor:'yellow'}} onPress={()=>VoirChoose()}>
            <Image source={{uri:image}} style={{height:250,width:'100%',borderRadius:20}} />
        </TouchableOpacity>
        <View style={{justifyContent:'space-between',flexDirection:'row',paddingLeft:7,paddingRight:7}}>
            <Text style={{marginTop:7,color:'#fff',fontWeight:'bold'}}> {name.length>7? name.slice(0,7)+"...":name}</Text>
            <Text style={{marginTop:7,color:'#fff',fontWeight:'bold'}}> {price}fcfa </Text>
            
        </View>
      
    </SafeAreaView>
  )
}

export default CarreFood
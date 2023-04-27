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
    <SafeAreaView style={{width:"45%",height:290,marginTop:20,borderRadius:20,margin:1,backgroundColor:'rgba(240,240,240,0.7)'}}>
        <TouchableOpacity style={{height:250,width:'100%',borderRadius:20,backgroundColor:'yellow'}} onPress={()=>VoirChoose()}>
            <ImageBackground source={{uri:image}} style={{height:250,width:'100%',borderRadius:20}}>
            <View style={{backgroundColor:'rgb(246,180,45)',width:75,position:'absolute',bottom:0}}>
            <Text style={{marginTop:7,color:'#000',fontWeight:'bold'}}> {price} fcfa </Text>
            </View>
            </ImageBackground>
        </TouchableOpacity>
        <View style={{justifyContent:'center',flexDirection:'row',paddingLeft:7,paddingRight:7}}>
            <Text style={{marginTop:7,color:'#000',fontWeight:'bold',textAlign:'center',fontSize:12}}> {name.length>15? name.slice(0,15)+"...":name}</Text>
        </View>
      
    </SafeAreaView>
  )
}

export default CarreFood
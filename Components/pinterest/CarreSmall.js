import { View, Text, SafeAreaView, ImageBackground, Image ,TouchableOpacity} from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../../navigation/NavPrincipal'




const CarreSmall = ({taille,image}) => {
  const {modalChoose, setModalChoose,valChoose,setValChoose} = useContext(UserContext)

  const VoirChoose = (taille)=>{
    setValChoose(taille)
    setModalChoose(true)
  }
  
  return (
    <SafeAreaView style={{width:195,height:100,marginTop:20,borderRadius:20,margin:1}}>
            <Image source={{uri:image}} style={{height:180,width:'100%',borderRadius:20}} />
       {/* <View style={{justifyContent:'space-between',flexDirection:'row'}}>
            <Text style={{marginTop:10,color:'#fff'}}>jordan air force retro{taille}</Text>
            <TouchableOpacity>
                <Text style={{fontSize:25, color:'#fff'}}>...</Text>
            </TouchableOpacity>
      </View>*/}
      
    </SafeAreaView>
  )
}

export default CarreSmall
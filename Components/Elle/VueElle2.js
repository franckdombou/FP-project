import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView, TextInput, Touchable, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const WIDTH = Dimensions.get('window').width


const VueElle2 = (props) => {

    const [comment,setComment]= useState("")

    const Back = () => {
        props.navigation.goBack()    
      }

  return (
    <>
    <ScrollView style={{backgroundColor:'#000'}}>
        <TouchableWithoutFeedback onPress={Back} >
         <Text style={{fontSize:30,fontWeight:'900',color:'rgba(255, 255, 255, 0.5)',marginLeft:5}}>{"<"}</Text>
        </TouchableWithoutFeedback>

      <View style={{flexDirection:'row',marginTop:5}}>
        <Image style={{height:50,width:50,borderRadius:40}} source={require('../../assets/icons/logoENSPY.png')} />
        <View style={{flexDirection:'column'}}>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:15,fontWeight:'900',color:'#fff',marginLeft:5}}>Le Cosmopolitain</Text>
            <Image style={{height:20,width:20,borderRadius:40}} source={require('../../assets/icons/twitter.png')} />
          </View>
          <Text style={{fontSize:15,fontWeight:'900',color:'rgba(255, 255, 255, 0.5)',marginLeft:5}}>@PolytechniqueYaounde</Text>
          </View>
      </View>

        <View style={{backgroundColor:'#000'}}>
          
            <View style={{width:WIDTH,borderRadius:40,margin:5}}>
                <Text style={{color:'#fff',fontSize:20,margin:5}}>
                En Afrique, la compréhension des normes d'ingénierie et la qualité des diplômés restent discutables ; ce qui freine le développement de ce secteur. C’est ce qu’indique un récent rapport de l’UNESCO dans lequel l’organisation appelle  à revoir le système d’enseignement supérieur en Afrique.
                Selon le rapport « Engineering for sustainable development: delivering on the Sustainable Development Goals » de l’UNESCO publié début mars 2021, l'Afrique continue d'avoir le plus faible nombre de professionnels par habitant de toutes les régions, dans le domaine de l'ingénierie. Plus encore, les ingénieurs qui existent sur le continent n’ont pas les compétences requises.
                </Text>
            </View>
            
            <Image style={{height:370,width:WIDTH,borderRadius:40}} source={require('../../assets/titre/choose.jpg')} />
          <View style={{flexDirection:'row',marginLeft:10,marginTop:5,marginBottom:10}}>
              
            <View style={{flexDirection:'row'}}>
                <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>250</Text>
                <Text style={{color:'rgba(255, 255, 255, 0.5)',marginRight:5,marginLeft:5,marginTop:5}}>j'aime</Text>
            </View>
              
            <View style={{flexDirection:'row',marginLeft:10}}>
                <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>520</Text>
                <Text style={{color:'rgba(255, 255, 255, 0.5)',marginRight:5,marginLeft:5,marginTop:5}}>Commentaires</Text>
            </View>
          </View>
        <View style={{backgroundColor:'rgba(255, 255, 255, 0.5)',height:0.5,width:WIDTH,}}></View>
        </View>
        <Comm />
        <Comm />
        <Comm />
        <Comm />
        <Comm />
       
    </ScrollView>
     <View style={{backgroundColor:'#000',flexDirection:'row',}}>
     <Image style={{height:40,width:40,borderRadius:50,margin:5,alignSelf:'center'}} source={require('../../assets/elle/adele.jpg')} />
        <TextInput
         style={{height: 40,margin: 12,borderWidth: 1,padding: 10,width:250,alignSelf:'center',borderColor:'rgba(255, 255, 255, 0.5)',borderRadius:20,color:'#fff'}}
         onChangeText={setComment}
         placeholderTextColor='rgba(255, 255, 255, 0.5)'
         value={comment}
         multiline
        // onScroll
        // scrollEnabled 
        // maxLength={3}
         //enablesReturnKeyAutomatically={true}
         placeholder="entrer votre commentaire"
         keyboardType="twitter"
        />
    </View>
 </>
  )
}
const Comm=()=>{
    return(
        <View style={{backgroundColor:'#000'}}>
            <View style={{flexDirection:'row',marginTop:5,justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',marginTop:5,}}>
                    <Image style={{height:50,width:50,borderRadius:40}} source={require('../../assets/icons/logoENSPY.png')} />
                    <View style={{flexDirection:'column'}}>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:15,fontWeight:'900',color:'#fff',marginLeft:5}}>Le Cosmopolitain</Text>
            <Image style={{height:20,width:20,borderRadius:40}} source={require('../../assets/icons/twitter.png')} />
          </View>
          <Text style={{fontSize:15,fontWeight:'900',color:'rgba(255, 255, 255, 0.5)',marginLeft:5}}>@PolytechniqueYaounde</Text>
          </View>
                </View>
                <Text style={{color:'rgba(255, 255, 255, 0.5)',marginRight:5,marginLeft:5,marginTop:2,fontSize:15,marginRight:10}}>17H</Text>
            </View>

            <View style={{backgroundColor:'#000',marginLeft:50}}>
          
          <View style={{width:300,borderRadius:40,marginBottom:5}}>
            <Text style={{color:'#fff',}}>
            En Afrique, la compréhension des normes d'ingénierie et la qualité des diplômés restent discutables ; ce qui freine le développement de ce secteur. C’est ce qu’indique un récent rapport de l’UNESCO dans lequel l’organisation appelle  à revoir le système d’enseignement supérieur en Afrique.
            Selon le rapport « Engineering for sustainable development: delivering on the Sustainable Development Goals » de l’UNESCO publié début mars 2021, l'Afrique continue d'avoir le plus faible nombre de professionnels par habitant de toutes les régions, dans le domaine de l'ingénierie. Plus encore, les ingénieurs qui existent sur le continent n’ont pas les compétences requises.
            </Text>
            </View>
            
           {/* 
           <Image style={{height:370,width:300,borderRadius:40}} source={require('../../assets/titre/choose.jpg')} />
           */}
          <View style={{width:300,flexDirection:'row',marginLeft:10,marginTop:5,marginBottom:10,justifyContent:'space-between'}}>
              <TouchableOpacity style={{flexDirection:'row'}}>
                <Ionicons name="heart" size={20} color={"#fff"} />
                <Text style={{color:'rgba(255, 255, 255, 0.5)',marginRight:5,marginLeft:5,marginTop:2}}>15</Text>
              </TouchableOpacity>

              
              <TouchableOpacity style={{flexDirection:'row'}}>
                <Ionicons name="chatbubbles" size={20} color={"#fff"} />
              <Text style={{color:'rgba(255, 255, 255, 0.5)',marginRight:5,marginLeft:5,marginTop:2}}>15</Text>
              </TouchableOpacity>

          </View>
        </View>
        <View style={{backgroundColor:'rgba(255, 255, 255, 0.5)',height:0.5,width:WIDTH}}></View>

        </View>
    )
}

export default VueElle2
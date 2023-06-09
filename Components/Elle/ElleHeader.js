import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../../navigation/NavPrincipal'



const ElleHeader = () => {
  const {vueElle,setVueElle}=useContext(UserContext)
  return (
    <SafeAreaView style={{backgroundColor:'#000'}}>
      <ScrollView horizontal>

        <TouchableOpacity onPress={()=>setVueElle("ElleVueFirst")} style={vueElle=="ElleVueFirst" ? styles.onbutton : styles.offbutton }>
          <Text style={vueElle=="ElleVueFirst" ? styles.onText : styles.offText } >Actu Polytech</Text>
        </TouchableOpacity>

       {/* <TouchableOpacity onPress={()=>setVueElle("ellepost")} style={vueElle=="ellepost" ? styles.onbutton : styles.offbutton }>
          <Text style={vueElle=="ellepost" ? styles.onText : styles.offText } >post</Text>
        </TouchableOpacity>*/}

        <TouchableOpacity onPress={()=>setVueElle("ellevue3")} style={vueElle=="ellevue3" ? styles.onbutton : styles.offbutton }>
          <Text style={vueElle=="ellevue3" ? styles.onText : styles.offText } >Opportunites</Text>
        </TouchableOpacity>
 
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  onbutton:{
      backgroundColor:'rgb(249, 180, 45)',
      height:20,
      marginLeft:10,
      marginRight:10,
      borderRadius:5,
      width:150
  },
  offbutton:{
      backgroundColor:'#000',
      height:20,
      marginLeft:10,
      marginRight:10,
      borderRadius:10
  },
  onText:{
      color:'#fff',
      fontSize:15,
      fontWeight:'bold',
      textAlign:'center',
     // padding:5
  },
  offText:{
      color:'#fff',
      fontSize:15,
      fontWeight:'bold',
  },
})

export default ElleHeader
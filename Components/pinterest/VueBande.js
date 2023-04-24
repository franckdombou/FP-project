import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import Bande from './Bande'
import Bande2 from './Bande2'
import Bande3 from './Bande3'
import Bande4 from './Bande4'
import Bande5 from './Bande5'
import Bande6 from './Bande6'
import HeaderNav from './HeaderNav'


const VueBande = ({props}) => {
  return (

    <SafeAreaView style={{flexDirection:'column',justifyContent:'space-between',flexWrap:'wrap',marginBottom:20}}>
      
      <Bande props={props}  nom="NIKE1" />
      <Bande2 props={props}  nom="ESCARPIN" />
      <Bande3 props={props} nom="ESCARPIN3" />
      <Bande4 props={props} nom="BOOTS4" />
      <Bande5 props={props} nom="BOOTS5" />
      <Bande6 props={props} nom="PAIRES" />
      
    </SafeAreaView>

  )
}

export default VueBande
import { View, Text } from 'react-native'
import React from 'react'

const Produit = ({price,name,image,})=>{
  
    // setPanierPrice(PanierPrice+price)
   
   
     return(
       <View style={{width:WIDTH*0.9,height:150,backgroundColor:'white',margin:10,alignSelf:'center',borderRadius:10,flexDirection:'row',justifyContent:'space-between'}}>
       <Image source={{uri:image}} style={{height:100,width:100,margin:10,alignSelf:'center'}} />
       <View style={{width:230,margin:5,flexDirection:'column',justifyContent:'space-between'}}>
         <View style={{height:50,margin:5}}>
           <Text style={{alignSelf:'center',fontWeight:'800',fontSize:15,flexWrap:'wrap'}}> {name} </Text>
         </View>
   
         <View style={{height:50,margin:5,flexDirection:'row',justifyContent:'space-between'}}>
           <Text style={{alignSelf:'center',fontWeight:'800',fontSize:15,flexWrap:'wrap',marginTop:1}}>fcfa {price}K</Text>
           
           <View style={{height:50,width:150,justifyContent:'center',alignSelf:'center'}}>
             
             <View style={{height:30,width:120,alignSelf:'center',borderRadius:20,justifyContent:'space-between',flexDirection:'row'}}>
               
               <TouchableOpacity style={{height:30,width:100,backgroundColor:'white',borderRadius:20,backgroundColor:'red',borderBottomLeftRadius:20}}>
                 <Text style={{alignSelf:'center',fontWeight:'800',fontSize:20}}>annuler</Text>
               </TouchableOpacity>
   
             </View>
           </View>
         </View>
   
       </View>
     </View>  
     )
   }

export default Produit
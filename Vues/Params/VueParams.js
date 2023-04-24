import { Dimensions, ScrollView, StyleSheet, Text, View,Image, Modal, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width
import firebase from '../../config'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { UserContextNewNav } from '../../navigation/NewNav'
import {onAuthStateChanged} from "firebase/auth"
import { auth } from '../../config';
import Dialog from "react-native-dialog";


const tab = ["c","c","e","e","e","e","e","e","e","e","e"]

export default function VueParams(props) {

    const [modalHistoric,setModalHistoric]= useState(false)
    
    const [price,setprice]= useState("")
    const [name,setname]= useState("")
    const [image,setimage]= useState("")

    const {currentUserNewNav, setCurrentUserNewNav}=useContext(UserContextNewNav)
useEffect(() =>{
  onAuthStateChanged(auth, (currentUser)=>{
   setCurrentUserNewNav(currentUser)
   })
 //   console.log('current user', currentUser)  
 },[])

 const [attendre,setAttendre]=useState(true)
 useEffect(() => {
  setTimeout(() => {
   // setAnimating(false);
    setAttendre(false)
  }, 500);
}, []);

    function afficher(p,n,i){
        setprice(p)
        setname(n)
        setimage(i)
        setModalHistoric(true)
    }


       //firebase debut
   let  ref = 0 
    
   const [values, SetValues] =React.useState("")
 //  const [datUser1, setDatUser1] =React.useState("")
   ref = firebase.firestore().collection("2023USER")
 
   // console.log(ref)
    
   const [data,setData]=React.useState([])
   const [loader,setLoader] =React.useState(true)
  
   function getData(){
    ref.onSnapshot((querySnapshot) => { 
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setData(items)
    //  setDatUser1(items)
      setLoader(false)
    })
   } 
 
  
   const [donneeCurrentUser,setDonneeCurrentUser]=useState([])
const [currentName,setCurrentName]=useState("")
const [Tab,setTab]=useState(0)
const [currentPanier,setCurrentPanier]=useState(["","",""])
const [currentPanierEncours,setCurrentPanierEnCours]=useState(["","",""])

function subscribed (){ firebase.firestore()
  .collection('2023USER')
  .doc(currentUserNewNav.email)
  .onSnapshot(doc => {
   const items = []
   items.push(doc.data())
  
   setDonneeCurrentUser(doc.data())
   setTab(doc.data().EnCours.length)
 //  console.log('DonneeCurrentUser 1254VUEPARAMS1235',doc.data().EnCours)
  setCurrentName(doc.data().nom)
  setCurrentPanier(doc.data().EnCours[doc.data().EnCours.length-1].currentPanier)
  setCurrentPanierEnCours(doc.data().EnCours)
  // setCurrentUserRecent(doc.data())
  // setMes(doc.data().name)
  })}

  React.useEffect(() =>{
    getData()
    subscribed()
//  console.log('mes dataaaaaaa123 dans NAVPRINCIPAL',data)
   },[])

   const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    props.navigation.replace('NavLogin')
    // ...Your logic
    setVisible(false);
  };

  return (
    <React.Fragment>
      {
        attendre ? 
        <View style={{height:HEIGHT,backgroundColor:'#000'}}></View>
      :
    <ScrollView style={{backgroundColor:'#000',height:HEIGHT}}>
      
      <View style={{flexDirection:'row',justifyContent:'flex-end',margin:1,height:25,marginBottom:10,}}>
            <Text style={{fontSize:25,fontWeight:'900'}}></Text>
            <Text style={{fontSize:25,fontWeight:'900'}}></Text>
            <TouchableOpacity onPress={showDialog} style={{borderRadius:10,flexDirection:'row',marginRight:15,marginTop:10,backgroundColor:'#000',height:30}}>
            <Image source={require('../../assets/deconnect.png')} style={{height:20,width:20,borderRadius:30}} />
            <Text style={{fontSize:13,fontWeight:'900',color:'#fff',textAlign:'center',marginTop:2,right:1,marginLeft:2}}>Deconnexion</Text>
            </TouchableOpacity>
        </View>
      
      <View style={{alignContent:'center'}}>
        <View style={{backgroundColor:'grey',height:130,width:130,borderRadius:60,alignContent:'center',alignSelf:'center',marginTop:20}}>
            <Text style={{fontSize:35,fontWeight:'900',textAlign:'center',color:'#fff',marginTop:43}}>{currentName.slice(0,1).toLocaleUpperCase()}</Text>
        </View>
        <Text style={{fontSize:20,fontWeight:'800',textAlign:'center',color:'#fff',marginTop:3}}>{currentName}</Text>
      </View>

      

     {/* <ImageBackground style={{width:WIDTH,height:150,marginTop:20}} source={require('../../assets/titre/pub2.jpg')} >

      </ImageBackground>*/}

        <View style={{marginTop:30}}>
        <Text style={{fontSize:14,fontWeight:'800',textAlign:'center',color:'#fff',marginTop:3}}>en cours de livraison</Text>

            {
              currentPanierEncours.length==1 ?
            <View>
              <Text style={{color:'#fff'}}>0 ACHATS EN COURS </Text>
            </View>
            :
            <>
             <ScrollView horizontal >
                

                {
                currentPanierEncours.map((e,k)=>
                  e.currentPanier.map((art,ink)=> 
                  art.etat=='panier' ?
                  <TouchableOpacity onPress={()=>afficher(e.prix,e.nom,e.image)} key={ink} style={{margin:5}}>
                  <Image source={{uri:art.image}} style={{height:130,width:130,borderRadius:20}} />
                  <View style={{flexDirection:'row',justifyContent:'center'}}>
                      <Text style={{color:'#fff',fontWeight:'600',marginBottom:5}}>{art.prix} fcfa</Text>
                  </View>
                  </TouchableOpacity> :<View key={ink}></View>
                  
                 ) ) 
                }
          </ScrollView>
            </>

          }
        </View>


        <View style={{marginTop:30}}>
        <Text style={{fontSize:14,fontWeight:'800',textAlign:'center',color:'#fff',marginTop:3}}>Historique des achats</Text>

            {
              currentPanierEncours.length==1 ?
            <View>
                    <Text style={{color:'#fff'}}>0 ACHATS</Text>
            </View>
            :
            <>
            <ScrollView horizontal >
                

                  {
                  currentPanierEncours.reverse().map((e,k)=>
                    e.currentPanier.map((art,ink)=> 
                    art.etat=='livrez' ?
                    <TouchableOpacity onPress={()=>afficher(e.prix,e.nom,e.image)} key={ink} style={{margin:5}}>
                    <Image source={{uri:art.image}} style={{height:130,width:130,borderRadius:20}} />
                    <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <Text style={{color:'#fff',fontWeight:'600',marginBottom:5}}>{art.prix} fcfa</Text>
                    </View>
                    </TouchableOpacity> :<View key={ink}></View>
                    
                   ) ) 
                  }
            </ScrollView>
            </>

          }
        </View>

        {/*<ImageBackground style={{width:WIDTH,height:150,marginTop:20}} source={require('../../assets/titre/pub2.jpg')} >

      </ImageBackground>*/}

    <Modal animationType='fade'
        transparent={true}
        visible={modalHistoric}
        onRequestClose={() => {
      setModalHistoric(!modalHistoric)
    }}>
        <Pressable onPress={()=>setModalHistoric(false)} style={{height:HEIGHT,backgroundColor:'rgba(255, 255, 255, .3)' }}>
            <View style={{height:250,width:WIDTH*0.9,marginTop:50,alignSelf:'center',borderRadius:20,backgroundColor:'red'}}>
            <Image source={{uri:image}} style={{height:250,width:WIDTH*0.9,alignSelf:'center',borderRadius:20}} />
            </View>
            <View style={{height:200,marginLeft:10}}>
                <View style={{flexDirection:'row',margin:10}}>
                    <Text style={{fontSize:17,fontWeight:'800',color:'#000',marginTop:6}}>nom : </Text>
                    <Text style={{fontSize:20,fontWeight:'800',color:'#000',marginTop:3}}> {name} </Text>
                </View>

                <View style={{flexDirection:'row',margin:10}}>
                    <Text style={{fontSize:17,fontWeight:'800',color:'#000',marginTop:6}}>prix : </Text>
                    <Text style={{fontSize:20,fontWeight:'800',color:'#000',marginTop:3}}>{price}</Text>
                </View>

                <View style={{flexDirection:'row',margin:10}}>
                    <Text style={{fontSize:17,fontWeight:'800',color:'#000',marginTop:6}}>date d'achat : </Text>
                    <Text style={{fontSize:20,fontWeight:'800',color:'#000',marginTop:3}}> 17/20/2023 </Text>
                </View>
                <TouchableOpacity onPress={()=>setModalHistoric(false)} style={{backgroundColor:'#fff',height:50,width:50,alignSelf:'center',borderRadius:50,}}>
                    <Image style={{height:50,width:50,alignSelf:'center'}} source={require('../../assets/icons/croix.png')} />
                </TouchableOpacity>
            </View>
        </Pressable>
    </Modal>


    </ScrollView>
      }
       <View style={styles.container}>
      
      <Dialog.Container visible={visible}>
        <Dialog.Title>Deconnexion</Dialog.Title>
        <Dialog.Description>
          Voulez-vous vraiment vous deconnecter ? 
        </Dialog.Description>
        <Dialog.Button label="non" onPress={handleCancel} />
        <Dialog.Button label="oui" onPress={handleDelete} />
      </Dialog.Container>
    </View>
    </React.Fragment>
  )
}

const Historique =()=>{
    
    return(
        <View style={{margin:5}}>
            <Image source={require('../../assets/nike/nike8.jpg')} style={{height:130,width:130,borderRadius:20}} />
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Text style={{color:'#fff',fontWeight:'600',marginBottom:5}}>17/20/2023</Text>
            </View>
        </View>
    )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
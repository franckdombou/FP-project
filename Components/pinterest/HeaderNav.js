import { View, Text, TouchableOpacity, Image, ScrollView, Dimensions, SafeAreaView, StyleSheet, Modal, ImageBackground, Alert, TextInput, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../navigation/NavPrincipal'
import firebase from '../../config'
import { doc, updateDoc, arrayUnion, arrayRemove,serverTimestamp,Timestamp,getDoc } from "firebase/firestore";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Dialog from "react-native-dialog";
import { UserContextNewNav } from '../../navigation/NewNav';
//import firebase from '../config'
import {onAuthStateChanged} from "firebase/auth"
import { auth } from '../../config';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const HeaderNav = ({props}) => {
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
  }, 5000);
}, []);


    const [prixTot,setPrixTot] = useState(12)
    const [numeroTel,setNumeroTel] = useState(12)
    const [nomPaye,setnomPaye] = useState('')
    const [telPaye,settelPaye] = useState(12)
    const [positionPaye,setPositionPaye] = useState(12)
    const [modalJaiPaye,setModalJaiPaye] = useState(false)
    var docRef = firebase.firestore().collection("2023USER").doc(currentUserNewNav.email);
 // const refPrix = firebase.firestore().collection("2023USER")
 function reserver(prix){
  const ref = firebase.firestore().collection("2023USER")
// console.log('currentUser.email dans BouleBiblio',cathegorie)
//  const refDoc = firebase.firestore().collection('2023NIKE')

  ref
  .doc(currentUserNewNav.email) 
  .update({totalPanier:prix})
  .catch((err)=>{
    console.log(err)  
  }) 
} 



const [donneeCurrentUser,setDonneeCurrentUser]=useState([])
const [currentSolde,setCurrentSolde]=useState(0)
const [prixtotPan,setprixtotPan]=useState(0)
const [currentPanier,setCurrentPanier]=useState(["","",""])

function subscribed (){ firebase.firestore()
  .collection('2023USER')
  .doc(currentUserNewNav.email)
  .onSnapshot(doc => {
   const items = []
   items.push(doc.data())
  
   setDonneeCurrentUser(doc.data())
   console.log('DonneeCurrentUser headerNav',doc.data())
   console.log('DonneeCurrentUser12345 email',currentUserNewNav.email)

   setCurrentSolde(doc.data().solde)
   setCurrentPanier(doc.data().userPanier)
   setprixtotPan(doc.data().totalPanier)
  // setCurrentUserRecent(doc.data())
  // setMes(doc.data().name)
  })}
   
let str = 0
  React.useEffect(() =>{
  docRef.get().then((doc) => {
      if (doc.exists) {
          setDatUser1(doc.data());
          setPrixTot(doc.data().solde)
        //console.log("dataUsers1 dans VUESFIRST",doc.data().solde);
        for (let i = 0; i < doc.data().userPanier.length; i++) {
          if(doc.data().userPanier[i].etat=='panier'){
            setChooseChoisePrice(doc.data().userPanier[i].prix + ChooseChoisePrice)
            str=str+doc.data().userPanier[i].prix
          //  console.log("le prix total dans HeaderNav12",str);
          }
          setChooseChoisePrice(str)
          
          // console.log('le prix total dans HeaderNav123',ChooseChoisePrice)
        }
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document in HEADERNAV!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
    },7)

 // const [modalPaiement,setModalPaiement]=useState(false)
 // const [modalPanier,setModalPanier]=useState(false)
  const [modalPaiement,setModalPaiement]=useState(false)
  const [modalOM,setModalOM]=useState(false)
  const [modalMomo,setModalMomo]=useState(false)

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
    //  console.log('data HEADERNAV',items)
    //  setDatUser1(items)
      setLoader(false)
    })
   } 
 
   React.useEffect(() =>{
    getData()
    subscribed()
   
//  console.log('mes dataaaaaaa123 dans NAVPRINCIPAL',data)
   },[])


    const {vue,setVues}= useContext(UserContext)
    const {datUser1, setDatUser1,ChooseChoisePrice,setChooseChoisePrice,ChooseChoiseName,setChooseChoiseName,modalChoose, setModalChoose,valChoose,setValChoose,modalChoose2, setModalChoose2,modalPanier,setModalPanier,ChooseChoise,setChooseChoise,ChooseChoiseImage,setChooseChoiseImage,PanierPriceTotal,setPanierPriceTotal} = useContext(UserContext)
    const voirMessage = () => {
        props.navigation.navigate('VueUn1',{})    
    }

    function ajouterOM(){
      // debut ajouter tableau
      const washingtonRef = firebase.firestore().collection("2023OM").doc("orange12")
    //  ajusterPrix(ChooseChoise[3])
      washingtonRef.update({
        orange12: arrayUnion({"montant":"panier", "nom": "12" ,"numero": "oiuyn", "email":"ChooseChoise"})
      });
     // setModalComm(!modalComm)
      Alert.alert('Traitement en cours ... Veillez patientez !!! ')
      setModalOM(!modalOM)
     }

      function ajouterMOMO(){
      // debut ajouter tableau
      const washingtonRef = firebase.firestore().collection("2023OM").doc("mtn13")
    //  ajusterPrix(ChooseChoise[3])
      washingtonRef.update({
        mtn13: arrayUnion({"montant":"panier", "nom": "12" ,"numero": "oiuyn", "email":"ChooseChoise"})
      });
     // setModalComm(!modalComm)
      Alert.alert('Traitement en cours ... Veillez patientez !!! ')
      setModalOM(!modalOM)
     }

      {/** fonction payer */}
     

      function reduireSolde(prix){
        const ref = firebase.firestore().collection("2023USER")
      // console.log('currentUser.email dans BouleBiblio',cathegorie)
      //  const refDoc = firebase.firestore().collection('2023NIKE')
      if(Number(currentSolde)-Number(prix)>0){
        payer()
        ref
        .doc(currentUserNewNav.email) 
        .update({solde:Number(currentSolde)-Number(prix)})
        .catch((err)=>{
          console.log(err)  
        })}else{Alert.alert('!!! Solde insuffisant !!!')}
      }

      
     function payer(){
      // debut ajouter tableau
      const washingtonRef = firebase.firestore().collection("2023COMMANDE").doc("payer")
      const user = firebase.firestore().collection("2023USER").doc(currentUserNewNav.email)
    const ref = firebase.firestore().collection("2023USER")

     // reduireSolde(prixtotPan)
      washingtonRef.update({
     // userPanier: arrayRemove({currentPanier}),
    //  userPanier:[],
        payer1: arrayUnion({"nom":nomPaye, "tel": telPaye ,"position": positionPaye, "listePanier":currentPanier,'montantTotalPayer':prixtotPan})
      });
      user.update({
          EnCours : arrayUnion({currentPanier}),
          userPanier:[],
        });

        ref
        .doc(currentUserNewNav.email) 
        .update({userPanier:[],totalPanier:0})
        .catch((err)=>{
          console.log(err)  
        })
      Alert.alert('Payer avec succes !!!'+"\n"+"appuyer sur profil !!!")
     }

   

  return(
    <React.Fragment> 
      {
        attendre ? 
        <Text>WAIT</Text> :
    <SafeAreaView style={{flexDirection:'row',height:30,backgroundColor:'#000',alignContent:'center',alignItems:'center'}}>
    <ScrollView horizontal style={{height:20,width:WIDTH,alignSelf:'center'}}>
    
      <TouchableOpacity onPress={()=>setVues("vue5")} style={vue=="vue5" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="vue5" ? styles.onText : styles.offText }>FASTFOOD</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setVues("VuesFirst")} style={vue=="VuesFirst" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="VuesFirst" ? styles.onText : styles.offText } >TENNIS</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setVues("vue4")} style={vue=="vue4" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="vue4" ? styles.onText : styles.offText } >IPHONE</Text>
      </TouchableOpacity>

    

    <TouchableOpacity onPress={()=>setVues("vue2")} style={vue=="vue2" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="vue2" ? styles.onText : styles.offText } >  PC  </Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setVues("vue7")} style={vue=="vue7" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="vue7" ? styles.onText : styles.offText }>OUTILS</Text>
      </TouchableOpacity>



    { /*
    <TouchableOpacity onPress={()=>setVues("vue3")} style={vue=="vue3" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="vue3" ? styles.onText : styles.offText } >MEN</Text>
    </TouchableOpacity>

      <TouchableOpacity onPress={()=>setVues("vue6")} style={vue=="vue6" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="vue6" ? styles.onText : styles.offText } >SLING-BACK</Text>
    </TouchableOpacity>

      <TouchableOpacity onPress={()=>setVues("vue7")} style={vue=="vue7" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="vue7" ? styles.onText : styles.offText } >BALLERINE</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setVues("vue8")} style={vue=="vue8" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="vue8" ? styles.onText : styles.offText } >MOCASSINS ET SLIPPERS</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setVues("VuesFirst")} style={vue=="VuesFirst" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="VuesFirst" ? styles.onText : styles.offText } >RICHELIEU</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setVues("VuesFirst")} style={vue=="VuesFirst" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="VuesFirst" ? styles.onText : styles.offText } >DERBY</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setVues("VuesFirst")} style={vue=="VuesFirst" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="VuesFirst" ? styles.onText : styles.offText } >MULE</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setVues("VuesFirst")} style={vue=="VuesFirst" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="VuesFirst" ? styles.onText : styles.offText } >LES SANDALES</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setVues("VuesFirst")} style={vue=="VuesFirst" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="VuesFirst" ? styles.onText : styles.offText } >ESPADRILLE</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setVues("VuesFirst")} style={vue=="VuesFirst" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="VuesFirst" ? styles.onText : styles.offText } >RICHELIEU</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setVues("VuesFirst")} style={vue=="VuesFirst" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="VuesFirst" ? styles.onText : styles.offText } >Les bottes "slouchy"</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setVues("VuesFirst")} style={vue=="VuesFirst" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="VuesFirst" ? styles.onText : styles.offText } >SACS BANDOULIÈRE</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setVues("VuesFirst")} style={vue=="VuesFirst" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="VuesFirst" ? styles.onText : styles.offText } >SACS CABAS</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setVues("VuesFirst")} style={vue=="VuesFirst" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="VuesFirst" ? styles.onText : styles.offText } >SACS À MAIN</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setVues("VuesFirst")} style={vue=="VuesFirst" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="VuesFirst" ? styles.onText : styles.offText } >SACS DE LUXE</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setVues("VuesFirst")} style={vue=="VuesFirst" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="VuesFirst" ? styles.onText : styles.offText } >SACS POCHETTE</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setVues("VuesFirst")} style={vue=="VuesFirst" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="VuesFirst" ? styles.onText : styles.offText } >SACS À DOS</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setVues("VuesFirst")} style={vue=="VuesFirst" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="VuesFirst" ? styles.onText : styles.offText } >Valentino</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setVues("VuesFirst")} style={vue=="VuesFirst" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="VuesFirst" ? styles.onText : styles.offText } >Valentino</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setVues("VuesFirst")} style={vue=="VuesFirst" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="VuesFirst" ? styles.onText : styles.offText } >Valentino</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setVues("VuesFirst")} style={vue=="VuesFirst" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="VuesFirst" ? styles.onText : styles.offText } >Valentino</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={()=>setVues("VuesFirst")} style={vue=="VuesFirst" ? styles.onbutton : styles.offbutton }>
        <Text style={vue=="VuesFirst" ? styles.onText : styles.offText } >Valentino</Text>
    </TouchableOpacity>*/}

     

    </ScrollView>


    <TouchableOpacity onPress={()=>setModalPanier(true)} style={{backgroundColor:'#fff',height:50,width:50,borderRadius:30,alignContent:'center',padding:4,marginTop:102}}>
    <Image style={{height:30,width:30,alignSelf:'center',marginTop:5,marginBottom:2}} source={require('../../assets/icons/panier.png')} />
    {currentPanier.length > 0 ?
      <View style={{backgroundColor:'red',height:13,width:13,borderRadius:50,position:'absolute',right:0}}>
        <Text style={{color:'#fff',fontSize:10,textAlign:'center',fontWeight:'bold'}}>{currentPanier.length}</Text>
      </View>
      :<View></View>
    }
    </TouchableOpacity>


    <Modal animationType='slide'
    transparent={true}
    visible={modalPanier}
    onRequestClose={() => {
      setModalPanier(!modalPanier)
  }}
  >
    <SafeAreaView style={{backgroundColor:'#E8E8E8',height:HEIGHT,width:WIDTH,}}>

   

      <View style={{height:HEIGHT,marginBottom:20,}}>
      <View style={{flexDirection:'row',justifyContent:'space-between',margin:10,padding:10,width:WIDTH*0.9}}>
          <TouchableOpacity style={{height:40,width:30}} onPress={()=>setModalPanier(false)}>
            <Text style={{fontSize:30,fontWeight:'800',color:'#000',padding:5}}> {"<"} </Text>
          </TouchableOpacity>
         <View style={{flexDirection:'row',alignSelf:'center',}}>
            <Text style={{fontSize:12,fontWeight:'800',color:'#000',alignSelf:'center'}}>solde : </Text>
            <Text style={{fontSize:12,fontWeight:'800',color:'#000'}}>{currentSolde}</Text>
            <Text style={{fontSize:12,fontWeight:'800',color:'#000',alignSelf:'center'}}> fcfa</Text>
          </View>

          <TouchableOpacity onPress={()=>setModalPaiement(!modalPaiement)} style={{backgroundColor:'green',height:50,alignSelf:'center',alignContent:'center',borderRadius:10}}>
            <Text style={{color:'#fff',alignSelf:'center',textAlign:'center',fontSize:12,fontWeight:'bold',margin:15,flexWrap:'wrap'}}>Recharger solde</Text>
          </TouchableOpacity>
       
        </View>

        
     
      <ScrollView>
      {
        currentPanier.map((pan,kei)=>
        <Produit qty={pan.qty}   price={pan.prix} name={pan.nom} image={pan.image} key={kei} /> 
               
      )}
      </ScrollView>

     

      
      <View style={{height:80,width:WIDTH,backgroundColor:'#fff',marginBottom:60,flexDirection:'row',justifyContent:'center',}}>
        <Text style={{alignSelf:'center',marginRight:10,fontWeight:'600',fontSize:17}}>TOTAL : {prixtotPan} fcfa</Text>
        <TouchableOpacity onPress={()=> setModalJaiPaye(true)} style={{backgroundColor:'#000',marginRight:25,height:50,width:120,alignSelf:'center',alignContent:'center',borderRadius:20}}>
          <Text style={{color:'#fff',alignSelf:'center',textAlign:'center',fontSize:20,fontWeight:'bold',marginTop:10}}>PAYER</Text>
        </TouchableOpacity>
      </View>
      </View>

<Modal animationType='slide'
 //   transparent={true}
    visible={modalPaiement}
    onRequestClose={() => {
      setModalPaiement(!modalPaiement)
  }}
  >
    <SafeAreaView style={{backgroundColor:'#F8F8F8',height:HEIGHT,}}>
      <ScrollView style={{height:HEIGHT,backgroundColor:'#F8F8F8'}}>
        <View style={{justifyContent:'space-between',flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>setModalPaiement(false)}>
            <Text style={{fontSize:30,fontWeight:'900',marginLeft:17}}>{"<"}</Text>
          </TouchableOpacity>
          <Text style={{fontSize:15,fontWeight:'900',marginLeft:12,marginTop:15,marginRight:10}}>solde : {currentSolde} fcfa</Text>
        </View>
        <ImageBackground source={require('../../assets/icons/nikenoir.jpg')} style={{width:WIDTH,height:150,marginTop:20}}>

        </ImageBackground>

      <View style={{backgroundColor:'#fff',marginBottom:10,height:HEIGHT}}>
        <Text style={{alignSelf:'center',marginTop:10,fontWeight:'600',color:'#000',}}>METHODES RECOMMENDEES</Text>

        <View style={{flexDirection:'column',}}>
          
          <TouchableOpacity onPress={()=>setModalOM(!modalOM)} style={{backgroundColor:'white',flexDirection:'column',alignSelf:'center',margin:10}}>
            <Image source={require('../../assets/icons/OM.jpg')} style={{height:100,width:150}} />
            <View style={{backgroundColor:'#FF8C00',height:30,alignContent:'center',}}>
              <Text style={{alignSelf:'center',color:'white',fontWeight:'900',marginTop:7}}>ORANGE MONEY</Text>
            </View>
          </TouchableOpacity>

          < TouchableOpacity onPress={()=>setModalMomo(!modalMomo)} style={{backgroundColor:'white',flexDirection:'column',alignSelf:'center',marginBottom:50}}>
            <Image source={require('../../assets/icons/momo.jpg')} style={{height:100,width:150}} />
            <View style={{backgroundColor:'#4682B4',height:30}}>
              <Text style={{alignSelf:'center',color:'white',fontWeight:'900',marginTop:7}}>MOBILE MONEY</Text>
            </View>
          </TouchableOpacity>

          </View>
        </View>

        <ImageBackground source={require('../../assets/icons/LVMH.png')} style={{width:WIDTH,height:150,marginTop:20}}>

        </ImageBackground>

      </ScrollView>
    </SafeAreaView>


                  {/** modal orange */}
  <Modal animationType='slide'
    transparent={true}
    visible={modalOM}
    onRequestClose={() => {
      setModalOM(!modalOM)
  }}
  >
    <SafeAreaView style={{height:HEIGHT,backgroundColor:'rgba(0, 0, 0, .7)'}}>
    <KeyboardAwareScrollView>
     
     <Pressable onPress={()=>setModalOM(false)}>
      <ScrollView>
        <View style={{backgroundColor:'#fff',alignSelf:'center',marginTop:150}}>
       
        <Text style={{fontSize:15,fontWeight:'900',marginLeft:20,marginTop:10,color:'#000'}}>Montant(minimun 500)</Text>
        <TextInput
        style={{height: 40,margin: 12,borderWidth: 1,padding: 10,width:250,alignSelf:'center'}}
        onChangeText={setNumeroTel}
        value={numeroTel}
        placeholderTextColor='#000'
        placeholder="le montant"
        keyboardType="numeric"
        />
       
        <Text style={{fontSize:15,fontWeight:'900',marginLeft:20,marginTop:10,color:'#000'}}>Nom</Text>
        <TextInput
        style={{height: 40,margin: 12,borderWidth: 1,padding: 10,width:250,alignSelf:'center'}}
        onChangeText={setNumeroTel}
        value={numeroTel}
        placeholderTextColor='#000'
        placeholder="votre nom"
        keyboardType="twitter"
        />

      <Text style={{fontSize:15,fontWeight:'900',marginLeft:20,marginTop:10,color:'#000'}}>Telephone du payeur</Text>
      <TextInput
        style={{height: 40,margin: 12,borderWidth: 1,padding: 10,width:250,alignSelf:'center'}}
        onChangeText={setNumeroTel}
        placeholderTextColor='#000'
        value={numeroTel}
        placeholder="votre numero"
        keyboardType="numeric"
      />

      <Text style={{fontSize:15,fontWeight:'900',marginLeft:20,marginTop:10,color:'#000'}}>Email</Text>
      <TextInput
        style={{height: 40,margin: 12,borderWidth: 1,padding: 10,width:250,alignSelf:'center'}}
        onChangeText={setNumeroTel}
        
        placeholderTextColor='#000'
        value={numeroTel}
        placeholder="votre email"
        keyboardType="twitter"
      />
      </View>
      <View style={{height:100,justifyContent:'space-between',flexDirection:'row',margin:10,width:250,alignSelf:'center'}}>
          
          <TouchableOpacity onPress={()=>setModalOM(false)} style={{backgroundColor:'red',width:90,height:40}}>
            <Text style={{textAlign:'center',alignSelf:'center',margin:10,color:'white',fontWeight:'900',}}>ANNULER</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>ajouterOM()} style={{backgroundColor:'green',width:90,height:40}}>
            <Text style={{textAlign:'center',alignSelf:'center',margin:10,color:'white',fontWeight:'900',}}>VALIDER</Text>
          </TouchableOpacity>
          
        </View>
        </ScrollView>
      </Pressable>

      </KeyboardAwareScrollView>

       
    </SafeAreaView>
    
  </Modal>

  {/** modal MOMO */}
  <Modal animationType='slide'
    transparent={true}
    visible={modalMomo}
    onRequestClose={() => {
      setModalMomo(!modalMomo)
  }}
  >
    <SafeAreaView style={{height:HEIGHT,backgroundColor:'rgba(0, 0, 0, .7)'}}>
    <KeyboardAwareScrollView>
     
     <Pressable onPress={()=>setModalMomo(!modalMomo)}>
      <ScrollView>
        <View style={{backgroundColor:'#fff',alignSelf:'center',marginTop:150}}>
       
        <Text style={{fontSize:15,fontWeight:'900',marginLeft:20,marginTop:10,color:'#000'}}>Montant(minimun 500)</Text>
        <TextInput
        style={{height: 40,margin: 12,borderWidth: 1,padding: 10,width:250,alignSelf:'center'}}
        onChangeText={setNumeroTel}
        value={numeroTel}
        placeholderTextColor='#000'
        placeholder="le montant"
        keyboardType="numeric"
        />
       
        <Text style={{fontSize:15,fontWeight:'900',marginLeft:20,marginTop:10,color:'#000'}}>Nom</Text>
        <TextInput
        style={{height: 40,margin: 12,borderWidth: 1,padding: 10,width:250,alignSelf:'center'}}
        onChangeText={setNumeroTel}
        value={numeroTel}
        placeholderTextColor='#000'
        placeholder="votre nom"
        keyboardType="twitter"
        />

      <Text style={{fontSize:15,fontWeight:'900',marginLeft:20,marginTop:10,color:'#000'}}>Telephone du payeur</Text>
      <TextInput
        style={{height: 40,margin: 12,borderWidth: 1,padding: 10,width:250,alignSelf:'center'}}
        onChangeText={setNumeroTel}
        placeholderTextColor='#000'
        value={numeroTel}
        placeholder="votre numero"
        keyboardType="numeric"
      />

      <Text style={{fontSize:15,fontWeight:'900',marginLeft:20,marginTop:10,color:'#000'}}>Email</Text>
      <TextInput
        style={{height: 40,margin: 12,borderWidth: 1,padding: 10,width:250,alignSelf:'center'}}
        onChangeText={setNumeroTel}
        
        placeholderTextColor='#000'
        value={numeroTel}
        placeholder="votre email"
        keyboardType="twitter"
      />
      </View>
      <View style={{height:100,justifyContent:'space-between',flexDirection:'row',margin:10,width:250,alignSelf:'center'}}>
          
          <TouchableOpacity onPress={()=> setModalMomo(!modalMomo)} style={{backgroundColor:'red',width:90,height:40}}>
            <Text style={{textAlign:'center',alignSelf:'center',margin:10,color:'white',fontWeight:'900',}}>ANNULER</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>ajouterMOMO()} style={{backgroundColor:'green',width:90,height:40}}>
            <Text style={{textAlign:'center',alignSelf:'center',margin:10,color:'white',fontWeight:'900',}}>VALIDER</Text>
          </TouchableOpacity>
          
        </View>
        </ScrollView>
      </Pressable>

      </KeyboardAwareScrollView>

       
    </SafeAreaView>
    
  </Modal>

   
  </Modal>

  {/** MODAL JAI PAYE */}
  <Modal animationType='slide'
    transparent={true}
    visible={modalJaiPaye}
    onRequestClose={() => {
      setModalJaiPaye(!modalJaiPaye)
  }}
  >
    <KeyboardAwareScrollView>
    <Pressable onPress={()=>setModalJaiPaye(false)} style={{height:HEIGHT,backgroundColor:'rgba(0,0,0,.7)'}}>
      <ScrollView>
      <View style={{alignSelf:'center',marginTop:100,backgroundColor:'#fff',borderRadius:20}}>
        <View style={{backgroundColor:'green',height:40,borderTopRightRadius:20,borderTopLeftRadius:20}}>
          <Text style={{color:'#fff',fontSize:20,fontWeight:'bold',alignSelf:'center',marginTop:5}}>CONFIRMER PAIEMENT</Text>
        </View>

      <View style={{}}>
        <Text style={{fontSize:15,fontWeight:'900',marginLeft:20,marginTop:10,color:'#000'}}>Nom</Text>
      <TextInput
        style={{height: 35,margin: 12,borderWidth: 1,padding: 10,width:250,alignSelf:'center'}}
        onChangeText={setnomPaye}
        value={nomPaye}
        placeholderTextColor='#000'
        placeholder="votre nom"
        keyboardType="twitter"
      />

      <Text style={{fontSize:15,fontWeight:'900',marginLeft:20,marginTop:10,color:'#000'}}>Tel</Text>
      <TextInput
        style={{height: 35,margin: 12,borderWidth: 1,padding: 10,width:250,alignSelf:'center'}}
        onChangeText={settelPaye}
        placeholderTextColor='#000'
        value={telPaye}
        placeholder="votre numero"
        keyboardType="numeric"
      />

      <Text style={{fontSize:15,fontWeight:'900',marginLeft:20,marginTop:10,color:'#000'}}>salle de livraison</Text>
      <TextInput
        style={{height: 35,margin: 12,borderWidth: 1,padding: 10,width:250,alignSelf:'center'}}
        onChangeText={setPositionPaye}
        
        placeholderTextColor='#000'
        value={positionPaye}
        placeholder="votre salle"
        keyboardType="twitter"
      />
      </View>
      <View style={{justifyContent:'space-between',flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>setModalJaiPaye(false)} style={{backgroundColor:'#FA8072',height:40,width:100,borderBottomLeftRadius:20}}>
          <Text style={{textAlign:'center',marginTop:10,fontWeight:'900'}}>ANNULER</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>reduireSolde(prixtotPan)} style={{backgroundColor:'green',height:40,width:100,borderBottomRightRadius:20}}>
          <Text style={{textAlign:'center',marginTop:10,fontWeight:'900'}}>CONFIRMER</Text>
        </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
    </Pressable>
    </KeyboardAwareScrollView>
  </Modal>
      
    </SafeAreaView>

          {/** MODAL ORANGE MONEY ET MOMO */}
    
  </Modal>
    </SafeAreaView>
      }
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
    onbutton:{
        backgroundColor:'#fff',
        height:20,
       // marginLeft:10,
       // marginRight:10,
        borderRadius:10,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:3
    //    width:80
    },
    offbutton:{
        backgroundColor:'#000',
        height:30,
        marginLeft:10,
        marginRight:10,
        borderRadius:10
    },
    onText:{
        color:'#000',
        fontSize:10,
        fontWeight:'bold',
        textAlign:'center'
    },
    offText:{
        color:'#fff',
        fontSize:10,
        fontWeight:'bold',
    },
})


const Produit = ({price,name,image,qty})=>{
  
const {datUser1, setDatUser1,ChooseChoisePrice,setChooseChoisePrice,ChooseChoiseName,setChooseChoiseName,modalChoose, setModalChoose,valChoose,setValChoose,modalChoose2, setModalChoose2,modalPanier,setModalPanier,ChooseChoise,setChooseChoise,ChooseChoiseImage,setChooseChoiseImage,PanierPriceTotal,setPanierPriceTotal} = useContext(UserContext)
const {currentUserNewNav, setCurrentUserNewNav}=useContext(UserContextNewNav)
useEffect(() =>{
  onAuthStateChanged(auth, (currentUser)=>{
   setCurrentUserNewNav(currentUser)
   })
 //   console.log('current user', currentUser)  
 },[])

 {/*const [attendreP,setAttendreP]=useState(true)
 useEffect(() => {
  setTimeout(() => {
   // setAnimating(false);
    setAttendreP(false)
  }, 5000);
}, []);*/}

function ajusterPrix(prix){
  const ref = firebase.firestore().collection("2023USER")
// console.log('currentUser.email dans BouleBiblio',cathegorie)
//  const refDoc = firebase.firestore().collection('2023NIKE')

  ref
  .doc(currentUserNewNav.email) 
  .update({totalPanier:Number(prixTotPanierUser)-Number(prix)})
  .catch((err)=>{
    console.log(err)  
  }) 
} 
 
  //fin ajout panier

useEffect(()=>{ObtenirDonneesuser()},[])
   //COMMENTAIRE
 //  const {currentUserNewNav, setCurrentUserNewNav}=useContext(UserContextNewNav)

   const [donneeCurrentUser,setDonneeCurrentUser]=useState([])
   const [currentSolde,setCurrentSolde]=useState(0)
   const [currentPanier,setCurrentPanier]=useState(["","",""])
   const [prixTotPanierUser,setPrixTotPanierUser]=useState(0)
   function ObtenirDonneesuser(){ firebase.firestore()
     .collection('2023USER')
     .doc(currentUserNewNav.email)
     .onSnapshot(doc => {
      const items = []
      items.push(doc.data())
     
      setDonneeCurrentUser(doc.data())
   //  console.log('DonneeCurrentUser1234',doc.data())
   //  console.log('DonneeCurrentUser12345 email',currentUserNewNav.email)
   //   setCurrentSolde(doc.data().solde)
      setCurrentPanier(doc.data().userPanier)
      setPrixTotPanierUser(Number(doc.data().totalPanier))
     })}

  //   console.log('DonneeCurrentUser123456 email',currentUserNewNav.email)

 const [visiblea, setVisiblea] = useState(false);

function annuler(){
  // debut ajouter tableau
  ajusterPrix(price)
  setVisiblea(false);
  const washingtonRef = firebase.firestore().collection("2023USER").doc(currentUserNewNav.email)
  washingtonRef.update({
    userPanier: arrayRemove({"etat":"panier", "image": image ,"nom": name, "prix":price,"qty":qty})
  });
  setVisiblea(false);
  Alert.alert('Annulation en cours!!! '+'\n'+'Veuillez patientez !!!')
  setVisiblea(false);
 }

 const [quantity,setQuantity]=useState(qty)
 function PlusUn(prix){
   const ref = firebase.firestore().collection("2023USER")
 // console.log('currentUser.email dans BouleBiblio',cathegorie)
 //  const refDoc = firebase.firestore().collection('2023NIKE')
 if(true){
  setQuantity()
   ref
   .doc(currentUserNewNav.email) 
   .update({solde:Number(currentSolde)+Number(prix)})
   .catch((err)=>{
     console.log(err)  
   })}else{Alert.alert('!!! Solde insuffisant !!!')}
 }


 const showDialog = () => {
   setVisiblea(true);
 };

 const handleCancel = () => {
   setVisiblea(false);
 };

 const handleDelete = () => {
   // The user has pressed the "Delete" button, so here you can do your own logic.
   setVisiblea(false);
   annuler()
   // ...Your logic
   
 };


   
   
     return(
      <React.Fragment>
        {
          false ? 
          <Text>WAIT</Text>
        :
       <View style={{width:WIDTH*0.94,height:130,backgroundColor:'white',margin:10,alignSelf:'center',borderRadius:10,flexDirection:'row',justifyContent:'space-between'}}>
       <Image source={{uri:image}} style={{height:100,width:100,margin:10,alignSelf:'center'}} />
       <View style={{width:230,margin:5,flexDirection:'column',justifyContent:'space-between'}}>
         <View style={{margin:5}}>
           <Text style={{alignSelf:'center',fontWeight:'800',fontSize:10,flexWrap:'wrap'}}> {name.length>25? name.slice(0,25)+"...":name} </Text>
         </View>

         <Text style={{alignSelf:'center',fontWeight:'800',fontSize:15,flexWrap:'wrap',marginTop:1}}>{price} fcfa</Text>
   
         <View style={{height:50,margin:5,flexDirection:'row',justifyContent:'space-between'}}>
           <View style={{height:30,width:90,borderRadius:20,marginTop:15,flexDirection:'row',justifyContent:'space-between'}}>
              {
                qty==1?
                <View style={{height:30,width:25,backgroundColor:'gray',borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
                <Text style={{fontWeight:'bold',color:'#fff',textAlign:'center',fontSize:20}}>-</Text>
                </View>
              :
              <TouchableOpacity style={{height:30,width:25,backgroundColor:'#000',borderTopLeftRadius:20,borderBottomLeftRadius:20}}>
                <Text style={{fontWeight:'bold',color:'#fff',textAlign:'center',fontSize:20}}>-</Text>
              </TouchableOpacity>
              }
              <View style={{height:30,width:40}}>
                <Text style={{textAlign:'center',marginTop:8,fontSize:15}}>{qty}</Text>
              </View>
              <TouchableOpacity style={{height:30,width:25,borderTopRightRadius:20,borderBottomRightRadius:20,backgroundColor:"#000"}}>
              <Text style={{fontWeight:'bold',color:'#fff',textAlign:'center',fontSize:20}}>+</Text>
              </TouchableOpacity>
           </View>

{/*
         <Text style={{alignSelf:'center',fontWeight:'800',fontSize:15,flexWrap:'wrap',marginTop:1}}>{price} fcfa</Text>

*/}
           <View style={{height:50,width:150,justifyContent:'center',alignSelf:'center'}}>
             
             <View style={{height:30,width:120,alignSelf:'center',borderRadius:20,justifyContent:'space-between',flexDirection:'row'}}>
               
               <TouchableOpacity onPress={()=>annuler()} style={{width:100,borderRadius:20,borderBottomLeftRadius:20,flexDirection:'column'}}>
                 <Image source={require('../../assets/delete3.jpg')} style={{height:30,width:30,alignSelf:'center'}} />
                 <Text style={{alignSelf:'center',fontWeight:'800',fontSize:10}}>annuler</Text>
               </TouchableOpacity>
   
             </View>
           </View>
         </View>
   
       </View>
       <Dialog.Container visible={visiblea}>
        <Dialog.Title>Annulation</Dialog.Title>
        <Dialog.Description>
          Voulez-vous vraiment annuler la reservation ? 
        </Dialog.Description>
        <Dialog.Button label="non" onPress={handleCancel} />
        <Dialog.Button label="oui" onPress={handleDelete} />
      </Dialog.Container>
     </View>
      }
     </React.Fragment>  
     )
   }
export default HeaderNav
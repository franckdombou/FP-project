import { View, Text, SafeAreaView, ScrollView,Modal,Dimensions, TouchableOpacity, ImageBackground, TextInput, Alert, Image, Pressable, Animated,ActivityIndicator } from 'react-native'
import React, { useState,useContext, useEffect } from 'react'
import Carre from '../../Components/pinterest/Carre'
import CarreSmall from '../../Components/pinterest/CarreSmall'
import Bande from '../../Components/pinterest/Bande'
import VueBande from '../../Components/pinterest/VueBande'
import { UserContext } from '../../navigation/NavPrincipal'
import { Video, AVPlaybackStatus } from 'expo-av';
import firebase from '../../config'
import { Mydb } from '../../config'
import { doc, updateDoc, arrayUnion, arrayRemove,serverTimestamp,Timestamp,getDoc } from "firebase/firestore";
import HeaderNav from '../../Components/pinterest/HeaderNav'
import CarrePerso from '../../Components/pinterest/CarrePerso'
import CarrePersoLike from '../../Components/pinterest/CarrePersoLike'
//import { doc, getDoc } from "firebase/firestore";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {onAuthStateChanged} from "firebase/auth"
import { auth } from '../../config';

//Dimension
const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

const tab =["C","C","S","C","VB","C","S","C","C","C","S","C","C","C","S","C","C","C","S"]
const uri = 'https://firebasestorage.googleapis.com/v0/b/test-b1637.appspot.com/o/FP2023%2FNever%20Settle%2C%20Never%20Done%20_%20Nike.mp4?alt=media&token=f5c53864-6382-441e-a041-625d34919c5c'
const statutData = [
  {
    id:1,
    img:img1,
    text:'this is the first test 1',
    name:'',
    statutData:[
      {id:1,
      img:img2,
      text:'this is the first test 1',
    },
    {
      id:2,
      img:img3,
      text:'this is the first test 2',
    },
    {
      id:3,
      img:img4,
      text:'this is the first test 3',
    }
    ]
  },
  {
    id:2,
    img:img3,
    text:'this is the first test 21',
    name:'',
    statutData:[
      {id:1,
      img:img4,
      text:'this is the first test 21',
    },
    {
      id:2,
      img:img2,
      text:'this is the first test 21',
    },
    {
      id:3,
      img:img1,
      text:'this is the first test 21',
    }
    ]
  }
]
import img1 from '../../assets/elle/adele.jpg'
import img2 from '../../assets/nike/nike3.jpg'
import img3 from '../../assets/nike/nike8.jpg'
import img4 from '../../assets/nike/nike7.jpg'
import { UserContextNewNav } from '../../navigation/NewNav'


const Vue4 = (props) => {

  const {setModalPanier,modalPanier} = useContext(UserContext)
  const {datUser1, setDatUser1,PanierPriceTotal,setPanierPriceTotal,ChooseChoisePrice,setChooseChoisePrice,ChooseChoise,setChooseChoise,ChooseChoiseName,setChooseChoiseName,modalChoose, setModalChoose,valChoose,setValChoose,ChooseChoiseImage,setChooseChoiseImage} = useContext(UserContext)
  const {currentUserNewNav, setCurrentUserNewNav}=useContext(UserContextNewNav)
  useEffect(() =>{
    onAuthStateChanged(auth, (currentUser)=>{
     setCurrentUserNewNav(currentUser)
     })
   //   console.log('current user', currentUser)  
   },[])
  

    let str = 0;

     //firebase debut
  let  ref = 0 
    let refAce = 0
  const [values, SetValues] =React.useState("")
  const [dataAcc, setDataAcc] =React.useState([])
 // const [datUser1, setDatUser1] =React.useState("")
  ref = firebase.firestore().collection("2023IPHONE")
  refAce = firebase.firestore().collection("/2023IPHONE/a1iphone14proMax/Accessoire")
  
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
    setDatUser1(items)
    setAnime(false);
    setLoader(false)
   //  console.log('salt',items)    
   })
  } 
  function getDataAcc(){
    refAce.onSnapshot((querySnapshot) => { 
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
     setDataAcc(items)
   //  setDatUser1(items)
  //   setLoader(false)
    //  console.log('salt',items)    
    })
   }
   const [dataStatut,setDataStatut]=React.useState([])
   const [statutData,setStatutData]=React.useState([])
 let refStatut = firebase.firestore().collection("/2023IPHONE/a1iphone14proMax/statut")
   
   function getDataStatut(){
    refStatut.onSnapshot((querySnapshot) => { 
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setDataStatut(items)
      setStatutData(items[0].statutData)
    })
   }  
  
  React.useEffect(() =>{
   getData()
   getDataAcc()
   getDataStatut()
  },[])

const [anime,setAnime]=useState(true)
  useEffect(() => {
    setTimeout(() => {
    //  setAnime(false);
        
    }, 500);
  }, []);


  const [stat,setStat]=useState([])
  function afficherStatut(li){
   setModalStatut(true)
   setStat(li)
  }

                 

  const [modalStatut,setModalStatut]= useState(false)

  return (
    <SafeAreaView style={{backgroundColor:'rgba(255,255,255,0.1)'}}>
    <ScrollView style={{marginBottom:1,}}>
      
      
     {/* <ImageBackground source={require('../../assets/titre/face.jpg')} style={{height:200,width:WIDTH}}>
        <Video isMuted shouldPlay source={{uri}} style={{width:WIDTH,height:200,}} useNativeControls resizeMode='cover' />      
      </ImageBackground>*/}
      
      <ScrollView horizontal style={{height:107,width:WIDTH,backgroundColor:'rgba(255,255,255,0.1)',padding:5,}}>
  {
    statutData.map((list,index)=>
    <React.Fragment key={index}>
    <Pressable style={{marginBottom:15}} onPress={()=>afficherStatut(list.statutData)}>
      <Image source={{uri:list.img}} style={{height:65,width:65,backgroundColor:'#fff', borderRadius:50,margin:5,marginBottom:2}} />
      <Text style={{color:'#fff',textAlign:'center',fontSize:10,fontWeight:'bold'}}>{list.text.length>5? list.text.slice(0,5)+'...': list.text}</Text>
      </Pressable>
      {modalStatut && <StatutWrapper key={index} statutdata={stat} profile={list} modalStatut={modalStatut} onClose={(()=>setModalStatut(false)) } />}
      </React.Fragment>
    )
  }
      </ScrollView>
<View style={{height:1,width:WIDTH,backgroundColor:'#bbb'}}></View>

{/*<ImageBackground style={{height:150}} source={require('../../assets/iphonegif2.gif')}></ImageBackground>*/}
<View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
  <Image style={{height:120,width:'49%'}} source={require('../../assets/iphone14gif.gif')} />
  <Image style={{height:120,width:'49%'}} source={require('../../assets/iphonexgif.gif')} />
</View>


      <View style={{width:WIDTH,backgroundColor:'rgba(255,255,255,0.1)',height:55,padding:10,marginTop:15}}>
        <Text style={{color:'#000',fontWeight:'bold',marginTop:5,fontSize:20}}>ACCESSOIRES</Text>
      </View>
      <ScrollView horizontal style={{width:WIDTH}}>
        {
          dataAcc.map((list,index)=>
            <Accessoires similaire={list.Similaire} batterie={list.batterie} couleur={list.couleur} origine={list.origine} stock={list.stock} ecran={list.ecran} price={list.prix} name={list.nom} image={list.image} size={list.taille} taille={index} key={index} />
          )
        }
      </ScrollView>

      <View style={{width:WIDTH,backgroundColor:'rgba(255,255,255,0.1)',height:55,padding:10,marginTop:15}}>
        <Text style={{color:'#000',fontWeight:'bold',marginTop:5,fontSize:20}}>TELEPHONES</Text>
      </View>
      <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',marginBottom:150,padding:10}}>     
      
      {/*<HeaderNav props={props} />*/}

      {/*<View style={{width:165,height:310,borderRadius:20,backgroundColor:'red',marginTop:20}}>
        <Video source={{uri}} 
          style={{width:195,height:310,}} 
          useNativeControls 
          resizeMode='cover'
          usePoster
          isMuted
          isLooping
          shouldPlay  
        />      
      </View>*/}
      {/*<CarreSmall image={list.image} /> <CarrePersoLike image={list.image} /> */}
      
     
      
      {
        data.map((list,key)=>
        list.type=='art' ?
          <Carre similaire={list.Similaire} batterie={list.batterie} couleur={list.couleur} origine={list.origine} stock={list.stock} ecran={list.ecran} price={list.prix} name={list.nom} image={list.image} size={list.taille} taille={key} key={key} />
         : <ImageBackground source={require('../../assets/iphonegif2.gif')} key={key} style={{height:155,width:WIDTH,backgroundColor:'red',marginTop:25}}></ImageBackground>
        )
      }
      {/* <VueBande /> */}
{/*
      <Video isMuted shouldPlay source={{uri}} style={{width:195,height:310,marginTop:20,borderRadius:20,margin:1}} useNativeControls resizeMode='cover' />      
      */}
      </View>

    </ScrollView>
    
                        {/* MODAL DE LA CHAUSSURE */ }
      <ModChoose />
      <ModPanier />

      <Modal animationType='fade'
    transparent={false}
    visible={anime}
    onRequestClose={() => {
      setAnime(!anime)
  }}
  >
    <SafeAreaView style={{height:HEIGHT,backgroundColor:'#000',alignContent:'center'}}>
    <ActivityIndicator style={{alignSelf:'center',marginTop:HEIGHT*0.3}} size="large" color="red" />
    </SafeAreaView>
  </Modal>
    
    </SafeAreaView>
  )
}

const Size = ({size})=>{
  return(
    <TouchableOpacity style={{backgroundColor:'grey',borderRadius:7,width:53,height:20,justifyContent:'center',margin:4}}>
    <Text style={{color:'white',alignSelf:'center'}}>EUR{size}</Text>
  </TouchableOpacity>
  )
}

const ModChoose = ()=>{

//  const {modalChoose, setModalChoose,valChoose,setValChoose} = useContext(UserContext)
  const [values,SetValues]= useState('')
  const {datUser1, setDatUser1,PanierPriceTotal,setPanierPriceTotal,ChooseChoisePrice,setChooseChoisePrice,ChooseChoise,setChooseChoise,ChooseChoiseName,setChooseChoiseName,modalChoose, setModalChoose,valChoose,setValChoose,ChooseChoiseImage,setChooseChoiseImage} = useContext(UserContext)
  const [prixReserv,setPrixReserv]= useState(0)
  const {currentUserNewNav, setCurrentUserNewNav}=useContext(UserContextNewNav)
  useEffect(() =>{
    onAuthStateChanged(auth, (currentUser)=>{
     setCurrentUserNewNav(currentUser)
     })
   //   console.log('current user', currentUser)  
   },[])
  


  var docRef = firebase.firestore().collection("2023USER").doc(currentUserNewNav.email);
 
  let str = 0
  React.useEffect(() =>{
    ObtenirDonneesuser()
    docRef.get().then((doc) => {
    if (doc.exists) {
        setDatUser1(doc.data());
      // setPrixTot(doc.data().solde)
      // console.log("dataUsers1 dans VUESFIRST",doc.data().solde);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
  },[])
// console.log(datUser1.totalPanier)
 
  //ajouter au panier

{/* function getPrice(){
    datUser1.map((list,key)=>{
      if(list.nom == "nelly"){
        list.userPanier.map((pan,kei)=>{
            if(pan.etat=="panier"){
              setPanierPriceTotal(pan.prix+PanierPriceTotal)
            }
        } )
} } ) }  


React.useEffect(() =>{
  getPrice()
   
 },[])

*/}


function subscriberINUTILE(prix){ firebase.firestore()  
  .collection('2023USER')
  .doc('Dombou') 
  .get()
  .then(  (documentSnapshot) => {reserver(prix) } );
}
 
 //resaerver doc
 function ajusterPrix(prix){
  const ref = firebase.firestore().collection("2023USER")
// console.log('currentUser.email dans BouleBiblio',cathegorie)
//  const refDoc = firebase.firestore().collection('2023NIKE')

  ref
  .doc(currentUserNewNav.email) 
  .update({totalPanier:Number(prix) +Number(prixTotPanierUser)})
  .catch((err)=>{
    console.log(err)  
  }) 
} 
 
  //fin ajout panier


   //COMMENTAIRE

   const [donneeCurrentUser,setDonneeCurrentUser]=useState([])
   const [currentSolde,setCurrentSolde]=useState(0)
   const [currentPanier,setCurrentPanier]=useState(["","",""])
   const [prixTotPanierUser,setPrixTotPanierUser]=useState(0)
   function ObtenirDonneesuser (){ firebase.firestore()
     .collection('2023USER')
     .doc(currentUserNewNav.email)
     .onSnapshot(doc => {
      const items = []
      items.push(doc.data())
     
      setDonneeCurrentUser(doc.data())
   //  console.log('DonneeCurrentUser123',doc.data().prixPanier)
      setCurrentSolde(doc.data().solde)
      setCurrentPanier(doc.data().userPanier)
      setPrixTotPanierUser(Number(doc.data().totalPanier))
     })}


                     
   function ajouter(){
    // debut ajouter tableau
    const washingtonRef = firebase.firestore().collection("2023USER").doc(currentUserNewNav.email)
    ajusterPrix(ChooseChoise[3])
    washingtonRef.update({
      //prixPanier:Number(prixTotPanierUser)+Number(ChooseChoise[3]),
      userPanier: arrayUnion({"etat":"panier", "image": ChooseChoise[1] ,"nom": ChooseChoise[0], "prix":ChooseChoise[3],"qty":1})
    });
   // Alert.alert('Ajouté au panier avec succes!!! ')
   setModalOK(true)
   }

   function annuler({image,nom,prix,}){
    // debut ajouter tableau
    const washingtonRef = firebase.firestore().collection("2023USER").doc(currentUserNewNav.email)
    
    washingtonRef.update({
      userPanier: arrayRemove({"etat":"panier", "image": image ,"nom": nom, "prix":prix})
    });
   // setModalComm(!modalComm)
   // Alert.alert('Ajouté au panier avec succes!!! ')
 
//    console.log(washingtonRef) 
   }
   //FIN COMMENTAIRE
  const [modalSimlaire,setModalSimilaire]= useState(false)

  const [modalOK,setModalOK]=useState(false)


  return(
    <Modal animationType='slide'
    transparent={true}
    visible={modalChoose}
    onRequestClose={() => {
      setModalChoose(!modalChoose)
  }}
  >
    <SafeAreaView style={{backgroundColor:'#000',height:HEIGHT,width:WIDTH}}>

    

      <ImageBackground source={require('../../assets/icons/fonfMac.jpg')} style={{height:HEIGHT,marginBottom:20}}>
      <ScrollView style={{}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
          <TouchableOpacity style={{height:40,width:40,backgroundColor:'rgba(255,255,255,0.5)',borderRadius:50}} onPress={()=>setModalChoose(false)}>
            <Text style={{fontSize:30,fontWeight:'800',color:'rgb(249, 180, 45)'}}> {"<"} </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize:30,fontWeight:'800',color:'red'}}></Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal style={{width:WIDTH,}}>
        {
        tab.map((list,key)=>
          <Image resizeMode='contain' resizeMethod='resize' key={key} style={{height:370,width:WIDTH*0.9,marginRight:4}} source={{uri:ChooseChoise[1]}} />
        )
      }
        </ScrollView>

        <View style={{backgroundColor:'rgba(255,255,255,0.9)',borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
          <View style={{flexDirection:'column',padding:10,alignContent:'center',alignSelf:'center'}}>
          <View style={{flexDirection:'row',justifyContent:'space-around',}}>
          <View style={{width:WIDTH*0.45,padding:10}}>
            <Text style={{color:'#000',fontSize:12,fontWeight:'800'}}>{ChooseChoise[0]}</Text>
            <Text style={{color:'#000',fontSize:12,fontWeight:'800'}}>batterie : {ChooseChoise[4]}%</Text>
            <Text style={{color:'#000',fontSize:12,fontWeight:'800'}}>origine : {ChooseChoise[6]}</Text>
            <Text style={{color:'#000',fontSize:12,fontWeight:'800'}}>stock : {ChooseChoise[7]}</Text>
          </View>
          <View style={{width:WIDTH*0.45,padding:15}}>
            <Text style={{color:'#000',fontSize:12,fontWeight:'800'}}>Prix : {ChooseChoise[3]} fcfa</Text>
            <Text style={{color:'#000',fontSize:12,fontWeight:'800'}}>ecran : {ChooseChoise[8]}</Text>
            <Text style={{color:'#000',fontSize:12,fontWeight:'800'}}>couleur : {ChooseChoise[5]}</Text>
            <Text style={{color:'#000',fontSize:12,fontWeight:'800'}}>64Go</Text>
          </View>
          </View>

          
          <Text style={{fontWeight:'500',padding:15}}>Le MacBook est un ordinateur portable Macintosh développé et produit par la société Apple. Le MacBook succédait à l'iBook et au PowerBook de 12 pouces dans le cadre de la transition d'Apple vers des processeurs Intel.</Text>          

          <TouchableOpacity onPress={()=>ajouter()} style={{backgroundColor:'rgb(249, 180, 45)',height:50,width:200,justifyContent:'center',marginTop:10,borderRadius:10,marginBottom:10,alignSelf:'center'}}>
            <Text style={{alignSelf:'center',fontWeight:'bold',color:'#000'}}>Ajouter au panier</Text>
          </TouchableOpacity>
          
          </View>
          {/*
          <View style={{flexDirection:'column',margin:5,justifyContent:'center'}}>
            <Text style={{color:'#fff',fontWeight:'bold',alignSelf:'center'}}>Pointure : </Text>
            <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center'}}>            
              ChooseChoise[2].map((list,key)=>
                <Size key={key} size={list} />
              )
            </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-around',}}>
            <Image style={{height:70,width:70,borderRadius:50,marginBottom:5}} source={require('../../assets/icons/livraison.jpg')} />
            <TouchableOpacity onPress={()=>ajouter()} style={{backgroundColor:'green',height:50,width:200,justifyContent:'center',marginTop:10,borderRadius:10,marginBottom:10}}>
              <Text style={{alignSelf:'center',fontWeight:'bold',color:'#fff'}}>Ajouter au panier</Text>
            </TouchableOpacity>
          </View>
          */}
        </View>
       {/* <View style={{height:220,backgroundColor:'#484848',marginTop:10,borderRadius:30,width:WIDTH}}>
          <Text style={{textAlign:'center',padding:10,fontSize:15,fontWeight:'bold',color:'#fff'}}>Arrangez vos appareils</Text>
        </View>*/}

        {/** ARTICLES SIMILAIRES */}

        <Text style={{alignSelf:'center',fontSize:15,fontWeight:'700',color:'white',marginTop:25,marginBottom:20}}>Articles Similaires</Text>


        <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',marginBottom:250,padding:15,backgroundColor:'rgba(255,255,255,0.9)',borderRadius:20}}>
          {
            valChoose.map((list,key)=>
              <CarreSimilaire setModalOK={setModalOK} modalOK={modalOK} setModalSimilaire={setModalSimilaire} onClose={()=>setModalSimilaire(false)} modalSimlaire={modalSimlaire} similaire={list.Similaire} batterie={list.batterie} couleur={list.couleur} origine={list.origine} stock={list.stock} ecran={list.ecran} price={list.prix} name={list.nom} image={list.image} size={list.taille} taille={key} key={key}  />
              
            )
          }
        </View>



        </ScrollView>
      </ImageBackground>
    </SafeAreaView>

{/** modal ok */}
    <Modal animationType='fade'
    transparent={true}
    visible={modalOK}
    onRequestClose={() => {
      setModalOK(!modalOK)
  }}
  >
    <SafeAreaView style={{backgroundColor:'rgba(0,0,0,0.9)',height:HEIGHT}}>
      <View  style={{backgroundColor:'#fff',height:100,width:300,borderRadius:20,alignSelf:'center',marginTop:HEIGHT*0.4}}>
          <Text style={{fontSize:15,fontWeight:'600',textAlign:'center',marginTop:10}}>ajouter au panier avec succes!!!</Text>
          <TouchableOpacity style={{height:30,width:100,backgroundColor:'rgb(249, 180, 45)',borderRadius:20,alignSelf:'center',marginTop:30}} onPress={()=>setModalOK(false)}>
            <Text style={{textAlign:'center',fontWeight:'800',fontSize:20,marginTop:3}}>OK</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  </Modal>
          
  </Modal>

  )
}
const ModPanier = ()=>{

  const [modalPanier,setModalPanier]=useState(false)

  
    
    
    return(
      <Modal animationType='slide'
      transparent={true}
      visible={modalPanier}
      onRequestClose={() => {
        setModalPanier(!modalPanier)
    }}
    >
      <SafeAreaView style={{backgroundColor:'#000',height:HEIGHT,width:WIDTH}}>
  
      
  
        <ImageBackground source={require('../../assets/elle/adele.jpg')} style={{height:HEIGHT,marginBottom:20}}>
        <ScrollView>
          <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
            <TouchableOpacity>
              <Text style={{fontSize:30,fontWeight:'800',color:'red'}}> {"<"} </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{fontSize:30,fontWeight:'800',color:'red'}}>...</Text>
            </TouchableOpacity>
         
            </View>
  
         
  
      
  
        
         
  
  
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </Modal>
  
    )
  }



  const StatutWrapper = ({modalStatut,onClose,statutdata})=>{
    const [current,setCurrent]=useState({data:statutdata[0],index:0})
    useEffect(()=>{
      const timer = setTimeout(()=>{
        if(current.index===statutdata.length-1){return onClose(true)}
        setCurrent({
          ...current,
          index:current.index-1,
          data:statutdata[current.index-1]
        })
        console.log("time out")
      },1000)
      return clearTimeout(timer)
    },[current])
    return(
      <Modal animationType='fade' visible={modalStatut}>
        <SafeAreaView style={{height:HEIGHT,width:WIDTH,backgroundColor:'#222'}}>
        <View style={{flexDirection:'row',width:'100%',marginTop:11}}>
       
        {
          statutdata.map((data,index)=>
          
            
          <View key={index} style={{flex:1,backgroundColor:'#bbbb',height:2,marginHorizontal:2,width:10}}></View>

          
          )
        }
          
          </View>

          <View style={{backgroundColor:'#222',flex:1}}>
            <Image 
            source={current.data.img}
            resizeMode='contain'
            style={{width:'100%',height:HEIGHT/1.2,maxHeight:HEIGHT/1.2}}
             />
      <ActivityIndicator style={{alignSelf:'center'}} size="large" color="red" />

          </View>

          <TouchableOpacity onPress={()=>{
            if(current.index===0){return onClose(true)}
            setCurrent({
              ...current,
              index:current.index-1,
              data:statutdata[current.index-1]
            })
          }} style={{position:'absolute',width:WIDTH/2,height:HEIGHT*0.9,bottom:0,}}>

          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{
            if (current.index===statutdata.length-1){return onClose(true)}
            setCurrent({
              ...current,
              index:current.index+1,
              data:statutdata[current.index+1]
            })
          }} style={{position:'absolute',width:WIDTH/2,height:HEIGHT*0.9,bottom:0,right:0,}}>

          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    )
  }

  const CarreSimilaire =({setModalOK,modalOK,setModalSimilaire,modalSimlaire,onClose,taille,name,size,image,price,batterie,couleur,origine,stock,ecran,similaire})=>{

    return (
      <SafeAreaView style={{width:"45%",height:260,marginTop:20,borderRadius:20,margin:1,backgroundColor:'rgba(240,240,240,0.7)'}}>

      <TouchableOpacity style={{height:230,width:'100%',borderRadius:20,backgroundColor:'yellow'}} onPress={()=>setModalSimilaire(true)}>
          <ImageBackground source={{uri:image}} style={{height:230,width:'100%',borderRadius:20}}>
          <View style={{backgroundColor:'rgb(246,180,45)',width:105}}>
            <Text style={{marginTop:4,color:'#000',fontWeight:'bold'}}> {price} fcfa </Text>
          </View>
          </ImageBackground>
      </TouchableOpacity>
      <View style={{justifyContent:'center',flexDirection:'row',paddingLeft:7,paddingRight:7}}>
        <Text style={{marginTop:7,color:'#000',fontWeight:'bold',textAlign:'center',fontSize:12}}> {name.length>15? name.slice(0,15)+"...":name}</Text>
      </View>
      {modalSimlaire && <ModalSim modalOK={modalOK} setModalOK={setModalOK} batterie={batterie} couleur={couleur} origine={origine} stock={stock} ecran={ecran} price={price} name={name} image={image} size={taille}  setModalSimilaire={setModalSimilaire} modalSimlaire={modalSimlaire} onClosef={onClose}  /> }
  </SafeAreaView>
    )
  }

  const ModalSim= ({setModalOK,modalOK,modalSimlaire,onClose,setModalSimilaire,name,size,image,price,batterie,couleur,origine,stock,ecran,})=>{
    
    const {currentUserNewNav, setCurrentUserNewNav}=useContext(UserContextNewNav)
    useEffect(() =>{
      onAuthStateChanged(auth, (currentUser)=>{
       setCurrentUserNewNav(currentUser)
       })
     //   console.log('current user', currentUser)  
     },[])
    

    function ajouter(){
      // debut ajouter tableau
      const washingtonRef = firebase.firestore().collection("2023USER").doc(currentUserNewNav.email)
      ajusterPrix(price)
      washingtonRef.update({
        userPanier: arrayUnion({"etat":"panier", "image": image ,"nom": name, "prix":price,"qty":1})
      });
     // setModalComm(!modalComm)
      //Alert.alert('Ajouté au panier avec succes!!! ')
      setModalSimilaire(false)
      setModalOK(true)
  //    console.log(washingtonRef) 
     }
     function ajusterPrix(prix){
      const ref = firebase.firestore().collection("2023USER")
    // console.log('currentUser.email dans BouleBiblio',cathegorie)
    //  const refDoc = firebase.firestore().collection('2023NIKE')
    
      ref
      .doc(currentUserNewNav.email) 
      .update({totalPanier:Number(prix) +Number(prixTotPanierUser)})
      .catch((err)=>{
        console.log(err)  
      }) 
    } 
     
      //fin ajout panier
    useEffect(()=>{ObtenirDonneesuser()},[])
    
       //COMMENTAIRE
    
       const [donneeCurrentUser,setDonneeCurrentUser]=useState([])
       const [currentSolde,setCurrentSolde]=useState(0)
       const [currentPanier,setCurrentPanier]=useState(["","",""])
       const [prixTotPanierUser,setPrixTotPanierUser]=useState(0)
       function ObtenirDonneesuser (){ firebase.firestore()
         .collection('2023USER')
         .doc(currentUserNewNav.email)
         .onSnapshot(doc => {
          const items = []
          items.push(doc.data())
         
          setDonneeCurrentUser(doc.data())
      //   console.log('DonneeCurrentUser123',doc.data().prixPanier)
          setCurrentSolde(doc.data().solde)
          setCurrentPanier(doc.data().userPanier)
          setPrixTotPanierUser(Number(doc.data().totalPanier))
         })}

        
    
    
    return(
      <Modal visible={modalSimlaire} animationType='fade'>
        <SafeAreaView style={{height:HEIGHT,backgroundColor:'#000'}}>
      <ImageBackground source={require('../../assets/icons/fonfMac.jpg')} style={{height:HEIGHT,marginBottom:20,backgroundColor:'#000'}}>
          
        <ScrollView>
        <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
          <TouchableOpacity style={{height:40,width:40,backgroundColor:'rgba(255,255,255,0.5)',borderRadius:30}} onPress={()=>setModalSimilaire(false)}>
          <Text style={{fontSize:26,fontWeight:'800',color:'rgb(249,180,45)',textAlign:'center',marginRight:8,marginTop:2}}> {"<"} </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize:30,fontWeight:'800',color:'red'}}></Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal style={{width:WIDTH,}}>
        {
        tab.map((list,key)=>
          <Image resizeMode='contain' resizeMethod='resize' key={key} style={{height:300,width:WIDTH*0.95,marginRight:4}} source={{uri:image}} />
        )
      }
        </ScrollView>

        <View style={{backgroundColor:'rgba(255,255,255,0.9)',borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
          <View style={{flexDirection:'column',padding:10,alignContent:'center',alignSelf:'center'}}>
          <View style={{flexDirection:'row',justifyContent:'space-around',}}>
          <View style={{width:WIDTH*0.45,padding:10}}>
            <Text style={{color:'#000',fontSize:12,fontWeight:'800'}}>{name}</Text>
            <Text style={{color:'#000',fontSize:12,fontWeight:'800'}}>batterie : {batterie}%</Text>
            <Text style={{color:'#000',fontSize:12,fontWeight:'800'}}>origine : {origine}</Text>
            <Text style={{color:'#000',fontSize:12,fontWeight:'800'}}>stock : {stock}</Text>
          </View>
          <View style={{width:WIDTH*0.45,padding:15}}>
            <Text style={{color:'#000',fontSize:12, fontWeight:'800'}}>Prix : {price}K fcfa</Text>
            <Text style={{color:'#000',fontSize:12,fontWeight:'800'}}>ecran : {ecran}</Text>
            <Text style={{color:'#000',fontSize:12,fontWeight:'800'}}>couleur : {couleur}</Text>
            <Text style={{color:'#000',fontSize:12,fontWeight:'800'}}>64Go</Text>
          </View>
          </View>
          <Text style={{fontWeight:'500',padding:15}}>Le MacBook est un ordinateur portable Macintosh développé et produit par la société Apple. Le MacBook succédait à l'iBook et au PowerBook de 12 pouces dans le cadre de la transition d'Apple vers des processeurs Intel.</Text>

          <TouchableOpacity onPress={()=>ajouter()} style={{backgroundColor:'rgb(249, 180, 45)',height:50,width:200,justifyContent:'center',marginTop:10,borderRadius:10,marginBottom:10,alignSelf:'center'}}>
            <Text style={{alignSelf:'center',fontWeight:'bold',color:'#000'}}>Ajouter au panier</Text>
          </TouchableOpacity>
        
          </View>

        </View>
        </ScrollView>
        </ImageBackground>
        </SafeAreaView>

      
        
      </Modal>
    )
  }

  const Accessoires=({taille,name,size,image,price,batterie,couleur,origine,stock,ecran,similaire})=>{
   
    const {ChooseChoisePrice,setChooseChoisePrice,ChooseChoise,setChooseChoise,ChooseChoiseName,setChooseChoiseName,modalChoose, setModalChoose,valChoose,setValChoose,ChooseChoiseImage,setChooseChoiseImage} = useContext(UserContext)

    const VoirChoose = ()=>{
      setChooseChoisePrice(price)
      setChooseChoise([name,image,size,price,batterie,couleur,origine,stock,ecran,similaire])
      setValChoose(similaire)
      setModalChoose(true)
    }
  
    return(
      <TouchableOpacity onPress={()=>VoirChoose()}>
      <View style={{flexDirection:'column'}}>
        <Image source={{uri:image}} style={{height:150,width:150,borderRadius:20,backgroundColor:'red',margin:5}} />
        <Text style={{color:'rgba(0,0,0,.5)',textAlign:'center',fontWeight:'bold'}}>{name}</Text>
      </View>
      </TouchableOpacity>
    )
  }
export default Vue4
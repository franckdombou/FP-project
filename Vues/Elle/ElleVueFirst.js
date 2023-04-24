import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View,Image, Touchable, Modal, Pressable, TouchableWithoutFeedback, TextInput, SafeAreaView, Button, Alert,ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
//import SousTitre from '../../Components/Elle/SousTitre'
import Ionicons from '@expo/vector-icons/Ionicons';

import { UserContext } from '../../navigation/NavPrincipal'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import firebase from '../../config'
//import { Mydb } from '../../config'
import { doc, updateDoc, arrayUnion, arrayRemove,serverTimestamp,Timestamp,getDoc } from "firebase/firestore";
//import { Video, AVPlaybackStatus } from 'expo-av';
import WebView from 'react-native-webview'
import {onAuthStateChanged} from "firebase/auth"
import { auth } from '../../config';


//const tab =["1","2","3","4"]
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height


const img1 = 'https://imagizer.imageshack.com/img924/2093/vWVu4J.jpg'
const img2 = 'https://imagizer.imageshack.com/img924/2093/vWVu4J.jpg'
const img3 = 'https://imagizer.imageshack.com/img924/8871/j1fWsb.jpg'
const img4 = 'https://imagizer.imageshack.com/img923/968/oVgeKK.jpg'
import { UserContextNewNav } from '../../navigation/NewNav'

const statutData = [
  {
    id:1,
    img:img1,
    text:'news is the first test 1',
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
      img:img3,
      text:'this is the first test 21',
    }
    ]
  }
]


export default function ElleVueFirst(props) {

  const {currentUserNewNav, setCurrentUserNewNav}=useContext(UserContextNewNav)
  useEffect(() =>{
    onAuthStateChanged(auth, (currentUser)=>{
     setCurrentUserNewNav(currentUser)
     })
   },[])

  const coeur = ({focused, color, size}) => {
    let iconName;
    let rn = route.name;
    iconName = focused ? 'chatbubbles' : 'chatbubbles-outline'
    
    return <Ionicons name={iconName} size={size} color={color} />
}
  const [modalPhoto,setModalPhoto] = useState(false)
  const [modalAnnonces,setModalAnnonces] = useState(false)
  const {ElleLike,setElleLike,ElleNomTitre,setElleNomTitre,ElleImageTitre,setElleImageTitre,ElleVideoTwitt,setElleVideoTwitt,ElleTwitt,setElleTwitt,ElleEmail,setElleEmail,modalElleCommentaire,setModalElleCommentaire,ElleComments,setElleComments,ElleImageTwitt,setElleImageTwitt,ElleTextComments,setElleTextComments,} = useContext(UserContext)
  const [commentValue,setCommentValue]= useState("")

  const vur=()=>{
    return(
      <VueElle2 />
    )
  }


  let  ref = 0 
  let refAnnonce=0
  const [values, SetValues] =React.useState("")
 // const [datUser1, setDatUser1] =React.useState("")
  ref = firebase.firestore().collection("2023TWITT")
  refAnnonce = firebase.firestore().collection("/2023TWITT/a2twitt/Annonces")
 let refStatut = firebase.firestore().collection("/2023TWITT/a2twitt/statut")
  
  const [modalStatut,setModalStatut]= useState(false)
   
  const [data,setData]=React.useState([])
  const [dataAnnonce,setDataAnnonce]=React.useState([])
  const [dataStatut,setDataStatut]=React.useState([])
  const [statutData,setStatutData]=React.useState([])
  const [loader,setLoader] =React.useState(true)
  const [donneeUser,setDonneeUser]=useState([])
  const [donneeUserName,setDonneeUserName]=useState("")
  const [donneeUserEmail,setDonneeUserEmail]=useState("")
  const [recharg,setRecharg]=useState('')
  const [titrea, setTitre] = useState('')
  const [gifAcceuil,setGifAcceuil] = useState('')
  const [textA,setTextA] = useState('')
  const [lienVideoA,setLienVideoA] = useState('')
  const [stat,setStat]=useState([])
  const [anime,setAnime]=useState(true)



  function getDataAnnonce(){
   refAnnonce.onSnapshot((querySnapshot) => { 
     const items = []
     querySnapshot.forEach((doc) => {
       items.push(doc.data())
     })
     setDataAnnonce(items)
   })
  }

  function getDataStatut(){
    refStatut.onSnapshot((querySnapshot) => { 
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setDataStatut(items)
      setStatutData(items[0].statutData)
      setAnime(false);
    })
   }
  function getData(){
    ref.onSnapshot((querySnapshot) => { 
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setData(items)
    //  SetValues(items)
      setLoader(false)
      setAnime(false);
    })
   }


  function subscribed (){ firebase.firestore()
    .collection('2023USER')
    .doc(currentUserNewNav.email)
    .onSnapshot(doc => {
    // const items = []
    // items.push(doc.data())
   //  setDonneeUser(doc.data())
     setDonneeUserEmail(doc.data().email)
     setDonneeUserName(doc.data().nom)
   //  setDonneeCurrentUser(doc.data())
  
   //  setCurrentSolde(doc.data().solde)
   //  setCurrentPanier(doc.data().userPanier)
   //  setprixtotPan(doc.data().totalPanier)
    // setCurrentUserRecent(doc.data())
    // setMes(doc.data().name)
    })}
  

 

  function ajouterComm(){
    // debut ajouter tableau
    const washingtonRef = firebase.firestore().collection("2023TWITT").doc(ElleTwitt)
    setCommentValue('')
    washingtonRef.update({
      comments: arrayUnion({"nomUser": donneeUserName ,"com": commentValue, "email":donneeUserEmail})
    });
   // setModalComm(!modalComm)
   setRecharg(commentValue)
   setModalElleCommentaire(false)
    Alert.alert('Commentaire envoyé!!! ')
    
   }

   function ajouterLike(){
    // debut ajouter tableau
    const washingtonRef = firebase.firestore().collection("2023TWITT").doc(ElleTwitt)
   // setCommentValue('')
    washingtonRef.update({
      likes: arrayUnion({"nomUser": donneeUserName , "email":donneeUserEmail})
    });
   // setModalComm(!modalComm)
  // setRecharg(commentValue)
  //  Alert.alert('Commentaire envoyé!!! ')
    
   }

   
     //la webview
     const webviewRef = React.useRef(null);
     function webViewgoback() {
       if (webviewRef.current) webviewRef.current.goBack();
     }
    


     function afficherAnnonce(titre,gifAcceuil,text,lienVideo){
        setTitre(titre)
        setGifAcceuil(gifAcceuil)
        setTextA(text)
        setLienVideoA(lienVideo)
        setModalAnnonces(true)
     }
     
     function afficherStatut(li){
      setModalStatut(true)
      setStat(li)
     }

     useEffect(() => {
       setTimeout(() => {
        setAnime(false);   
       }, 500);
     }, []);
     React.useEffect(() =>{
      getData()
      getDataAnnonce()
      getDataStatut()
       subscribed()
     },[recharg])

  return (
    <SafeAreaView style={{}}>
    <ScrollView style={{backgroundColor:'#fff',}}>

    <ScrollView horizontal style={{height:107,width:WIDTH,backgroundColor:'#fff',padding:5,}}>
  {
    statutData.map((list,index)=>
    <React.Fragment key={index}>
    <Pressable style={{marginBottom:15}} onPress={()=>afficherStatut(list.statutData)}>
      <Image source={{uri:list.img}} style={{height:65,width:65,backgroundColor:'#fff', borderRadius:50,margin:5,marginBottom:2}} />
      <Text style={{color:'#000',textAlign:'center',fontSize:10,fontWeight:'bold'}}>{list.text.length>5? list.text.slice(0,5)+'...': list.text}</Text>
      </Pressable>
      {modalStatut && <StatutWrapper key={index} stat={stat} statutdata2={list.statutData} profile={list} modalStatut={modalStatut} onClose={(()=>setModalStatut(false)) } />}
      </React.Fragment>
    )
  }
      </ScrollView>

      <View style={{height:0.4,width:WIDTH,backgroundColor:'#bbbb',}}></View>


      {
        data.map((list,key)=>
        list.tweet=="tweet"  ?
        <Carte key={key} donneeUserName={donneeUserName} donneeUserEmail={donneeUserEmail} imageTitre={list.imageTitre} titre={list.nomTitre} type={list.type} elletwitt={list.nomDoc} comments={list.comments} likes={list.likes} imageTwitt={list.imagetwitt} textComment={list.textComment} setModalPhoto={setModalPhoto} modalPhoto={modalPhoto} props={props} />
        :
        list.tweet=="annonce"  ?
        <React.Fragment key={key}>
      <View style={{height:0.4,width:WIDTH,backgroundColor:'#bbbb',}}></View>

        <Text style={{color:'#000',fontWeight:'800',marginTop:10,marginLeft:25,fontSize:15}}>annonces</Text>
        <ScrollView horizontal style={{}}>
          {
            dataAnnonce.map((e,ind)=>
            <React.Fragment key={ind}>
              <TouchableOpacity onPress={()=>afficherAnnonce(e.titre,e.gifAcceuil,e.text,e.lienVideo)}>
            <Image source={{uri:e.gifAcceuil}} style={{height:180,width:150,backgroundColor:'rgb(249, 180, 45)',borderRadius:20,margin:7}} />
            <Text style={{color:'#000',marginBottom:10,textAlign:'center',fontSize:13}}>{e.titre}</Text>
            </TouchableOpacity>
            {modalAnnonces && <Annonces setLienVideoA={setLienVideoA} lienVideoA={lienVideoA} gifAcceuil={gifAcceuil} setGifAcceuil={setGifAcceuil} setTitre={setTitre} titra={titrea} setTextA={setTextA} textA={textA} titre={e.titre} image={e.gifAcceuil} text={e.text} lienVideo={e.lienVideo} modalAnnonces={modalAnnonces} setModalAnnonces={setModalAnnonces} />}
            </React.Fragment>
            )
          }
          
        </ScrollView>
        <View style={{height:0.5,width:WIDTH,backgroundColor:'#bbbb'}}></View>
        
        </React.Fragment>
        : <View key={key} style={{backgroundColor:'#fff'}}>
          <Text style={{color:"#bbb",textAlign:'center',fontWeight:'bold',padding:10,fontSize:10}}>23/11/2023</Text>
        </View>
        )
      }
    {/*<Modal animationType='slide'
     transparent={true}
      visible={modalPhoto}
      onRequestClose={() => {
      setModalPhoto(!modalPhoto)
   }}
   >
    <Pressable onPress={()=>setModalPhoto(!modalPhoto)} style={{alignSelf:'center',marginTop:100}}>
      <Image style={{width:WIDTH,alignSelf:'center',alignItems:'center',}} source={{uri:ElleImageTwitt}} />
    </Pressable>
  </Modal>*/}


   {/**modal commentaire */}

   <Modal animationType='slide'
    // transparent={true}
      visible={modalElleCommentaire}
      onRequestClose={() => {
      setModalElleCommentaire(!modalElleCommentaire)
   }}
   >
    <SafeAreaView style={{paddingTop:125}}>

   
    
   <KeyboardAwareScrollView> 
   
  <ScrollView style={{backgroundColor:'#fff',position:'relative'}}>

  <TouchableOpacity style={{marginTop:10,marginLeft:5,marginBottom:7,height:40,width:40,paddingLeft:10}} onPress={()=>setModalElleCommentaire(!modalElleCommentaire)}>
       <Text style={{fontSize:30,fontWeight:'900',color:'rgba(0, 0, 0, 0.5)',marginLeft:5}}>{"<"}</Text>
    </TouchableOpacity>


    <View style={{flexDirection:'row',marginTop:5,padding:10}}>
      <Image style={{height:50,width:50,borderRadius:40}} source={{uri:ElleImageTitre}} />
      <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:13,fontWeight:'900',color:'#bbb',marginLeft:5}}>{ElleNomTitre}</Text>
          <Image style={{height:20,width:20,borderRadius:40,paddingLeft:10}} source={require('../../assets/icons/twitorang.png')} />
        </View>
        <Text style={{fontSize:10,fontWeight:'900',color:'rgba(0, 0, 0, 0.5)',marginLeft:5}}>@PolytechniqueYaounde</Text>
        </View>
    </View>

      <View style={{backgroundColor:'#fff'}}>
        
          <View style={{width:WIDTH*0.9,borderRadius:40,margin:5,paddingLeft:10,paddingRight:10}}>
              <Text style={{color:'#000',fontSize:20,margin:5}}> {ElleTextComments} </Text>
          </View>
         { ElleVideoTwitt=="photo" ?
          <View>
          <Image resizeMode='contain' style={{height:HEIGHT*0.3,width:WIDTH*0.9,borderRadius:5,backgroundColor:'#000',borderRadius:30,alignSelf:'center'}} source={{uri:ElleImageTwitt}} />
          </View>
        :
        <View style={{width:300,height:370,borderRadius:20,backgroundColor:'red',alignSelf:'center'}}>
       { /*
        <Video  source={{uri:ElleImageTwitt}} style={{width:300,height:370,borderRadius:20,}} useNativeControls resizeMode='cover' />      
        */}
        <WebView
           startInLoadingState={true}
           ref={webviewRef}
           style={{width:300,height:370,borderRadius:20,}}
         source={{uri: ElleImageTwitt}} />
 
        </View>
        }
       
        
        <View style={{flexDirection:'row',marginLeft:10,marginTop:5,marginBottom:10,paddingLeft:10}}>
            
          <View style={{flexDirection:'row',}}>
              <Text style={{color:'#bbb',fontSize:20,fontWeight:'bold'}}>{ElleComments.length}</Text>
              <Text style={{color:'#bbb',marginRight:5,marginLeft:5,marginTop:5}}>Commentaires</Text>
          </View>
            
          <View style={{flexDirection:'row',marginLeft:10}}>
              <Text style={{color:'#bbb',fontSize:20,fontWeight:'bold'}}>{ElleLike.length}</Text>
              <Text style={{color:'#bbb',marginRight:5,marginLeft:5,marginTop:5}}>likes</Text>
          </View>
        </View>
      <View style={{backgroundColor:'#bbbb',height:0.5,width:WIDTH,}}></View>



  
  <SafeAreaView style={{backgroundColor:'#fff',flexDirection:'row',flex:1,with:WIDTH*0.9,}}>
   
   <Image style={{height:30,width:30,borderRadius:50,margin:5,alignSelf:'center'}} source={require('../../assets/usericon.png')} />
      <TextInput
       style={{height: 40,margin: 12,borderWidth: 1,padding: 10,width:'55%',alignSelf:'center',borderColor:'rgba(0, 0, 0, 0.5)',borderRadius:20,color:'#000'}}
       onChangeText={setCommentValue}
       placeholderTextColor='rgba(0, 0, 0, 0.5)'
       value={commentValue}
       multiline
      // inputAccessoryViewID
       placeholder="entrer votre commentaire"
       keyboardType="twitter"
      />
      <TouchableOpacity onPress={()=>ajouterComm()} style={{backgroundColor:'rgb(249, 180, 45)',height:30,alignSelf:'center',borderRadius:20,}}>
        <Text style={{fontWeight:'900',color:'#fff',margin:5,}}>repondre</Text>
      </TouchableOpacity>
  </SafeAreaView>

  
  <View style={{backgroundColor:'#bbbb',height:0.5,width:WIDTH,}}></View>
 


      </View>
      

      {
        ElleComments.reverse().map((list,key)=>
        <React.Fragment key={key}>
          <View style={{height:0.4,width:WIDTH,backgroundColor:'#bbbb',}}></View>
          <Comm email={list.email} key={key} com={list.com} nomUser={list.nomUser} />
        </React.Fragment>
        )
      }

  </ScrollView>
 
  </KeyboardAwareScrollView>
  </SafeAreaView>
</Modal>

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

    </ScrollView>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
})

const Carte =({likes,imageTitre,titre,type,props,modalPhoto,setModalPhoto,comments,imageTwitt,textComment,elletwitt,donneeUserEmail,donneeUserName})=>{
  const {ElleLike,setElleLike,ElleNomTitre,setElleNomTitre,ElleImageTitre,setElleImageTitre,ElleVideoTwitt,setElleVideoTwitt,ElleTwitt,setElleTwitt,ElleEmail,setElleEmail,modalElleCommentaire,setModalElleCommentaire,ElleComments,setElleComments,ElleImageTwitt,setElleImageTwitt,ElleTextComments,setElleTextComments,} = useContext(UserContext)

  const voirCommentaire = () => {
    props.navigation.navigate('VueElle2',{})    
  }
  function AffichImage(){
   // setElleEmail(email)
   setElleNomTitre(titre)
   setElleImageTitre(imageTitre)
   setElleVideoTwitt(type)
   setElleTwitt(elletwitt)
    setElleTextComments(textComment)
    setElleLike(likes)
    setElleComments(comments)
    setElleImageTwitt(imageTwitt)
    setModalElleCommentaire(!modalElleCommentaire)
  }

   //la webview
   const webviewRef = React.useRef(null);
   function webViewgoback() {
     if (webviewRef.current) webviewRef.current.goBack();
   }

   function ajouterLike(){
    // debut ajouter tableau
    const washingtonRef = firebase.firestore().collection("2023TWITT").doc(elletwitt)
   // setCommentValue('')
    washingtonRef.update({
      likes: arrayUnion(donneeUserEmail)
    });
   // setModalComm(!modalComm)
  // setRecharg(commentValue)
  //  Alert.alert('Commentaire envoyé!!! ')
    
   }

   function removeLike(){
    // debut ajouter tableau
    const washingtonRef = firebase.firestore().collection("2023TWITT").doc(elletwitt)
   // setCommentValue('')
    washingtonRef.update({
      likes: arrayRemove(donneeUserEmail)
    });
   // setModalComm(!modalComm)
  // setRecharg(commentValue)
  //  Alert.alert('Commentaire envoyé!!! ')
    
   }

  return(
    <View style={{backgroundColor:'#fff',paddingLeft:15,paddingRight:15,paddingTop:7,}}>
        <View style={{flexDirection:'row',justifyContent:'flex-start',marginTop:5}}>
          <Image  style={{height:50,width:50,borderRadius:40}} source={{uri:imageTitre}} />
          <View style={{flexDirection:'column'}}>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:15,fontWeight:'900',color:'#000',marginLeft:5}}>{titre}</Text>
            <Image  style={{height:20,width:20,borderRadius:40}} source={require('../../assets/icons/twitorang.png')} />
          </View>
          <Text style={{fontSize:10,fontWeight:'900',color:'#bbb',marginLeft:5}}>{titre}@gmail.com</Text>
          </View>
        </View>
        <View style={{backgroundColor:'#fff',marginLeft:50}}>
          
          <Pressable onPress={()=>AffichImage()} style={{width:300,borderRadius:40,marginBottom:5}}>
            <Text style={{color:'#000',}}> {textComment} </Text>
            </Pressable>
            <View style={{height:300,width:300,borderRadius:40,}}>
           { 
           type=="photo" ? 
          <Pressable onPress={()=>AffichImage()} style={{width:WIDTH,borderRadius:40,marginBottom:5}}>
            <Image  resizeMode='contain' style={{height:370,width:"70%",borderRadius:40}} source={{uri:imageTwitt}} />
          </Pressable>
            :  
          (type=="video" ?
          <WebView
           startInLoadingState={true}
           ref={webviewRef}
           style={{width:"90%",height:370,borderRadius:20,}}
          source={{uri: imageTwitt}} /> : <></> )
          } 
           </View>
           <Pressable onPress={()=>AffichImage()} style={{width:300,borderRadius:40,marginBottom:5}}>
          
          <View style={{flexDirection:'row',marginLeft:10,marginTop:5,marginBottom:10}}>
              { likes.includes(donneeUserEmail) ? 
              <TouchableOpacity style={{padding:5}} onPress={removeLike}>
                <Ionicons name="heart" size={25} color={"rgb(249, 180, 45)"} />
              </TouchableOpacity> :
              <TouchableOpacity style={{padding:5}} onPress={ajouterLike}>
              <Ionicons name="heart" size={25}  color={"#000"} />
              </TouchableOpacity>
              }

              <Text style={{color:'#000',marginRight:5,marginLeft:5,marginTop:10}}>{likes.length}</Text>
              
              <TouchableOpacity style={{padding:5}} onPress={()=>setModalElleCommentaire(!modalElleCommentaire)}>
                <Ionicons name="chatbubbles" size={25} color={"rgb(249, 180, 45)"} />
              </TouchableOpacity>
            
              <Text style={{color:'#000',marginRight:5,marginLeft:5,marginTop:10}}>{comments.length}</Text>
              <Text style={{color:'red',marginRight:5,marginLeft:5,marginTop:2}}></Text>
          </View>
          </Pressable>
        </View>
        <View style={{height:0.4,width:WIDTH*2,backgroundColor:'#bbbb',}}></View>

      </View>
  )
}

const CarteComm =({props,modalPhoto,setModalPhoto})=>{

  const voirCommentaire = () => {
    props.navigation.navigate('VueElle2',{})    
  }
 
  return(
    <View style={{backgroundColor:'#000',}}>
        <View style={{flexDirection:'row',justifyContent:'flex-start',marginTop:5}}>
          <Image style={{height:50,width:50,borderRadius:40}} source={require('../../assets/icons/logoENSPY.png')} />
          <View style={{flexDirection:'column'}}>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:15,fontWeight:'900',color:'#fff',marginLeft:5}}>Le Cosmopolitain</Text>
            <Image style={{height:20,width:20,borderRadius:40}} source={require('../../assets/icons/twitter.png')} />
          </View>
          <Text style={{fontSize:15,fontWeight:'900',color:'rgba(255, 255, 255, 0.5)',marginLeft:5}}>@PolytechniqueYaounde</Text>
          </View>
        </View>
        <View style={{backgroundColor:'#000',marginLeft:50}}>
          
          <Pressable onPress={()=>voirCommentaire()} style={{width:300,borderRadius:40,marginBottom:5}}>
            <Text style={{color:'#fff',}}>
            En Afrique, la compréhension des normes d'ingénierie et la qualité des diplômés restent discutables ; ce qui freine le développement de ce secteur. C’est ce qu’indique un récent rapport de l’UNESCO dans lequel l’organisation appelle  à revoir le système d’enseignement supérieur en Afrique.
            </Text>
            </Pressable>
            
          <View style={{flexDirection:'row',marginLeft:10,marginTop:5,marginBottom:10}}>
              <TouchableOpacity>
                <Ionicons name="heart" size={20} color={"#fff"} />
              </TouchableOpacity>

              <Text style={{color:'rgba(255, 255, 255, 0.5)',marginRight:5,marginLeft:5,marginTop:2}}>15</Text>
              
              <TouchableOpacity onPress={()=>voirCommentaire()}>
                <Ionicons name="chatbubbles" size={20} color={"#fff"} />
              </TouchableOpacity>

              <Text style={{color:'rgba(255, 255, 255, 0.5)',marginRight:5,marginLeft:5,marginTop:2}}>15</Text>
          </View>
        </View>
        <View style={{backgroundColor:'rgba(255, 255, 255, 0.5)',height:0.5,width:WIDTH}}></View>
      </View>
  )
}


const VueElle2 = (props) => {

  const [comment,setComment]= useState("")

  const Back = () => {
      props.navigation.goBack()    
    }

return (
  <Modal animationType='slide'
     transparent={true}
      visible={modalCommentaire}
      onRequestClose={() => {
      setModalCommentaire(!modalCommentaire)
   }}
   >
 
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
</Modal>
)
}
const Comm=({com,nomUser,email})=>{
  return(
      <View style={{backgroundColor:'#fff',padding:10}}>
          <View style={{flexDirection:'row',marginTop:5,justifyContent:'space-between'}}>
              <View style={{flexDirection:'row',marginTop:5,}}>
                  <Image style={{height:30,width:30,borderRadius:40}} source={require('../../assets/usericon.png')} />
                  <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:10,fontWeight:'900',color:'#000',marginLeft:5}}> {nomUser.length>10 ? nomUser.slice(0.9)+"...":nomUser} </Text>
        </View>
        <Text style={{fontSize:10,fontWeight:'900',color:'#000',marginLeft:5}}>{email}</Text>
        </View>
              </View>
              <Text style={{color:'red',marginRight:5,marginLeft:5,marginTop:2,fontSize:15,marginRight:10}}>.</Text>
          </View>

          <View style={{backgroundColor:'#fff',marginLeft:50}}>
        
        <View style={{width:300,borderRadius:40,marginBottom:5}}>
          <Text style={{color:'#000',}}> {com} </Text>
          </View>
          
         {/* 
         <Image style={{height:370,width:300,borderRadius:40}} source={require('../../assets/titre/choose.jpg')} />
         */}
        {/*<View style={{width:300,flexDirection:'row',marginLeft:10,marginTop:5,marginBottom:10,justifyContent:'space-between'}}>
            <TouchableOpacity style={{flexDirection:'row'}}>
              <Ionicons name="heart" size={20} color={"#fff"} />
              <Text style={{color:'rgba(255, 255, 255, 0.5)',marginRight:5,marginLeft:5,marginTop:2}}>15</Text>
            </TouchableOpacity>

            
            <TouchableOpacity style={{flexDirection:'row'}}>
              <Ionicons name="chatbubbles" size={20} color={"#fff"} />
            <Text style={{color:'rgba(255, 255, 255, 0.5)',marginRight:5,marginLeft:5,marginTop:2}}>15</Text>
            </TouchableOpacity>

        </View>*/}
      </View>
      <View style={{backgroundColor:'rgba(255, 255, 255, 0.5)',height:0.5,width:WIDTH}}></View>

      </View>
  )
}
const StatutWrapper = ({modalStatut,onClose,statutdata2,stat})=>{
  const [dat,setDat]=useState()
  const [current,setCurrent]=useState({data:stat[0],index:0})
  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(current.index===stat.length-1){return onClose(true)}
      setCurrent({
        ...current,
        index:current.index-1,
        data:stat[current.index-1]
      })
    },1000)
    return clearTimeout(timer)
  },[current])
  return(
    <Modal animationType='fade' visible={modalStatut}>
      <SafeAreaView style={{height:HEIGHT,width:WIDTH,backgroundColor:'#222',}}>
      <View style={{flexDirection:'row',width:'100%',marginTop:11,}}>
     
      {
        stat.map((data,index)=>          
        <View key={index} style={{flex:1,backgroundColor:'#bbbb',height:2,marginHorizontal:2,width:10}}></View>
        )
      }
        
        </View>

        <View style={{backgroundColor:'#222',flex:1}}>
          <Image 
          source={{uri:current.data.img}}
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
            data:stat[current.index-1]
          })
        }} style={{position:'absolute',width:WIDTH/2,height:HEIGHT*0.9,bottom:0,}}>

        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{
          if (current.index===stat.length-1){return onClose(true)}
          setCurrent({
            ...current, 
            index:current.index+1,
            data:stat[current.index+1]
          })
        }} style={{position:'absolute',width:WIDTH/2,height:HEIGHT*0.9,bottom:0,right:0,}}>

        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  )
}

const Annonces = ({setModalAnnonces,modalAnnonces,text,image,titre,lienVideo,setLienVideoA,lienVideoA,setTextA,textA,titrea,setTitre,gifAcceuil,setGifAcceuil})=>{
   //la webview
   const webviewRef = React.useRef(null);
   function webViewgoback() {
     if (webviewRef.current) webviewRef.current.goBack();
   }

   function afficherAnnonce(){
    setTitre("")
    setGifAcceuil("")
    setTextA("")
    setLienVideoA("")
    setModalAnnonces(false)
 }
 const [nomInscrit,setNomInscrit]=useState('')
 const [telInscrit,setTelInscrit]=useState(0)
  return(
    <Modal animationType='slide'
    // transparent={true}
      visible={modalAnnonces}
      style={{backgroundColor:'#000'}}
      onRequestClose={() => {
        setModalAnnonces(!modalAnnonces)
   }}
   >
    <ScrollView style={{padding:17}}>
    <TouchableOpacity onPress={()=>afficherAnnonce()} style={{marginTop:45,backgroundColor:'rgb(249, 180, 45)',height:25,width:40,borderRadius:30,marginBottom:10}}>
        <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center',color:'#fff',marginBottom:5}}>{'<'}</Text>
    </TouchableOpacity>
    <WebView
      style={{width:WIDTH*0.8,height:300,borderRadius:20,backgroundColor:'red',padding:10,alignSelf:'center'}}
      startInLoadingState={true}
      ref={webviewRef}
      source={{uri:lienVideoA}} />
      
      <Text style={{fontSize:18,fontWeight:'bold',textAlign:'center',marginTop:18}}>{titrea}1</Text>
      <Text style={{padding:25}}>{textA}</Text>
      <Text style={{textAlign:'center',fontWeight:'bold'}}>Inscris-toi</Text>
      
      <TextInput
        style={{height: 40,margin: 12,borderWidth: 1,padding: 10,width:WIDTH*0.8,alignSelf:'center',borderRadius:20}}
        onChangeText={setNomInscrit}
        value={nomInscrit}
        placeholderTextColor='#000'
        placeholder="nom"
        //keyboardType="numeric"
        />
        <TextInput
        style={{height: 40,margin: 12,borderWidth: 1,padding: 10,width:WIDTH*0.8,alignSelf:'center',borderRadius:20}}
        onChangeText={setNomInscrit}
        value={nomInscrit}
        placeholderTextColor='#000'
        placeholder="matricule"
        //keyboardType="numeric"
        />
        <TextInput
        style={{height: 40,margin: 12,borderWidth: 1,padding: 10,width:WIDTH*0.8,alignSelf:'center',borderRadius:20}}
        onChangeText={setNomInscrit}
        value={telInscrit}
        placeholderTextColor='#000'
        placeholder="telephone"
        keyboardType="numeric"
        />
      <Image source={{uri:gifAcceuil}} style={{height:250,width:WIDTH*0.8,backgroundColor:'#000',margin:10,alignSelf:'center',borderRadius:20,marginBottom:70}} />

    </ScrollView>
   </Modal>
  )
}
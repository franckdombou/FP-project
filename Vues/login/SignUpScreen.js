import { View, Text, TextInput, StyleSheet,Pressable,TouchableOpacity, Alert,ScrollView,Dimensions,Button,Image, SafeAreaView, ImageBackground, Modal,ActivityIndicator} from 'react-native'
import React,{useState,useContext,useEffect, useRef} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { doc, updateDoc, arrayUnion, arrayRemove,serverTimestamp,Timestamp  } from "firebase/firestore";


import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged, 
} from "firebase/auth"
import {auth} from '../../config'
import firebase from '../../config'

import { storage } from "../../config";
import {ref , uploadBytes, getDownloadURL,getStorage, uploadBytesResumable} from "firebase/storage"
import {v4} from "uuid"


import {Formik} from 'formik'
import * as Yup from 'yup'



const WIDTH = Dimensions.get('window').width * 1;
const HEIGHT = Dimensions.get('window').height*1

const SignUpScreen = ({navigation}) => {

  const [url, setUrl] = useState(null)
  const [anime,setAnime]=useState(false)
 
 

    const SignUpFormSchema = Yup.object().shape({
      email: Yup.string().email().required(' email  obligatoire'),  
        name: Yup.string().required().min(0, 'An username is required'),
        password: Yup.string()
        .min(8, ({ min }) => `au moins ${min} caracteres`)
        .required('mot de pass obligatoire'),
      })

      //authentification
   
      const signUp =(email,pwd) => createUserWithEmailAndPassword(auth, email, pwd)

      const handleCreateAccount = async (e) => {
             createUserWithEmailAndPassword(auth,e.email, e.password)
             .then((userCredential) =>{
                const user = userCredential.user
                res(e)
                setAnime(true)
                navigation.replace('NavPrincipal')
              }).catch(error =>{
                Alert.alert("email deja utilisé ou incorrect !!!")
              })  
         //     setEmailHigh(e.email)      
}

     

      //fin authentification
      var dt =Timestamp.fromDate(new Date())
       // Add a new User in BiblioUser
       const  res = async (e) =>{
        await firebase.firestore().collection('2023USER').doc(e.email).set({
           nom: e.name,
           email:e.email,
          // matricule: e.matricule,
          // niveau: e.niveau,
          // departement:selectedLanguage,
           tel:e.tel,
           EnCours:[{currentPanier:[]}],
            PrixPanier:0,
            solde:0,
            totalPanier:0,
            userPanier:[],
          // image:url,
          // teste:"",
          // messages: arrayUnion({"recue":"R", "texte": "Bienvenue dans la Bibliotheque de polytechnique yaoundé " ,"heure": dt}),
          // signalMessage:'',
          // tabMessages:[""],
          // etat:'ras',
         //  etat1:'ras',
       
        //   docRecent:[]
        })
      //  setEmailHigh(e.email)
          
       }


       const TwitM = ({img,text})=>{
        return(
            <View style={{}}>
                <Image source={{uri:img}} style={{height:70,width:70,borderRadius:50,alignSelf:'center',margin:15,marginTop:45}} />
            </View>
                       
        )
    }


    //ajouter image 
    const handleSumit =(e)=>{
   
      const imageRef = ref(storage,`photoprofil/${image.name + v4()}`)
      const pdfRef = ref(storage,`files/${image.name}`)
      
      uploadBytes(imageRef, image).then(()=>{
          getDownloadURL(imageRef).then((url)=>{
              setUrl(url)
          })
          .catch((error)=>{
              console.log("error getting the image url")
          })
          setImage(null)
      }).catch((error)=>{
          console.log(error.message)
      })

  //    console.log(image)
   
   }
   //fin ajouter image


       const [hasGalleriePermission, setHasGalleriePermission]= useState(null)
    const [image, setImage]=useState(null)
    const [uploading, setUploading] = useState(false)
    const [image2, setImage2]=useState(null)


// const [changeImage,setChangeImage]=useState(false)
    //ajouter image 2

  //  const [hasGalleriePermission, setHasGalleriePermission]= useState(null)
  //  const [image, setImage]=useState(null)
  //  const [uploading, setUploading] = useState(false)
  //  const [image2, setImage2]=useState(null)

    useEffect(()=>{
        (async ()=>{
            const gallerieStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
            setHasGalleriePermission(gallerieStatus.status === 'granted')
        })()
    }, [])
    const pickImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditting: true,
            aspect:[4,3],
            quality:1
        })
        setChangeImage(true)

        if(!result.cancelled){
            setImage(result.uri)
            setImage2(result.uri)
        }
    }
    if (hasGalleriePermission===false){
        return<Text>No access </Text>
    }


const [changeImage,setChangeImage]=useState(false)
    //ajouter image 2

     async function uploadImage(imageUri) {
      try {
        const response = await fetch(imageUri)
        const blobFile = await response.blob()
    
        const reference = ref(storage,`photoprofil2/${"pp" + v4()}`)
        const result = await uploadBytes(reference, blobFile)
        const url = await getDownloadURL(result.ref)
       // console.log( "voici url",url)
       setUrl(url)
        return url
       
      } catch (err) {
        return Promise.reject(err)
    }
    
  }

  const [selectedValue, setSelectedValue] = useState("java");
  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef();


  return (
    <KeyboardAwareScrollView vertical style={{height:HEIGHT}}>
           <SafeAreaView style={{backgroundColor:'#A0A0A0',height:HEIGHT,width:WIDTH,alignContent:'center',alignItems:'center'}}>
      <Image source={require('../../assets/nike5.gif')} style={{height:HEIGHT*0.35,width:WIDTH,}} />
        <View style={{marginTop:10}}>
      <Formik
        initialValues={{email:'',name:'',matricule:'',niveau:'',tel:'', password:''}}
        onSubmit={values =>{
          setAnime(true)
          handleCreateAccount(values)
        //  res(values)
         
        }}
        validationSchema={SignUpFormSchema}
        validateOnMount={true}
      >
         {({handleChange, handleBlur, handleSubmit, values,errors, isValid}) =>(
          <>

      
      <View style={[styles.inputField,
        {borderColor: values.email.length > 0  ? '#ccc' : '#ccc' ,},
      ]}>
          <TextInput 
            placeholderTextColor='#444'
            placeholder=' email'
            autoCapitalize='none'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoFocus={true}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          
          />
            {errors.email &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
       }
      </View>


      <View style={[styles.inputField,
        {borderColor: values.name.length > 0  ? '#ccc' : '#ccc' ,},
      ]}>
          <TextInput 
            placeholderTextColor='#444'
            placeholder=' nom'
            autoCapitalize='none'
          //  textContentType='name'
            autoFocus={true}

            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          
          />
      </View>


      <View style={[styles.inputField,
        {borderColor: values.tel.length > 0  ? '#ccc' : '#ccc' ,},
      ]}>
          <TextInput 
            placeholderTextColor='#444'
            placeholder='tel'
            autoCapitalize='none'
          // textContentType='tel'
            autoFocus={true}
            keyboardType='numeric'
            onChangeText={handleChange('tel')}
            onBlur={handleBlur('tel')}
            value={values.tel}
          
          />
      </View>


      <View style={[styles.inputField,
      {borderColor: values.password.length > 0 ? '#ccc' : '#ccc' ,},
      ]}>
          <TextInput 
            placeholderTextColor='#444'
            placeholder='mot de pass'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            textContentType='password'
            autoFocus={true}

            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
            {errors.password &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
       }
      </View>

     {/* <TouchableOpacity onPress={()=>pickImage()}>
    {
          changeImage ? 
          <React.Fragment>
             {image2 && <TwitM img={image2} text='new Look' /> }
          </React.Fragment> 
          :
          <Image style={{height:40,width:40,borderRadius:50,alignSelf:'center',marginTop:5}} source={require('../../assets/usericon.png')} />
        }
        <Text style={{textAlign:'center',marginBottom:10}}>ajouter image</Text>
        
    </TouchableOpacity>*/}

      
     

     {/* <Button title='Pick Image' onPress={()=> pickImage()} style={{marginTop:30}} />
      {image2 && <TwitM img={image2} text='new Look' /> } 
      <Button title='handleSumit' onPress={()=> uploadImage(image)} />
      <Button title='handleSumit' onPress={()=> console.log(selectedLanguage)} />
*/}
     

      <Text style={{marginBottom:15}}></Text>




      <TouchableOpacity titleSize={20} style={styles.button(isValid)} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>


      <View style={styles.signUpContainer}>
        <Text>avez-vous deja un compte ?  </Text>
        <TouchableOpacity onPress={()=>navigation.goBack()} >
          <Text style={{color:'#fff'}}>Connectes-toi</Text>
        </TouchableOpacity>
      </View>
      </>
       )}
       </Formik>
       </View>
       </SafeAreaView>
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
</KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper:{
   // margin:WIDTH*0.01,
   marginTop:50,
   height:HEIGHT,
 //  backgroundColor:'#fff'
 alignContent:'center',
 alignSelf:'center',
  },

  inputField:{
    borderRadius:4,
    padding:13,
    backgroundColor:'#FAFAFA',
    marginBottom:15,
    borderColor:'#fff',
    width:WIDTH*0.8,
    alignSelf:'center',
  //  borderBottomColor: '#DC143C',
   // borderBottomWidth: 2,
    
    borderWidth:1,
    justifyContent:'center',
  },

  button:(isValid)=>( {
    backgroundColor: isValid ? '#000': '#ccc' ,
    alignItems:'center',
    justifyContent:'center',
    minHeight:42,
    borderRadius:4,
    width:250,
    alignSelf:'center'
  }),
  buttonText:{
    fontWeight:'600',
    color:'#fff',
    fontSize:20,
  },

  signUpContainer:{
    flexDirection:'row',
    width:'80%',
    justifyContent: 'center',
    marginTop:10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containera: {
   // flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

})


export default SignUpScreen
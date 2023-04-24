import { Alert, Dimensions, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View,Modal,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config'
import firebase from '../../config'
import {Formik} from 'formik'
import * as Yup from 'yup'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

export default function LoginScreen({navigation}) {

    const LoginSchema = Yup.object().shape({
        email:Yup.string().email().required('An email is required'),
        password: Yup.string()
      .min(6, ({ min }) => `au moins ${min} caracteres`)
        .required('mot de pass obligatoire'),
  })

  const [anime,setAnime]=useState(false)


    const handleSignIn= (values)=>{
        signInWithEmailAndPassword(auth,values.email,values.password)
        .then((userCredential)=>{
            const user = userCredential.user
            setAnime(true)
            navigation.replace('NavPrincipal');
        }).catch(error=>{
            Alert.alert('adresse ou mot de pass incorrect')
        })
    }


  return (
    <KeyboardAwareScrollView>
    <SafeAreaView style={{backgroundColor:'#A0A0A0',height:HEIGHT,width:WIDTH,alignContent:'center',alignItems:'center'}}>
      
      <Image source={require('../../assets/nike5.gif')} style={{height:HEIGHT*0.35,width:WIDTH}} />
      
      <Formik  
        initialValues={{email:'',password:''}}
        onSubmit={values=>{
            handleSignIn(values)
        }}
        validationSchema={LoginSchema}
        validateOnMount={true}
      >
        {({handleChange, handleBlur, handleSubmit, values,errors, isValid})=>(
        
        <View style={{alignSelf:'center',marginTop:10}}>
        
        <View style={styles.inputField(isValid)}>
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
      //value={"eben1@gmail.com"}
      />
       {errors.email &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
       }
      </View>


      <View style={styles.inputField(isValid)}>
      <TextInput
        placeholderTextColor='#444'
        placeholder='password'
        autoCapitalize='none'
        autoCorrect={false}
       secureTextEntry={true}
        textContentType=' mot de pass'

        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
       // value={"1234567"}
      />
       {errors.password &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
       }
      </View>

      <TouchableOpacity titleSize={20} style={styles.button(isValid)} onPress= {handleSubmit} disabled={!isValid}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>


      <View style={{flexDirection:'row',marginTop:25,alignSelf:'center'}}>
        <Text>T'es nouveau sur l'appli ? </Text>
        <TouchableOpacity onPress={()=>navigation.push('SignUpScreen')}>
          <Text style={{color:'#fff'}}>Inscris-toi</Text>
        </TouchableOpacity>
      </View>

            </View>
        )}

      </Formik>
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
     marginTop:200,
     height:HEIGHT,
   //  backgroundColor:'#fff'
   alignContent:'center',
   alignSelf:'center',
   
    },
  
    inputField:(isValid) => ({
      borderRadius:4,
      padding:12,
      backgroundColor:'#FAFAFA',
    // backgroundColor:'#C32AA3',
      marginBottom:10,
      borderColor:'#fff',
      borderBottomColor: isValid ?  '#000': '#ccc' ,
      borderBottomWidth: 2,
      width:WIDTH*0.7,
      borderWidth:1,
      justifyContent:'center'
    }),
    button:(isValid) =>({
      backgroundColor: isValid ? '#000': '#ccc' ,
      alignItems:'center',
      justifyContent:'center',
      minHeight:42,
      width:WIDTH*0.7,
      borderRadius:4,
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    }),
    buttonText:{
      fontWeight:'600',
      color:'#fff',
      fontSize:20,
    },
  
    signUpContainer:{
      flexDirection:'row',
      width:'100%',
      justifyContent: 'center',
      marginTop:20,
    },
    logoContainer:{
      alignItems:'center',
      marginTop:HEIGHT*0.099,
    alignSelf:'center'
     
   },
  
  })
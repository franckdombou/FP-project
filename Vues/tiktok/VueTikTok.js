import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import VideoItem from './VideoItem'
import { data } from './data'
import ElleVueFirst from '../Elle/ElleVueFirst'
import PintNav from '../../navigation/PintNav'
const BottomTab = createBottomTabNavigator()

const HomeScreen = ()=>{
    return <VideoItem data={data[0]} />
}

const VueTikTok = () => {
  return (
    <HomeScreen />
  
  )
}

export default VueTikTok

const styles = StyleSheet.create({
    bottomTabIcon:{
        width:10,
        height:10,
        tintColor:'grey'
    },
    bottomTabIconFocused:{
        tintColor:"white"
    }
})

{ /*<NavigationContainer>
        <BottomTab.Navigator screenOptions={{
            tabBarStyle:{backgroundColor:'#000'},
            headerShown:false,
            tabBarActiveTintColor:'white',
        }}>
            <BottomTab.Screen 
                name='Cosmospolitain1' 
                component={HomeScreen} 
                options={{
                tabBarIcon:({focused})=>{
                    <Image 
                        source={require('../../assets/icons/home.png')} 
                        style={[
                            styles.bottomTabIcon,
                            focused && styles.bottomTabIconFocused,
                        ]}
                    />
                },
                //
                headerTitle: () => { // App Logo
                <SafeAreaView>
                 <View style={{flexDirection:'row',justifyContent:'space-around',position:'relative',height:'100%',width:WIDTH}}>
                   <TouchableOpacity>
                    <Image
                   style={{ width: 35, height: 35,borderRadius:50,position:'relative',marginRight:35, }}
                   source={require('../../assets/icons/home.png')}
                   resizeMode='cover'
                 />
                 </TouchableOpacity>
                 <Text style={{color:'#000',fontWeight:'bold',fontSize:25,fontFamily:'Georgia',marginLeft:55,marginRight:25}}>E N S P Y</Text>
                 
                 <TouchableOpacity>
                 <Image
                   style={{ width: 35, height: 35,borderRadius:50,position:'relative',resizeMode:'center',opacity:0.5 }}
                   source={require('../../assets/icons/home.png')}
                   resizeMode='cover'
                 />
                 </TouchableOpacity>
           
                 <TouchableOpacity>
                 <Image
                   style={{ width: 35, height: 35,borderRadius:50,position:'relative',marginRight:15,resizeMode:'center',opacity:0.5 }}
                   source={require('../../assets/icons/home.png')}
                   resizeMode='cover'
                 />
                 </TouchableOpacity>
                 </View>
                 
                 </SafeAreaView>
                }

                //
            }} />

            <BottomTab.Screen 
                name='Pinterest' 
                component={PintNav} 
                options={{
                tabBarIcon:({focused})=>{
                    <Image 
                        source={require('../../assets/nike/nike6.jpeg')} 
                        style={[
                            styles.bottomTabIcon,
                            focused && styles.bottomTabIconFocused,
                        ]}
                    />
                }
            }} />
        </BottomTab.Navigator>
        </NavigationContainer>*/}
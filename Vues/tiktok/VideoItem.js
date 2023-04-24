import { StyleSheet, Text, View,Image, Animated, Easing } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Video, AVPlaybackStatus } from 'expo-av';

const uri1='https://firebasestorage.googleapis.com/v0/b/test-b1637.appspot.com/o/GC%20desc.mp4?alt=media&token=7ca75ebe-1000-4910-a3dc-8d20de54baef'
const uri = 'https://firebasestorage.googleapis.com/v0/b/test-b1637.appspot.com/o/FP2023%2FNever%20Settle%2C%20Never%20Done%20_%20Nike.mp4?alt=media&token=f5c53864-6382-441e-a041-625d34919c5c'

const VideoItem = ({data}) => {

    const {uri,caption,channelName, musicName, likes, comments, avatarUri}= data

    const discAnimatedValue = useRef(new Animated.Value(0)).current
    const musicNoteAnimatedValue = useRef(new Animated.Value(0)).current

    const musicNoteAnimation ={
        transform:[
            {
                rotate:musicNoteAnimatedValue.interpolate({
                    inputRange:[0,1],
                    outputRange:['0deg', '45deg']
                }),
            },
            {
                translateX:musicNoteAnimatedValue.interpolate({
                    inputRange:[0,1],
                    outputRange:[8, -16]
                }),
            },
            {
                translateY:musicNoteAnimatedValue.interpolate({
                    inputRange:[0,1],
                    outputRange:[0, -32]
                }),
            },
        ],
    }
    
    
    const discAnimation ={
        transform:[
            {
                rotate:discAnimatedValue.interpolate({
                    inputRange:[0,1],
                    outputRange:['0deg', '360deg']
                }),
            },
        ],
    }

    useEffect(()=>{
       Animated.loop(
        Animated.timing(discAnimatedValue,{
            toValue:1,
            duration:3000,
            easing:Easing.linear,
            useNativeDriver:false
        })
       ).start()
    }, [discAnimatedValue])

  return (
    <View style={styles.container}>
        <Video shouldPlay  source={{uri}} style={styles.video} resizeMode='cover' />
        <View style={styles.bottomSection}>
            <View style={styles.bottomLeftSection}>
                <Text style={styles.channelName}>{channelName}</Text>
                <Text style={styles.caption}>{caption}</Text>
                <View style={styles.musicNameContainer}>
                    <Image 
                        source={require('../../assets/nike1.jpg')}
                        style={styles.musicNameIcon}
                    />
                    <Text style={styles.musicName}>{musicName}</Text>
                </View>
            </View>
            <View style={styles.bottomRightSection}>
                <Animated.Image 
                    source={require('../../assets/icons/home.png')}
                    style={styles.floatingMusicNote}
                />
                <Animated.Image 
                    source={require('../../assets/icons/home.png')}
                    style={styles.floatingMusicNote}
                />
                <Animated.Image 
                    source={require('../../assets/icons/home.png')}
                    style={[styles.musicDics,discAnimation]}
                />
            </View>
        </View>

        <View style={styles.verticalBar}>

            <View style={[styles.verticalBarItem, styles.avatarContainer]}>
                <Image 
                    style={styles.verticalBarIcon}
                    source={{uri:avatarUri}}
                />
                <View style={styles.followButton}>
                    <Image 
                        source={require('../../assets/icon.png')} 
                        style={styles.followIcon}
                    />
                </View>
            </View>

            <View style={styles.verticalBarItem}>
                <Image 
                    style={styles.verticalBarIcon}
                    source={require('../../assets/icons/home.png')}
                />
                <Text style={styles.verticalBarText}>{likes}</Text>
            </View>

            <View style={styles.verticalBarItem}>
                <Image 
                    style={styles.verticalBarIcon}
                    source={require('../../assets/icons/home.png')}
                />
                <Text style={styles.verticalBarText}>{comments}</Text>
            </View>

            <View style={styles.verticalBarItem}>
                <Image 
                    style={styles.verticalBarIcon}
                    source={require('../../assets/icons/home.png')}
                />
                <Text style={styles.verticalBarText}>Shares</Text>
            </View>
        </View>
    </View>
  )
}

export default VideoItem

const styles = StyleSheet.create({
    video:{
        position:'absolute',
        width:'100%',
        height:'100%'
    },
    container:{
        flex:1
    },
    bottomSection:{
        position:'absolute',
        flexDirection:'row',
        height:100,
        bottom:0,
        width:'100%',
        paddingHorizontal:8,
        paddingBottom:16
    },
    bottomLeftSection:{
        flex:4,
    },
    bottomRightSection:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    channelName:{
        color:'white',
        fontWeight:'bold'
    },
    caption:{
        color:'white',
        marginVertical:8
    },
    musicNameContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    musicNameIcon:{
        width:12,
        height:12,
        marginRight:8
    },
    musicName:{
        color:'white'
    },
    musicDics:{
        width:40,
        height:40
    },
    verticalBar:{
        position:'absolute',
        right:8,
        bottom:72,
    },
    verticalBarItem:{
        marginBottom:24,
        alignItems:'center'
    },
    verticalBarIcon:{
        width:32,
        height:32
    },
    verticalBarText:{
        color:'white',
        marginTop:4
    },
    avatarContainer:{
        marginBottom:48
    },
    avatar:{
        width:48,
        height:48,
        borderRadius:24
    },
    followButton:{
        position:'absolute',
        bottom:-8,
        width:16,
        height:16
    },
    followIcon:{
        width:21,
        height:21,
    },
    floatingMusicNote:{
        position:'absolute',
        right:40,
        bottom:16,
        width:16,
        height:16,
        tintColor:'white'
    }


})
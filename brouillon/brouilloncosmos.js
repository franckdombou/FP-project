<Tab.Screen 
        name="Cosmos" 
        component={PintNav}
        options={{ 
            tabBarBadge: 1,
         headerTitle: () => ( // App Logo
         
         <SafeAreaView style={{flexDirection:'column'}}>
            
          <SafeAreaView style={{flexDirection:'row',height:35,width:WIDTH*0.9,justifyContent:'space-evenly',margin:10}}>
            <TouchableOpacity>
             <Image
            style={{ width: 35, height: 35,borderRadius:50,position:'relative',marginRight:1, }}
            source={require('../assets/icons/logouser.png')}
            resizeMode='cover'
          />
          </TouchableOpacity>
          <Text style={{color:'#000',fontWeight:'bold',fontSize:22,fontFamily:'Georgia',}}>Le Cosmopolitain</Text>
          
          <TouchableOpacity>
          <Image
            style={{ width: 35, height: 35,borderRadius:50,position:'relative',resizeMode:'center',opacity:0.5 }}
            source={require('../assets/icons/home.png')}
            resizeMode='cover'
          />
          </TouchableOpacity>
    
          <TouchableOpacity>
          <Image
            style={{ width: 35, height: 35,borderRadius:50,position:'relative',resizeMode:'center',opacity:0.5 }}
            source={require('../assets/icons/home.png')}
            resizeMode='cover'
          />
          </TouchableOpacity>
          
          </SafeAreaView>
          <View style={{width:WIDTH,borderStartWidth:10,backgroundColor: 'black',height:1}}></View>

        <View style={{backgroundColor:'white',width:WIDTH*0.9,flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity>
                <Text style={{fontWeight:'bold'}}>NEWS</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontWeight:'bold'}}>CULTURE</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontWeight:'bold'}}>SOCIETE</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontWeight:'bold'}}>COURS</Text>
            </TouchableOpacity>
          </View>

          </SafeAreaView>
          
         
        ),
        }}
     />
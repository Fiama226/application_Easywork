import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';



  const Profile = () =>{

    const data =[
      {id:1,icons:"space-dasboard",title:"Tableau de bord"},
      {id:2,icons:"",title:"mes services"},
      {id:3,icons:"",title:"mon portefeuille"}

    ] 
  
  return(
  <View style={{width:"100%",height:"100%"}}> 
  
  <View style={{alignSelf:"center",width:"100%",backgroundColor:"#0076ac",flexDirection:"row",alignItems:'center'}}> 

      <Image source={require('../../../publics/Profile.jpg')} style={{width:120,height:120,borderRadius:"50%",margin:20}}  contentFit="fill" />
  <View >
  <Text style={{fontWeight:"bold",fontSize:18}}>Inoussa Zoungrana</Text>
  <Text> membre depuis 2025</Text>
  </View>
  <Ionicons name="notifications" size={24} color="black"style={{position:"absolute",right:10}} />


  </View> 

  <View>
  <Text style={{fontSize:32,marginBottom:12,marginTop:12,paddingLeft:10,fontWeight:"bold"}}>Mon compte</Text>
  <View  style={styles.row}> 
          <View style={styles.firstColumn}><MaterialIcons name="space-dashboard" size={24} color="black" /></View>
          <View><Text style={{fontSize:20}}>Tableau de bord</Text></View>
          <View style={styles.thirdColumn}><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></View>       
          
  </View >
  <View  style={styles.row}> 
        <View style={styles.firstColumn}><FontAwesome5 name="toolbox" size={24} color="black" /></View>
            <View><Text style={{fontSize:20}}>Mes services</Text></View>
            <View style={styles.thirdColumn}><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></View>       
          
  </View >
  <View  style={styles.row}> 
  <View style={styles.firstColumn}><FontAwesome5 name="wallet" size={24} color="black" /></View>       
  <View><Text style={{fontSize:20}}>Mon porte feuille</Text></View>
  <View style={styles.thirdColumn}><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></View>       
      
  </View >
  </View>



  <View>
  <Text style={{fontSize:32,marginBottom:12,marginTop:12,paddingLeft:10,fontWeight:"bold"}}>Parametre et confidentialite</Text>
  <View  style={styles.row}> 
  <View style={styles.firstColumn}><MaterialIcons name="settings" size={24} color="black" /></View>       
  <View><Text >Parametres</Text></View>
  <View style={styles.thirdColumn}><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></View>       

          
  </View >
  <View  style={styles.row}> 
  <View style={styles.firstColumn}>
    <AntDesign name="profile" size={24} color="black" /></View>  
    <View><Text>centre de confidentialite</Text></View>
    <View style={styles.thirdColumn}><MaterialIcons name="keyboard-arrow-right" size={24} color="black" /></View>       

           
          
  </View >

  </View>

  
  </View> );
  }

export default Profile

const styles= StyleSheet.create({
  row: {
    display:"flex",
    flexDirection:"row",
    borderBottomWidth:2,
    borderBottomColor:"#393e46",
    width:"100%",
    alignItems:"center",
  paddingBottom:10,
paddingTop:10},
  
  firstColumn:{
    marginRight:10,
    marginLeft:10

  },
  secondColumn:{


  },
  thirdColumn:{
    right:10,
    position:"absolute",


  }
  
  
  
  },
 )
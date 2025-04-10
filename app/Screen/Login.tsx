import { StyleSheet, Text, View } from 'react-native'
import { PaperProvider,Icon, Button,TextInput,Checkbox } from 'react-native-paper';
import { router } from 'expo-router';


import { Image } from 'expo-image';
import { Formik } from 'formik';
import React from 'react'

const Login =()=>{

    const [checked, setChecked] = React.useState(false);
  
    return(
      <View style={{backgroundColor:"#2596be"}}>
      <View style={{width:"100%",height:"100%",backgroundColor:"#EDEAE0",marginTop:"15%",borderTopRightRadius:40,borderTopLeftRadius:40}}>
    <Text style={{textAlign:"center",fontWeight:"bold",fontSize:40,marginTop:20,borderBottomWidth:2}}> se connecter </Text>

     <Image source={require('../../publics/icons/Brand_logo.png')} style={{width:150,height:150,alignSelf:"center",paddingBottom:0,marginTop:0}} contentFit="contain" />   
  
     <Text style={{alignSelf:"center",fontWeight:"bold"}}>Bienvenue parmis nous !</Text>
  
  <Formik
       initialValues={{ email: '' , password: ''}}
       onSubmit={values => console.log(values)}
     
     >
       {({ handleChange, handleBlur, handleSubmit, values }) => (
         <View   style={{width:"75%", alignSelf:"center"}}>
           <TextInput
             onChangeText={handleChange('email')}
             onBlur={handleBlur('email')}
             value={values.email}
             placeholder="Email ou nom d'utilisateur"
             left={<TextInput.Icon icon="account" />}
             mode="outlined"
             style={{borderTopLeftRadius:10,borderTopRightRadius:10, borderBottomRightRadius:10,borderBottomLeftRadius:10, marginBottom:10, marginTop:10, borderBottomWidth:0}}           
           />
            <TextInput
             onChangeText={handleChange('password')}
             onBlur={handleBlur('password')}
             value={values.password}
             placeholder="Mot de passe"
             secureTextEntry={true}
             left={<TextInput.Icon icon="lock" />}
             right={<TextInput.Icon icon="eye" />}
             mode="outlined"
             style={{borderTopLeftRadius:10,borderTopRightRadius:10, borderBottomRightRadius:10,borderBottomLeftRadius:10, marginBottom:10, marginTop:10, borderBottomWidth:0}} 
  
  
             
           />
           <View style={{alignItems:"center", flexDirection:"row",width:"100%"}}>
            <Checkbox
            color='#2596be'
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Text style={{fontSize:12,color:"#2596be"}} >Remember me</Text>
      
         
            <Text  style={{fontSize:12,color:"#2596be",marginLeft:25,width:"100%"}}>mot de passe oublié ?</Text>
  
  
           </View>
           <Button mode="contained" onPress={() => router.navigate('/Mainpage')}style={{width:"70%",alignSelf:"center",marginTop:20}}>
            <Text> Se connecter</Text>
    </Button>

 
  
    
    
         </View>
       )}
     </Formik>


  

     
            <Text    onPress={() => router.navigate('/Screen/Register')}style={{textAlign:"right",width:"75%", marginTop:15, marginBottom:15}}> creer un compte</Text>
            </View>
 
     </View>    
         
  

         
    )
  }

export default Login

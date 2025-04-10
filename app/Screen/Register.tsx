import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Formik } from 'formik';
import {TextInput,Checkbox } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native'




const Register =()=> {

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  
    return (
      <View style={{width:"100%",height:"100%",backgroundColor:"#0076ac"}}>
        <View style={{width:"100%",borderTopRightRadius:40,borderTopLeftRadius:40,backgroundColor:"white",marginTop:"15%",paddingBottom:15,borderBottomWidth:5}}>
        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:40,marginTop:20}}>register here </Text>
        </View>

         <Formik
               initialValues={{ Name: '' , Surname: '',DOB:'',email:'',PhoneNumber:'', }}
               onSubmit={values => console.log(values)}
             
             >
               {({ handleChange, handleBlur, handleSubmit, values }) => (
                 <View   style={{width:"75%", alignSelf:"center",}}>
                   <TextInput
                     onChangeText={handleChange('Name')}
                     onBlur={handleBlur('Name')}
                     value={values.Name}
                     placeholder="Entrez votre nom de famille"
                     mode="outlined"
                     style={{borderTopLeftRadius:10,borderTopRightRadius:10, borderBottomRightRadius:10,borderBottomLeftRadius:10, marginBottom:20, marginTop:20, borderBottomWidth:0}}           
                   />
                    <TextInput
                     onChangeText={handleChange('Surname')}
                     onBlur={handleBlur('Surname')}
                     mode="outlined"
                     value={values.Surname}
                     placeholder="entrez votre prenom"
                     style={{borderTopLeftRadius:10,borderTopRightRadius:10, borderBottomRightRadius:10,borderBottomLeftRadius:10, marginBottom:20, marginTop:20, borderBottomWidth:0}} 
          
          
                     
                   />
                               <TextInput
                                                    mode="outlined"

                     onChangeText={handleChange('email')}
                     onBlur={handleBlur('email')}
                     value={values.email}
                     placeholder="entrez votre Adresse E-mail"
                     style={{borderTopLeftRadius:10,borderTopRightRadius:10, borderBottomRightRadius:10,borderBottomLeftRadius:10, marginBottom:20, marginTop:20, borderBottomWidth:0}} 
                    
                   />
                                                  <TextInput
                                                                       mode="outlined"

                                                  keyboardType="number-pad"
                     onChangeText={handleChange('PhoneNumber')}
                     onBlur={handleBlur('PhoneNumber')}
                     value={values.PhoneNumber}
                     placeholder="entrez votre numero de telephone"
                     style={{borderTopLeftRadius:10,borderTopRightRadius:10, borderBottomRightRadius:10,borderBottomLeftRadius:10, marginBottom:20, marginTop:20, borderBottomWidth:0}} 
                    
                   />
  
          
                   <Button title='Suivant' onPress={() => console.log('Pressed')}/>

          
          
      
            
                 </View>
               )}
             </Formik>
        
        
      </View>
    )
  }

export default Register

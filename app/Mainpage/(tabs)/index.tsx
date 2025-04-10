import React from 'react'
import { Searchbar } from 'react-native-paper';
import {Picker} from "@react-native-picker/picker";
import { PaperProvider,Icon, Button,TextInput,Checkbox } from 'react-native-paper';
import { Text, View,FlatList,SectionList, ScrollView} from "react-native";
import { Image } from 'expo-image';

const PickCityComponent=()=>{
    const [Enable , setEnable]  = React.useState("choisir sa ville");
    const cities=[{"City":"Ouagadougou"},{"City":"Bobo-Dioulasso"},{"City":"Koudougou"},{"City":"Banfora"},{"City":"Ouahigouya"},{"City":"Kaya"},{"City":"Tenkodogo"},{"City":"Fada N'gourma"},{"City":"Dédougou"},{"City":"Houndé"}]
  
    return (
      <View>
         <Picker
            selectedValue={Enable}
            style={{ height: 50, width: 250 }}
            mode={"dialog"}
            onValueChange={(itemValue) => setEnable(itemValue)}
          >
            <Picker.Item label="Courses" value="courses" />
  
  
  <FlatList
          data={cities}
          renderItem={({item}) => <Picker.Item key={item.City} label={item.City} value={item.City} />}
          keyExtractor={item => item.City}
        />
          </Picker>
        
      </View>
    )
  }
  
  
  const AcceuileComponent = () =>{
  
    const [searchQuery, setSearchQuery] = React.useState('');
    const data_services_offered=[
      {Title:"Batiments et maisons",id:1,icon:"office-building-cog"},
      {Title:"Reparation d'engins",id:2,icon:"motorbike"},
      {Title:"Reparations electroniques",id:3,icon:"cellphone-cog"}
    ]
  
  
   const data=[
    {title:"Batiments & Maisons",
     id:"1",
     linkTo:"",
     displayed_components_data:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8}]
    },
    {title:"Reparations d'engins",
      id:"2",
      linkTo:"",
      displayed_components_data:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8}]
     },
     {title:"Reparations electroniques",
      id:"3",
      linkTo:"",
      displayed_components_data:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8}]
     }
   ]
  
  
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{backgroundColor:"#2596be",width:"100%",justifyContent:"center"}}>
        <View style={{width:"80%",display:"flex",flexDirection:"row",margin:15,alignSelf:"center"}} >
         <Image source={require('./Brand_logo.png')} style={{width:100,height:50}} contentFit="contain" />
         <View style={{right:1,position:"absolute"}}>
        <Icon source="bell"  size={46}/> 
        </View>
        </View>
  
  <Searchbar
        placeholder="Rechercher un service"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={{width:"90%",alignSelf:"center",margin:15}}
        mode="bar"
        
      />
     
      </View>
  
      <View>
      <FlatList 
      style={{padding:15}}
      
        horizontal={true}
        data={data_services_offered}
        
        renderItem={({item}) => <Button key={item.id} icon={item.icon}> <Text >{item.Title}</Text></Button >}
        
        />
  
  
      </View>
  
      <FlatList
          data={data}
          keyExtractor={item => item.id} 
          renderItem={({item}) =>{
            return (
              <View>
                <View style={{display:"flex", flexDirection:"row",margin:10}}> <View style={{width:"70%"}}> <Text style={{fontWeight:"bold",textAlign:"left",fontSize:20}}>{item.title}</Text></View>  <View style={{width:"30%"}}><Text style={{textAlign:"right",alignSelf:"flex-end"}}> voir plus</Text></View></View>
                <ScrollView
                showsHorizontalScrollIndicator={true}
                horizontal={true}
                alwaysBounceHorizontal={true}
  
                >
  
                  {item.displayed_components_data.map(x=><View style={{margin:1,width:175,height:175,backgroundColor:"#2596be",borderRadius:20,alignContent:"center",justifyContent:"center"}}> <Text style={{alignSelf:"center"}}>Item {x.id}</Text></View >)}
  
  
  
                </ScrollView>
              </View>
            )
            
  
  
          }
          }
        />
  
      </ScrollView>
    )
  } 
  


const HomePage = () => {
  return (
    <>
    <PaperProvider> 
      <AcceuileComponent/>


    </PaperProvider>
  



  </>
  )
}


  export default HomePage

import { Text, View,FlatList,SectionList, ScrollView } from "react-native";
import { Image } from 'expo-image';

import React from "react";
import { PaperProvider,Icon, Button } from 'react-native-paper';

import { BottomNavigation } from 'react-native-paper';

import AcceuilleIcon from "./iconscomponents/AcceuilleIcon";
import SearchIcon from "./iconscomponents/SearchIcon";
import { Searchbar } from 'react-native-paper';
import {Picker} from "@react-native-picker/picker";



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
       <View style={{alignSelf:"center",width:"50%"}}  ><Image source={require('../publics/icons/Brand_logo.png')} style={{width:55,height:55}} contentFit="contain" /></View> 
        <View style={{alignSelf:"center",width:"50%",left:130}}> <Icon source="bell" size={16}/> </View>
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

const Rechercher = () =><View style={{width:"100%",height:"100%",justifyContent:"center"}}>  <Text style={{textAlign:"center",textAlignVertical:"center",fontSize:20,fontWeight:"bold"}}>Hi👋☺️ , i am the Rechercher page  </Text></View>;

const Demander = () => <View style={{width:"100%",height:"100%",justifyContent:"center"}}><Text style={{textAlign:"center",textAlignVertical:"center",fontSize:20,fontWeight:"bold"}}>Hi👋☺️ , i am the Demander page  </Text></View>;

const Profile = () =><View style={{width:"100%",height:"100%",justifyContent:"center"}}> <Text style={{textAlign:"center",textAlignVertical:"center",fontSize:20,fontWeight:"bold"}}>Hi👋☺️ , i am the Profile page  </Text></View>;



export default function Index() {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Acceuil', title: 'Acceuil', focusedIcon: 'home-circle', unfocusedIcon: 'home-circle'},
    { key: 'Rechercher', title: 'Rechercher', focusedIcon: 'card-search-outline' },
    { key: 'Demander', title: 'Demander', focusedIcon: 'plus-circle' },
    { key: 'Profile', title: 'Profile', focusedIcon: 'account-circle-outline', unfocusedIcon: 'account-circle-outline' },
  ]);




  const renderScene = BottomNavigation.SceneMap({
    Acceuil: AcceuileComponent,
    Rechercher: Rechercher,
    Demander: Demander,
    Profile: Profile,
  });
  return (
    <PaperProvider> 
  <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />

    </PaperProvider>
  );
}

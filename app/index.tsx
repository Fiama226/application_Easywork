import { Text, View,FlatList } from "react-native";
import { Pressable } from "react-native";
import { useRouter } from 'expo-router';

import React from "react";
import { Image } from 'expo-image';
import { PaperProvider, Button,} from 'react-native-paper';

import Animated, {useSharedValue, useAnimatedStyle, withSpring,FadeIn, FadeOut } from 'react-native-reanimated';

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





const WelcomePage=()=>{
    const router = useRouter();
  const [visible, setVisible] = React.useState(false);
  const [disable, setDisable] = React.useState (false);
  const translateX = useSharedValue<number>(0);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translateX.value) }],
  }));
  const handlePress = () => {
    console.log("hi, i am pressed")
    translateX.value -= 100;
    setVisible(!visible);
    setDisable(!disable);
  };

  return(

  <Pressable  style={{width:"100%",height:"100%",backgroundColor:"#0076ac",justifyContent:"center",alignContent:"center"}} onPress={handlePress} disabled={disable} >
    <Animated.View style={[{height: "70%",
    alignSelf:"center",
    width: "70%",
    borderRadius: 20,
    marginVertical: 50,}, animatedStyles]}>
     <Image source={require('../publics/icons/Brand_logo.png')} style={{width:"100%",height:"100%",alignSelf:"center",paddingBottom:0}} contentFit="contain" />
     </Animated.View>   

     {visible && (
        <Animated.View
        style={{width:"100%",height:"25%",marginBottom:200}}
          entering={FadeIn.duration(800)}
          exiting={FadeOut.duration(300)}
        >
          <Text style={{textAlign:"center",marginTop:20,marginBottom:20}}>
            Plomberie , maconnerie et il est la Plomberie,macconnerie,menuiserie fort Plomberie, maconnerie,
          </Text>
          <Button style={{borderRadius:10,width:"75%",alignSelf:"center",backgroundColor:"white"}} mode="contained"  onPress={() =>{ router.navigate('./Screen/Login')
                console.log("hi, i am pressed")}

          }><Text style={{color:"black",fontWeight:"bold"}}>Commencer</Text></Button>
        </Animated.View>
      )}     
  </Pressable>
  )
}



export default function Index() {

  return (
    <PaperProvider> 
<WelcomePage />
    </PaperProvider>
  );
}

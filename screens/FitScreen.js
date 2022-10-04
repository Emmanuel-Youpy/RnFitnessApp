import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';

const FitScreen = () => {
    const [index, setIndex] = useState(0)
    const route=useRoute();
    // console.log(route.params)
    const navigation =useNavigation();
    const excersise = route.params.excersises
    const current = excersise[index]
  return (
    <SafeAreaView>
        <Image source={{uri:current.image}} style={{width:'100%', height:370}}/>
        <Text style={{marginLeft:'auto', fontWeight:'bold',marginRight: 'auto', marginTop:30, fontSize:30}}>
            {current.name}
        </Text>
        <Text style={{marginLeft:'auto', fontWeight:'300',marginRight: 'auto', marginTop:30, fontSize:30}}>
            x{current.sets}
        </Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Rest')} style={{backgroundColor:'blue', marginLeft:'auto', marginRight:'auto', marginTop:30, borderRadius:20, padding:10, width:150}}>
          <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20, color:'white'}}>DONE</Text>
          </TouchableOpacity>
    </SafeAreaView>
  )
}

export default FitScreen
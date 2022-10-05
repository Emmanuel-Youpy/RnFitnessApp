import { View, Text, SafeAreaView, Image, TouchableOpacity, Pressable } from 'react-native'
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
        {index + 1 >= excersise.length ? (
          <TouchableOpacity onPress={()=> {
            navigation.navigate('Home')
  
            setTimeout(()=>{ 
              setIndex(index+1)
            })
          }} style={{backgroundColor:'blue', marginLeft:'auto', marginRight:'auto', marginTop:30, borderRadius:20, padding:10, width:150}}>
            <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20, color:'white'}}>DONE</Text>
            </TouchableOpacity>

        ):(
          <TouchableOpacity onPress={()=> {
            navigation.navigate('Rest')
  
            setTimeout(()=>{
              setIndex(index+1)
            })
          }} style={{backgroundColor:'blue', marginLeft:'auto', marginRight:'auto', marginTop:30, borderRadius:20, padding:10, width:150}}>
            <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20, color:'white'}}>DONE</Text>
            </TouchableOpacity>

        )}
        
          <View style={{flexDirection:'row', alignItems:'center', marginLeft:'auto', marginRight:'auto', marginTop:50}}>
          <Pressable disabled={index ===0} onPress={()=> {
            navigation.navigate('Rest')

            setTimeout(()=>{
                          setIndex(index-1)
                        }, 1000)
          }}style={{backgroundColor:'green', padding:10, borderRadius:20, width:120, marginHorizontal:20}}><Text style={{color:'white', textAlign:'center', fontWeight:'bold'}}>PREV</Text></Pressable>
          {index + 1 >= excersise.length ? (
            <TouchableOpacity onPress={()=> {
              navigation.navigate('Home') 
    
              setTimeout(()=>{
                setIndex(index+1)
              })
            }}  style={{backgroundColor:'green', padding:10, borderRadius:20, width:120, marginHorizontal:20}}><Text style={{color:'white', textAlign:'center', fontWeight:'bold'}}>SKIP</Text></TouchableOpacity>

          ):(
            <TouchableOpacity  onPress={()=> {
              navigation.navigate('Rest')
    
              setTimeout(()=>{
                setIndex(index+1)
              })}} style={{backgroundColor:'green', padding:10, borderRadius:20, width:120, marginHorizontal:20}}><Text style={{color:'white', textAlign:'center', fontWeight:'bold'}}>SKIP</Text></TouchableOpacity>
          )}
          
          </View>
    </SafeAreaView>
  )
}

export default FitScreen
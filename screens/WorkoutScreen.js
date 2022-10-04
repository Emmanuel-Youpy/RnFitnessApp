import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const WorkoutScreen = () => {

    const route=useRoute();
    // console.log(route.params)
    const navigation =useNavigation();
  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'white ', marginTop:50}}>
        <Image style={{width:'100%', height: 170}} source={{uri:route.params.image}}/>
        <AntDesign style={{position:'absolute', top:60, left:10}} name="arrowleft" size={24} color="white" onPress={()=> navigation.goBack()}/>

        {route.params.excersises.map((item, index) => {
            return (
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', margin:10}}>
                <Image style={{width:90, height:90}} source={{uri:item.image}}/>
                <View style={{marginLeft:10}}>
                    <Text style={{fontSize:17, fontWeight:'bold'}}>{item.name}</Text>
                    <Text style={{marginTop:4, fontSize:18, color:'gray'}}>{item.sets}</Text>
                </View>

            </TouchableOpacity>
            )
        
        })}
    </ScrollView>
    <TouchableOpacity onPress={()=> navigation.navigate('Fit', {excersises:route.params.excersises})} style={{backgroundColor:'blue', padding:10, marginLeft:'auto', marginRight:'auto', marginBottom:20, width:120, borderRadius:6}}>
        <Text style={{textAlign:'center', color:'white', fontSize: 15, fontWeight:'bold'}}>START</Text>
    </TouchableOpacity>
    </>
  )
}

export default WorkoutScreen
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import fitness from '../data/fitness'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const FitnessCard = () => {
    const fitnessData=fitness;
    const navigation = useNavigation();
  return (
    
    <View>
      {fitnessData.map((item, key) => {
        return (
        <TouchableOpacity style={{alignItems:'center', justifyContent:'center', margin:10}} key={key} onPress={()=> navigation.navigate('Workout', {image:item.image, exercises:item.excersises, id:item.id})}>
            <Image style={{height:150, width:'95%', borderRadius:10}} source={{uri:item.image}}/>
            <Text style={{position:'absolute', fontWeight:'bold', fontSize:16, color:'white', left:20, top:25}}>{item.name}</Text>
            <MaterialCommunityIcons style={{position:'absolute', color:'white', bottom:15, left:20}} name="lightning-bolt" size={24} color="black" />
        </TouchableOpacity>
        
      )
      })}
      <Text>Okaaaaerrt</Text>
      <Text>Okaaaaerrt</Text>
      <Text>Okaaaaerrt</Text>
      <Text>Okaaaaerrt</Text>
      <Text>Okaaaaerrt</Text>
      <Text>Okaaaaerrt</Text>
      <Text>Okaaaaerrt</Text>
    </View>
    
  )
}

export default FitnessCard

const styles = StyleSheet.create({})
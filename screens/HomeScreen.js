import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FitnessCard from '../components/FitnessCard'

const HomeScreen = () => {
  return (
    <ScrollView style={{marginTop:50}}>
        <View style={{backgroundColor:'#CD853f', padding:10, height:200, width:'100%'}}>
      <Text style={{color:'white', fontWeight:'bold', fontSize:18}}>HomeScreen</Text>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:20}}>
        <View>
            <Text style={{textAlign:'center', fontWeight:'bold', color:'white' , fontSize:18}}>0</Text>
            <Text style={{color:'gray', fontSize:17, marginTop: 6}} >WORKOUTS</Text>
        </View>
        <View>
            <Text style={{textAlign:'center', fontWeight:'bold', color:'white' , fontSize:18}}>0</Text>
            <Text style={{color:'gray', fontSize:17, marginTop: 6}}>KCAL</Text>
        </View>
        <View>
            <Text style={{textAlign:'center', fontWeight:'bold', color:'white' , fontSize:18}}>0</Text>
            <Text style={{color:'gray', fontSize:17, marginTop: 6}}>MINS</Text>
        </View>
      </View>
      <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
        <Image style={{height:120, width:'85%', borderRadius: 10}} source={{uri: "https://citybook.pk/wp-content/uploads/2019/01/Fitness-Cult-citybook-3.jpg"}} />
      </View>
      <FitnessCard/>
      
      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
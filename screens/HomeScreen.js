import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <View style={{backgroundColor:'#CD853f', padding:10, height:200, width:'100%'}}>
      <Text style={{color:'white', fontWeight:'bold', fontSize:18}}>HomeScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
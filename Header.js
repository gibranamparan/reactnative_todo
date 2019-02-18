import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder='What is your plan?' onChangeText={ (value) => console.log(value) }/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#30FF59',    
  }
})
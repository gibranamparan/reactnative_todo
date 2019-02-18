import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Body Component </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3D91FF'
  }
})

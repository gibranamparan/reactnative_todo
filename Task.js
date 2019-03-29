import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Task extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> {this.props.item.text} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: '#00FF94',
      fontSize: 20,
    }
  })
  
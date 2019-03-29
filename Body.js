import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Task from './Task'

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Body Component </Text>
        <FlatList 
          data={ this.props.todoList }
          renderItem = {({item}) => <Task item = {item} /> }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 9,
    backgroundColor: '#3D91FF',
    padding: 10
  }
})

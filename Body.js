import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Body Component </Text>
        <FlatList 
          data={ this.props.todoList }
          renderItem = {(todo) => {
            return <Text key={todo.item.key}>{todo.item.text}</Text>;
          }}
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

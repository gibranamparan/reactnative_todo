import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder='What is your plan?' 
          onSubmitEditing = 
            { this.props.onSubmitTodoTask }
          onChangeText = 
            { this.props.onChangeTodoTask }
          value = 
            { this.props.todoValue }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 2,
    backgroundColor: '#30FF59',
    padding: 10
  }
})
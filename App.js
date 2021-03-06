import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./Header";
import Body from "./Body";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newTask: '',
      tasksList: []
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Header 
          onSubmitTodoTask = { this.addTodoTask }
          onChangeTodoTask =  { this.changeTodoTask }
          todoValue = { this.state.newTask }
        />
        <Body todoList = { this.state.tasksList } />
      </View>
    );
  }

  changeTodoTask = (newText) => {
    this.setState({newTask: newText});
  }

  addTodoTask = () => { 
    console.log(this.state.tasksList.length)
    this.setState({
      tasksList: [...this.state.tasksList, 
        {key: Date.now().toString(), text: this.state.newTask}
      ],
      newTask: ''
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

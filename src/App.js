import './App.css';
import React, { Component } from 'react';
import CustomButton from './common/button/button';
import Header from './common/header/header';
import Input from './common/Input/input';
import List from './common/list/List';
import ListItem from './common/list-items/list-items'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: [],
    }
  }
  handeChange = () => {
    this.setState({
      currentTask: event.target.value
    })
  }
  addTask = () => {
    event.preventDefault()
    let arr = [...this.state.task]
    if (this.state.currentTask.length > 0) {
      arr.push(
        {
          
          id: Math.random(), task: this.state.currentTask
        }
      )
    }
    this.setState({
      task: arr,
      currentTask: "",
    })

  }
  deleteTask = (data) => {
    let arr = [...this.state.task]
    let index = arr.indexOf(data)
    arr.splice(index, 1)
    this.setState({
      task: arr
    })
  }

  clearList = () => {
    this.setState({
      task: []
    })
  }

  updateTask = (task,data) => {
      let arr = [...this.state.task]
      const index = arr.indexOf(data)
      arr[index].task = task
      this.setState({
        task:arr
      })
     
      
      
  }

  render() {
    return (
      <div className="app">
        <Header
          heading="Shopping List"
          subHeading="Get It Done"
        />
        <form>
          <div className="input">
            <Input onChange={this.handeChange} value={this.state.currentTask} placeholder="type" id="input" />
            <CustomButton type="submit" onClick={this.addTask}>Add Task</CustomButton>
            <CustomButton type="submit" onClick={this.clearList}>Clear List</CustomButton>
          </div>
        </form>
        <List>
          {
            this.state.task.map((data, index) => {
              return <ListItem
                onDeleteTask={() => this.deleteTask(data)}
                onUpdateTask = {this.updateTask}
                key={index}
                id = {data}
                >
                {data.task}
                
              </ListItem>

            })
          }
        </List>

      </div>

    );
  }
}

export default App;



//button
//text
//list
//title
//subtitle

//upload this on github
//github commit push pull

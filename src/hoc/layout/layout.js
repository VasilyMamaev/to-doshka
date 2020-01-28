import React, { Component } from 'react'
import classes from './layout.module.css'
import Task from '../../components/task/task'

export default class Layout extends Component {

  state = {
    tasks: [
      {id: 0, title: 'должно выполниться', done: false},
      {id: 1, title: 'выполнено', done: true},
      {id: 2, title: 'должно выполниться', done: false},
    ],
    newTask: ''
  }

  createTaskHandler = () => {
    if (this.state.newTask) {
      this.setState((prevState) => {
        let { tasks } = this.state
        tasks.push({
        id: prevState.tasks.length + 1,
        title: this.state.newTask,
        done: false
        })
        return {
          tasks,
          newTask: ''
        }
      })
    }
  }

  onChangeInput = (evt) => {
    this.setState({
      newTask: evt.target.value
    })
  }

  render() {
    return (
      <div className={classes.Layout}>
        <h1>TODO</h1>
        <div>
          <input 
          type="text" 
          placeholder="Введите задачу" 
          onChange={this.onChangeInput} 
          value={this.state.newTask}
          />
          <button onClick={this.createTaskHandler}>озадачить</button>
        </div>        
        <div className={classes.LayoutWrapper}>
         { this.state.tasks.map((task, i) => {
           return (
             <Task 
              key={i}
              title = {task.title}
              done = {task.done}
             />
           )
         })}
        </div>
      </div>
    )
  }
}

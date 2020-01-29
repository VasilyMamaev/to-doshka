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
    formControls: {
      newTask: ''
    }
  }

  createTaskHandler = () => {
     if (this.state.formControls.newTask) {
      this.setState((prevState) => {
        let tasks = this.state.tasks
        tasks.push({
        id: prevState.tasks.length + 1,
        title: prevState.formControls.newTask,
        done: false
        })
        return {
          tasks,
          formControls : {newTask: ''}
        }
      })
    }
    console.log(this.state)
  }


  onChangeInput = (evt) => {
    let value = evt.target.value
    let newTask = value
    this.setState({
      formControls: {newTask}
    })
  }

  checkboxHandler = (name, i) => {
    const task = this.state.tasks[i]
    task.done = name
    const tasks = [...this.state.tasks]
    tasks[i] = task
    this.setState({
      tasks
    })
  }

  deleteHandler = (i) => {
    let {tasks} = this.state
    tasks.splice(i, 1)
    this.setState({
      tasks
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
          value={this.state.formControls.newTask}
          />
          <button 
          onClick={this.createTaskHandler}
          onKeyPress ={this.olo}
          >
            озадачить</button>
        </div>        
        <div className={classes.LayoutWrapper}>
         { this.state.tasks.map((task, i) => {
           return (
             <Task 
              key={i}
              title = {task.title}
              done = {task.done}
              onCheckboxClick = {(evt) => {this.checkboxHandler(evt.target.checked, i)}}
              onDeleteClick = {() => {this.deleteHandler(i)}}
             />
           )
         })}
        </div>
      </div>
    )
  }
}

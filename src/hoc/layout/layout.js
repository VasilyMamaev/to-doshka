import React, { Component } from 'react'
import classes from './layout.module.css'
import Task from '../../components/task/task'
import SortList from '../../components/sort-list/sort-list'

export default class Layout extends Component {

  state = {
    tasks: [
      {title: 'должно выполниться', done: false},
      {title: 'выполнено', done: true},
      {title: 'должно выполниться', done: false},
    ],
    formControls: {
      newTask: '',
      viewTask: [true, false]
    }
  }

  createTaskHandler = () => {
     if (this.state.formControls.newTask) {
      this.setState((prevState) => {
        let tasks = this.state.tasks
        const formControls = this.state.formControls
        tasks.push({
        title: prevState.formControls.newTask,
        done: false,
        })
        formControls.newTask = ''
        return {
          tasks,
          formControls
        }
      })
    }
  }


  onChangeInput = (evt) => {
    let value = evt.target.value
    const formControls = this.state.formControls
    formControls.newTask = value
    this.setState({
      formControls: formControls
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

  listAllHandler = () => {
    let { formControls } = this.state
    formControls.viewTask = []
    formControls.viewTask.push(true, false)
    this.setState({
      formControls
    })
  }

  listActiveHandler = () => {
    let { formControls } = this.state
    formControls.viewTask = []
    formControls.viewTask.push(false)
    this.setState({
      formControls
    })
  }

  listFinishedHandler = () => {
    let { formControls } = this.state
    formControls.viewTask = []
    formControls.viewTask.push(true)
    this.setState({
      formControls
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
          >
            озадачить</button>
        </div>        
        <div className={classes.LayoutTasks}>
         { this.state.tasks.map((task, i) => {
           if (this.state.formControls.viewTask.includes(task.done)) {
           return (
             <Task 
              key={i}
              title = {task.title}
              done = {task.done}
              onCheckboxClick = {(evt) => {this.checkboxHandler(evt.target.checked, i)}}
              onDeleteClick = {() => {this.deleteHandler(i)}}
             />
           )}
           return null
         })}
        </div>
        <SortList 
        onAllClick = {this.listAllHandler}
        onActiveClick = {this.listActiveHandler}
        onFinishedClick = {this.listFinishedHandler}
        />
      </div>
    )
  }
}

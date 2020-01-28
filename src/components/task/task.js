import React from 'react'
import classes from './task.module.css'

export default function Task(props) {
  return (
    <div className={classes.Task}>
      <input type = "checkbox" checked = {props.done}></input>
      <p>{props.title}</p>
    </div>
  )
}

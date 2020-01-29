import React from 'react'
import classes from './task.module.css'

export default function Task(props) {
  return (
    <div className={classes.Task}>
      <input 
        type = "checkbox"
        checked = {props.done}
        onChange={props.onCheckboxClick}
      ></input>
      <p>{props.title}</p>
      <button onClick={props.onDeleteClick}>удалить</button>
    </div>
  )
}

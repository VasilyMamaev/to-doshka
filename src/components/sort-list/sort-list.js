import React from 'react'
import classes from './sort-list.module.css'

export default function SortList(props) {
  return (
    <div className={classes.SortList}>
      <button onClick={() => props.onAllClick()}>все</button>
      <button onClick={() => props.onActiveClick()}>активные</button>
      <button onClick={() => props.onFinishedClick()}>завершенные</button>
    </div>
  )
}

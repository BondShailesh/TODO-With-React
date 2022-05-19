import React from 'react'
import Styles from "./Todo.module.css"
function TodoList({children}) {
  return (
    <div >
      
      <h2 className={Styles.heading} style={{color:"grey"}}>Your Todo Items</h2>
     <div className={Styles.listContainer}>
      <ul>{children}</ul>
      </div>
    </div>
  )
}

export default TodoList

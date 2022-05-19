import React from 'react'
import Styles from "./Todo.module.css"
function TodoItems({value,deleteTodo,keyValue}) {
  return (
    <div >
       <div style={{border:"1px solid black",margin:"10px"}}>
      <li> 
     <div className={Styles.items}>
      {value}
      </div>
      <button className={Styles.delete} onClick={()=>deleteTodo(keyValue)}>delete</button>
      </li>
      </div>
    </div>
  )
}

export default TodoItems

import React from 'react'
import { useState } from 'react'
import Styles from "./Todo.module.css"

function TodoInput({getaddTodo}) {
    const [value,setValue] = useState("");
  return (
    <div>
      <input className={Styles.input0} value= {value} type="text" placeholder=' Write new Todo.......' onChange={(e)=>{
         setValue(e.target.value) 
      }}/>
      <button className={Styles.buttonAdd} disabled={!value} onClick={()=>{  
          // console.log(value);
          getaddTodo(value);
          setValue("");
      }}>Add</button>
    </div>
  )
}

export default TodoInput

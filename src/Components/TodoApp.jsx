import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItems from './TodoItems';
import TodoList from './TodoList'
import { v4 as uuidv4, v4 } from 'uuid';
import Styles from "./Todo.module.css"

function TodoApp() {
    const [todos,setTodos] = useState([]);  

    const addTodoValue = (todo) =>{
        setTodos([...todos,{value0:todo,id:v4()}]);
    }
    const deleteTodo = (value)=>{
    setTodos(todos.filter((todos)=>todos.id!=value));
    }
  return (
    <div>
      <h1 className={Styles.heading}>ADD YOUR TODO</h1>
      
      <TodoInput getaddTodo = {addTodoValue}/>
      
      <TodoList>
        {/* children */}
        <ul>
      {todos.map((el)=>{
        return(
          <TodoItems key={el.id} keyValue = {el.id} value = {el.value0} deleteTodo ={deleteTodo}/>
        )
      })}
      </ul>
      </TodoList>
    </div>
  )
}

export default TodoApp

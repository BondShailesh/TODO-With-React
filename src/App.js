import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import { useState } from 'react';
import TodoApp from './Components/TodoApp';

function App() {
  const [toggle,setToggle] = useState(false);
  return (
    <div >
    {/* <button onClick={()=>setToggle(!toggle)}>
      {toggle ? "Show Todo App"  : "Show Counter App"}
      </button> */}
   <TodoApp/>
    
    {/* {toggle ? <Counter/> : <TodoApp/>} */}
   
  </div>
    // 
  );
}

export default App;

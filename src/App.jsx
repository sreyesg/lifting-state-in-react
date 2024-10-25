import { useState } from "react"; 
import NewTodo from "./components/newTodo";

const App = () => {

  const [todos, setTodos] = useState([])

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);

  };

  return ( 
    <>
      <h1>To-do App</h1>
      <NewTodo addTodo={addTodo} />
      <ul>
        {
        todos.map((todo, idx)=>{
          return(<li key={idx}>{todo}</li>)
        })
        }
      </ul>
    </>
  );
};

export default App;

import { useState } from "react"; 
import NewTodo from "./components/newTodo";
import TodoList from "./components/Todolist";

const App = () => {

  const [todos, setTodos] = useState([])

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);

  };

  return ( 
    <>
      <h1>To-do App</h1>
      <NewTodo addTodo={addTodo} />
      <TodoList todos={todos}/>
    </>
  );
};

export default App;

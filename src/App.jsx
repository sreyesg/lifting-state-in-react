// src/App.jsx
import { useState } from "react";
import IncrementButton from "./components/IncrementButton.jsx";
import NewTodo from "./components/newTodo.jsx";

const App = () => {
  const [count, setCount] = useState(0)
  
  const addOne = () => {
    setCount(count + 1)
  }
  
  return (
    <>
      <h1>To-do app</h1>
      <IncrementButton addOne={addOne}/>
    </>
  );
};

export default App
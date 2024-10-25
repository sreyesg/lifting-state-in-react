import { useState } from "react";

const NewTodo = (props) => {

  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = (event) => {
      // console.log(event)
      event.preventDefault();
      setNewTodo('')
      props.addTodo(newTodo)
      // console.log("Creating a new to-do...");
    };
  
  const handleChange = (event) => {
    setNewTodo(event.target.value)
  }
  
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoInput">Todo: </label>
        <input 
        id="todoInput" 
        type="text" 
        name="todo" 
        onChange={handleChange}
        value={newTodo}
        />
        <button type="submit">Create to-do</button>
      </form>
    );
  };
  
  export default NewTodo;
  
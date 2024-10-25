import { useState } from "react";

const NewTodo = (props) => {

  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = (event) => {
      
      event.preventDefault();
      props.addTodo('data crated within newTodo')
      console.log("Creating a new to-do...");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoInput">Todo: </label>
        <input id="todoInput" type="text" name="todo" />
        <button type="submit">Create to-do</button>
      </form>
    );
  };
  
  export default NewTodo;
  
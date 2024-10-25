import NewTodo from "./components/newTodo";
const App = () => {

  const addTodo = (newTodo) => {
    console.log(newTodo);
  };

  return (
    <>
      <h1>To-do App</h1>
      <NewTodo addTodo={addTodo} />
    </>
  );
};

export default App;

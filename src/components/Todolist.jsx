
const TodoList = (props) => {
    return(
        <ul>
            {
            props.todos.map((todo, idx) => {
                return(
                    <li key={idx}>{todo}</li>
                )
            })
            }
        </ul>
    )
}

export default TodoList
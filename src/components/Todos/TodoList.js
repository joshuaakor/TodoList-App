import TodoItem from "./TodoItems";
import classes from "./TodoList.module.css"

function TodoList(props) {
    return(
        <ul className={classes.list}>
            {props.todos.map((todo) => (<TodoItem 
                key={todo.id}
                id={todo.id}
                title={todo.title}
                date={todo.date}
                description={todo.description}
            />))}
            
        </ul>
    );
}

export default TodoList;
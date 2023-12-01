import {useState} from "react";
import {useEffect} from "react";
import classes from "./Loader.module.css"
import TodoList from "../components/Todos/TodoList";

function AllTodos() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedTodos, setLoadedTodos] = useState([]);

    useEffect(() =>{
        setIsLoading(true);
        fetch('https://todo-list-8e47d-default-rtdb.firebaseio.com/Todo.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const todoss = [];

            for(const key in data){
                const todo = {
                    id: key,
                    ...data[key]
                };
                todoss.push(todo);
            }

            setIsLoading(false);
            setLoadedTodos(todoss);
        });
    }, []);

    if(isLoading){
        return(
            <div className={classes.loadingContainer}>
                <div className={classes.loadingIcon}></div>
            </div>
        );
    }

    return (
        <section>
            <h1>All Todos</h1>
            <div>
                <TodoList todos = {loadedTodos}></TodoList>
            </div>
        </section>
    );
}

export default AllTodos;  
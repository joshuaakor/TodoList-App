import TodoForm from "../components/Todos/TodoForm";

import {useNavigate} from "react-router-dom";

function NewTodos () {
    const navigate = useNavigate();

    function AddTodoHandler(enteredTodoData){
        fetch('https://todo-list-8e47d-default-rtdb.firebaseio.com/Todo.json',
        {
            method:'POST',
            body:JSON.stringify(enteredTodoData),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            navigate('/');
        });
    }
    return(
        <section>
            <h2>Add new Todos</h2>
            <TodoForm onAddTodoData={AddTodoHandler}/>

        </section>
    );
}

export default NewTodos;
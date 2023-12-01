import {useContext} from 'react';
import DoneContext from '../../store/DoneContext';

import Card from "../ui/Card";
import classes from "./TodoItems.module.css";

function TodoItem(props){

    const DoneCntext = useContext(DoneContext);

    const isItemDone = DoneCntext.isItemDone(props.id);

    function toggleDoneTodoHandler() {
            if (isItemDone) {
                DoneCntext.removeDoneTodos(props.id);
            } else{
                DoneCntext.addDoneTodos({
                    id: props.id,
                    title: props.title,
                    date: props.date,
                    description: props.description,
                });
            }
    }





    return (
        <Card>
            <li className={classes.item}>
                <div className={classes.content}>
                    <h3>Title:{props.title}</h3>
                    <h4>Date:{props.date}</h4>
                    <h4>Description:{props.description}</h4>
                </div>
                <div className={classes.checkbox} >
                    <button onClick={toggleDoneTodoHandler}>{isItemDone ? 'Remove from Todos' : 'Add to Done Todos'}</button>
                </div>
            </li>
           
            
        </Card>
    );
}

export default TodoItem;
import Card from "../ui/Card";
import { useRef } from "react";
import {useState} from 'react';
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';


import classes from './TodoForm.module.css';




function TodoForm(props) {

    const titleInput = useRef();
    const dateInput = useRef();
    const descriptionInput = useRef(); 

    
    const [selectedDate, setSelectedDate] = useState(null);
    const handleDateChange = ((date) =>{
        setSelectedDate(date);

    });

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    

    

    

    function SubmitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInput.current.value;
        const enteredDescription = descriptionInput.current.value;


        const enteredTodoData = {
            title:enteredTitle,
            date:selectedDate,
            description: enteredDescription
        }
        
    
        console.log(enteredTodoData);
        
        props.onAddTodoData(enteredTodoData);

       setIsButtonDisabled(true);
        
    
        

        
    }

    return (
        
        <div className="center-div">
            <Card>
            <form className={classes.form} onSubmit={SubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" required id="title" ref={titleInput}></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor="date">Todo Date</label>
                    <ReactDatePicker
                    isClearable
                    showYearDropdown
                    scrollableMonthYearDropdown
                    selected={selectedDate} onChange={handleDateChange}ref={dateInput} required id="date"></ReactDatePicker>
                </div>

                <div className={classes.control}>
                    <label htmlFor="description">Todo Descritpion</label>
                    <textarea id="description" required rows="5" ref={descriptionInput}></textarea>
                </div>

                <div className={classes.actions}>
                    <button disabled={isButtonDisabled}>Add Todo</button>
                </div>


            </form>
        </Card>
        </div>
    );
}

export default TodoForm;

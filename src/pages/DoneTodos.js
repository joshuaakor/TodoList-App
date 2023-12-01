import {useContext} from 'react';

import DoneContext from '../store/DoneContext';

import TodoList from '../components/Todos/TodoList';

function DoneTodos() {

    const DoneCntext = useContext(DoneContext);

    let content;
    if(DoneCntext.totalDoneTodos === 0) {
        content = <p>You have no done Todos yet. Get something done </p>
    } else{
        content = <TodoList todos={DoneCntext.doneTodos}></TodoList>
    }

    return <section>
        <h1>Done Todos</h1>
        {content}
    </section>
    
}

export default DoneTodos;
import {createContext, useState} from 'react';

const DoneContext = createContext({
    doneTodos:[],
    totalDoneTodos: 0,
    addDoneTodos:(addDoneTodo) => {},
    removeDoneTodos:(removeDoneTodoID) => {},
    isItemDone: (isItemDoneID) => {}, 

});

export function DoneContextProvider(props){
    const[adddoneTodos, setAddDoneTodos] = useState([]);

    function addDoneTodosHandler(addDoneTodo){
        setAddDoneTodos((previousDoneTodos) => {
            return previousDoneTodos.concat(addDoneTodo);
        });
    }

    function removeDoneTodosHandler(removeDoneTodoID){
        setAddDoneTodos((previousDoneTodos) => {
            return previousDoneTodos.filter((removeDoneTodo) => removeDoneTodo.id !== removeDoneTodoID);
        });
    }

    function isItemDoneHandler(isItemDoneID) {
        return adddoneTodos.some((itemDoneID) => itemDoneID.id === isItemDoneID);
    }

    const context = {
        doneTodos:adddoneTodos,
        totalDoneTodos:adddoneTodos.length,
        addDoneTodos:addDoneTodosHandler,
        removeDoneTodos:removeDoneTodosHandler,
        isItemDone: isItemDoneHandler,

    };

    return <DoneContext.Provider value={context}>
        {props.children}
    </DoneContext.Provider>
}

export default DoneContext;
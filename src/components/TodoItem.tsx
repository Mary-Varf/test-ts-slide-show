import React, {FC} from "react";
import { ITodo } from '../types/types';

interface IToDoItem extends ITodo {
    deleteTodo: (id: number)=> void
    toggleTodo: (id: number)=> void
}

const ToDoItem: FC<IToDoItem> = (props) => {
    const {id, title, completed, deleteTodo, toggleTodo} = props;
    return (
        <div>
            <input type='checkbox' checked={completed} onChange={() => toggleTodo(id)}/>
            {title}
            <button onClick={()=>deleteTodo(id)}>Delete</button>
        </div>
    ) 
}

export default ToDoItem
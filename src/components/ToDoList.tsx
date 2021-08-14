import React, {FC} from "react";
import { ITodo} from '../types/types'
import ToDoItem from "./TodoItem"

interface ITodoListProps{
    items: ITodo[],
    toggleTodo: (id: number) => void ,
    deleteTodo: (id: number) => void,
}

const ToDoList: FC<ITodoListProps> = (props) => {
    const {items, toggleTodo, deleteTodo} = props;
    return (
        <div> {
            items.map((el) => {return (
                <ToDoItem 
                    key={el.id} 
                    toggleTodo={toggleTodo} 
                    deleteTodo={deleteTodo}
                    {...el} 
                />
            )})
        }
        </div>
    )
}

export default ToDoList
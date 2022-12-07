import React from 'react'
import ToDo from './ToDo'
import { TaskNotes } from '../interfaces'

interface Props {
    toDoList: TaskNotes[];
    handleToggle(): void;
    handleFilter(): void;
    removeTask(): void;

}


export default function ToDoList({toDoList, handleToggle, handleFilter, removeTask}: Props) {
    return (
        <div>
            {toDoList.map(todo => {
                return(
                    <ToDo todo={todo} handleToggle={handleToggle} removeTask={removeTask}/>
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    )

}
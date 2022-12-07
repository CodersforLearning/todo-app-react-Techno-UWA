import { Task } from "../interfaces" 
import { ChangeEvent, MouseEventHandler } from "react"

interface Props {
    todo: Task;
    handleToggle(id: number): void;
    removeTask(): void;
    e: ChangeEvent<HTMLDivElement>;
}

export default function ToDo({todo, handleToggle, removeTask}: Props) {
    const handleClick: MouseEventHandler<HTMLDivElement> = ({e}: Props) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div>
            <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
            {todo.task}
            </div>
            <input id={todo.id} type='button' value='X' onClick={removeTask} />
        </div>  
    )
}
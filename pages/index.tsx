import React, { ChangeEvent, FC, useState, FormEvent} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Test data
import data from '../public/data.json'

// Components
import Header from '../Components/Header'
import ToDoList from '../Components/ToDoList'
import ToDo from '../Components/ToDo'
import TodoForm from '../Components/ToDoForm'
import { TaskNotes } from '../interfaces'

export default function App() {
  const [count, setCount] = useState(0)
  const [toDoList, setToDoList] = useState<TaskNotes[]>(data)

  const handleToggle = (id: number): void => {
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }
  
  const handleFilter = (): void => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log('Submitted')
    let task = e.currentTarget[0]
    console.log(task.value)
    const newTask = e.currentTarget[0].value
    e.currentTarget[0].value = ''
    addTask(newTask)
  }  

  const addTask = (newTask: string) => {
    let copy = [...toDoList]
    copy = [{id: toDoList.length + 1, task: newTask, complete: false}, ...toDoList]
    setToDoList(copy)
    newTask = ''
  }

  const removeTask = (e: ChangeEvent<HTMLInputElement>) => {
    let id = e.currentTarget.id
    console.log('removing')
    console.log(id)
    let filteredId = toDoList.filter(task => {
      return task.id == id ? false : true
    })
    setToDoList(filteredId)
  }


  return (
    <div className="App">
      <Header />
      <TodoForm handleSubmit={handleSubmit} />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} removeTask={removeTask} />
    </div>
  )
}
import React, { useState } from 'react'
import Task from './Task';

function Todo() {

    const[wholeTodo, setwholeTodo] = useState([]);
    const[newTask, setNewTask] = useState("");

    const handleChange = (e) => {
        setNewTask(e.target.value);
    }

    const addNewTask = () => {

        const task = {
            id: wholeTodo.length === 0 ? 1 : wholeTodo[wholeTodo.length - 1].id + 1,
            taskName : newTask,
            completed: false,
        }

        const taskSaved = [...wholeTodo, task];
        setwholeTodo(taskSaved);
    }

    const deleteTask = (id) => {

        setwholeTodo(wholeTodo.filter((task)=> task.id !== id));
    }

    const taskCompleted = (id) => {
        setwholeTodo(
            wholeTodo.map((task) => {
                if(task.id === id){
                return {...task, completed:true};}

                else{
                return task;}
            })
        )
    }

  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='block'>
        <div className='flex'>
            <input className='bg-slate-400 w-[300px] py-2 outline-none border-none rounded-xl' onChange={handleChange} type="text" />
            <button className='px-4 py-2 bg-red-400 rounded-xl' onClick={addNewTask}>Add Task</button>
        </div>

        <div className='mt-[150px]'>
            {wholeTodo.map((index) => (
                <Task taskName = {index.taskName} id = {index.id} deleteTask ={deleteTask} taskCompleted={taskCompleted} completed={index.completed}/>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Todo
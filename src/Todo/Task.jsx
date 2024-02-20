import React from 'react'

function Task(props) {
  return (
    <div style={{backgroundColor : props.completed ? "green" : "lightblue"}} className='flex justify-between items-center px-4 gap-4 text-sky-900 rounded-md mt-3'>
                    <button className='bg-green-400 rounded-xl px-3 py-1' onClick={()=>props.taskCompleted(props.id)}>Done</button>
                    <h1 className='text-xl'>{props.taskName}</h1>
                    <button className='bg-red-500 w-[35px] h-full rounded-full p-2' onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  )
}

export default Task
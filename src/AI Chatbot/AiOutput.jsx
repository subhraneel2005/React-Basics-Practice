import React from 'react'
import { FaRobot } from 'react-icons/fa'

function AiOutput(props) {
  return (
    <div className='bg-slate-800 text-slate-300 rounded-xl w-full p-3 flex gap-2'><FaRobot size={20}/>{props.showOutput}</div>
  )
}

export default AiOutput
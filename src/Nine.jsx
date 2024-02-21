import React, { useState } from 'react'

function Nine() {
    const[bg, setBg] = useState("lightgreen")
  return (
    <div
    style={{backgroundColor : bg}}
    className='h-screen w-full flex justify-center items-center'> 
        <button className='px-4 py-2 bg-slate-500 rounded-xl'
        onClick={() => setBg("lightblue")}
        >Click me</button>
    </div>
  )
}

export default Nine
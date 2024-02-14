import React, { useState } from 'react'

function Second() {

    let [counter,setCounter] = useState('Hello');

    const click = () => {
       counter = 'Buddy';
       setCounter(counter);
    }
  return (
    <div className='h-screen w-full'>
        <h1>{counter}</h1>
        <button onClick={click}>click me</button>
    </div>
  )
}

export default Second
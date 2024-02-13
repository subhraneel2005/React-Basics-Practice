import React, { useState } from 'react'

function First() {

    var [number, setNumber] = useState(0);

    const increaseValue = () => {
        number = number + 1;
        setNumber(number);
    }

    const decreaseValue = () => {
        number = number - 1;
        setNumber(number);
    }
  return (
    <div className='h-screen w-full flex justify-center items-center bg-slate-900'>
        <div className='h-[200px] w-[200px] rounded-xl bg-slate-400 flex justify-center items-center p-4'>
            <div className='block h-full w-full'>
            <h1 className='font-bold text-3xl'>Count : {number}</h1>
            <button className='outline-none border-none bg-green-400 rounded-xl cursor-pointer px-4 py-2' onClick={increaseValue}>Increase</button>
            <button className='outline-none border-none bg-red-400 rounded-xl cursor-pointer px-4 py-2' onClick={decreaseValue}>Decrease</button>
            </div>
        </div>
    </div>
  )
}

export default First
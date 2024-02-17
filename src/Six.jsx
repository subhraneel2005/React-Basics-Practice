import React, { useState } from 'react'

function Six() {

    let[heightt, setHeightt] = useState(50);

    const increase = () => {
        heightt = heightt + 10;
        setHeightt(heightt);
    }

    const decrease = () => {
        heightt = heightt - 10;
        setHeightt(heightt);
    }
  return (
    <div className='h-screen w-full flex justify-center items-center select-none'>
        <div className='block'>
        <div className='w-[90px] bg-sky-600 rounded-lg flex justify-center items-center text-sky-300' style={{height: `${heightt}px`}}>{`${heightt}px`}</div>
        </div>

        <div className='flex justify-between mt-3 gap-5 ml-10'>
            <button className='px-3 py-2 bg-green-600 text-green-200' onClick={increase}>Increase Height</button>
            <button className='px-3 py-2 bg-red-600 text-red-200' onClick={decrease}>Decrease Height</button>
        </div>
    </div>
  )
}

export default Six
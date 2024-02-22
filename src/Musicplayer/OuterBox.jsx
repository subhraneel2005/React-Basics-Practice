import React from 'react'
import SearchMusic from './SearchMusic'

function OuterBox() {
  return (
    <div className='h-[350px] w-[700px] rounded-xl bg-violet-500 flex justify-center items-center'>
        <div className='block py-3 px-2'>
            <h1 className='text-4xl text-center text-purple-800 font-bold mb-5'>Music Player</h1>
            <SearchMusic/>
            <div className='bg-slate-800 text-slate-400 w-full h-[55px] rounded-xl mt-[80px]'></div>
        </div>
    </div>
  )
}

export default OuterBox
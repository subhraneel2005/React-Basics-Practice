import React from 'react'
import SearchMusic from './SearchMusic'

function OuterBox() {
  return (
    <div className='h-[350px] md:w-[700px] w-[550px] px-4 md:px-0 rounded-xl bg-transparent flex justify-center items-center'>
        <div className='block py-3 px-2'>
            <h1 className='text-4xl text-center text-white font-bold mb-8'>Music Player</h1>
            <SearchMusic/>
        </div>
    </div>
  )
}

export default OuterBox
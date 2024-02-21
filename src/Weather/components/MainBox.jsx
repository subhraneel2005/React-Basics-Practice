import React from 'react'
import Search from './Search'

function MainBox() {
  return (
    <div className='h-[500px] w-[400px] rounded-xl bg-sky-600 text-white flex justify-center items-center'>
        <div className='block'>
            <h1 className='p-3 text-2xl text-center'>Weather App</h1>
            <Search/>
        </div>
    </div>
  )
}

export default MainBox
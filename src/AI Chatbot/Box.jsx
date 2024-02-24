import React from 'react'
import SearchBar from './SearchBar'
import AiOutput from './AiOutput'

function Box() {
  return (
    <div className='h-[500px] w-[400px] rounded-xl bg-purple-400 flex justify-center items-center'>
        <div className='block p-3'>
            <SearchBar/>
        </div>
    </div>
  )
}

export default Box
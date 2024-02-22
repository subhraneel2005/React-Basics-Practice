import React from 'react'
import SearchBar from './SearchBar'
import Results from './Results'

function Box() {
  return (
    <div className='h-screen w-full bg-emerald-700 flex justify-center items-center'>
        <div className='block py-3 px-2'>
            <SearchBar/>
        </div>
    </div>
  )
}

export default Box
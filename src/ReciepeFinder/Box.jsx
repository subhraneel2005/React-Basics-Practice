import React from 'react'
import SearchBar from './SearchBar'
import Results from './Results'

function Box() {
  return (
    <div className='h-[600px] w-[700px] rounded-xl bg-emerald-500 flex justify-center items-center'>
        <div className='block py-3 px-2'>
            <SearchBar/>
            <Results/>
        </div>
    </div>
  )
}

export default Box
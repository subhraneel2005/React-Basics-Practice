import React from 'react'

function SearchMusic() {
  return (
    <div className='flex w-full bg-slate-600 text-white rounded-xl'>
        <input className='border-none outline-none bg-transparent p-3' placeholder='Search for a song' type="text" />
        <button className='p-3 bg-red-500 rounded-xl text-white'>Search</button>
    </div>
  )
}

export default SearchMusic
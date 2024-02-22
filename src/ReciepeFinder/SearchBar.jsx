import React from 'react'

function SearchBar() {
  return (
    <div className='w-full'>
        <div classname='flex'>
            <input className='border-none bg-slate-600 p-3 outline-none w-[80%] rounded-xl text-white' placeholder='Enter recipe you want' type="text"/>
            <button className='p-3 rounded-xl bg-red-400'>Search</button>
        </div>
    </div>
  )
}

export default SearchBar
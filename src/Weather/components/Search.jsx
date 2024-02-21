import React, { useState } from 'react'

function Search() {

    const[seacrhValue, setSearchValue] = useState('');
    const[showValue, setShowValue] = useState('');

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }

    const btnClick = () => {
        setShowValue(seacrhValue);
    }
  return (
    <div>
        <input placeholder='Enter a city name' type="text" className='px-6 py-2 bg-slate-600 rounded-xl border-none outline-none' onChange={handleChange}/>
        <button onClick={btnClick} className='bg-green-500 rounded-xl py-2 px-4'>Search</button>

        <h1 className='text-xl text-center text-white mt-4'>{showValue}</h1>
    </div>
  )
}

export default Search
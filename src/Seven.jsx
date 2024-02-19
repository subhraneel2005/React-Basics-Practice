import React from 'react'

function Seven({pics, title, description}) {
  return (
    <div className='h-[300px] w-[300px] flex justify-center items-center select-none bg-slate-700 rounded-xl p-3'>
        <div className='block'>
            <img className='h-[200px] w-full px-3 py-2' src={pics} alt="" />
            <h1 className='text-2xl text-slate-300 mt-4 text-center'>{title}</h1>
            <p className='text-sm text-slate-400 mt-4'>{description}</p>
        </div>
    </div>
  )
}

export default Seven
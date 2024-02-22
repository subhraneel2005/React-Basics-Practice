import React from 'react'

function Results(props) {
  return (
        <div className='w-full block mt-[60px] p-3'>
            <h1 className='text-3xl font-bold text-white text-center mt-2'>{props.title}</h1>
            <h1 className='text-2xl font-bold text-gray-400 text-center mt-2'>Ingredients Required</h1>
            <p className='text-xl text-gray-300 mt-3'>{props.ingredients}</p>
            <h1 className='text-2xl font-bold text-gray-400 text-center mt-2'>Instructions</h1>
            <p className='text-xl text-gray-300 mt-3'>{props.instructions}</p>
        </div>
    
  )
}

export default Results
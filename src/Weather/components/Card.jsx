import React from 'react'

function Card(props) {
  return (
    <div className='flex justify-center items-center h-[100px] w-[100px] rounded-xl bg-white'>
        <h1 className='text-black text-xl'>{props.title}</h1>
    </div>
  )
}

export default Card
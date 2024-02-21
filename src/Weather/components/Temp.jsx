import React, { useState } from 'react'


function Temp(props) {

  

  return (
    <div className='h-[160px] w-[160px] rounded-xl bg-emerald-600 flex justify-center items-center ml-24 mt-10'>
        <div className='block'>
          <h1 className='text-2xl text-emerald-200 font-bold'>{`${props.temperature} C`}</h1>
          <div className='text-3xl ml-5 mt-2'>{props.icon}</div>
        </div>
    </div>
  )
}

export default Temp
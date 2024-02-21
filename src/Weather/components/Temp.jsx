import React from 'react'

function Temp(props) {
  return (
    <div className='h-[160px] w-[160px] rounded-xl bg-emerald-600 flex justify-center items-center ml-24 mt-4'>
        <h1 className='text-xl text-emerald-300'>{props.showValue}</h1>
        <div>{props.icon}</div>
    </div>
  )
}

export default Temp
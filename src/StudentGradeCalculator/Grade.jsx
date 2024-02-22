import React from 'react'

function Grade(props) {
  return (
    <div className='h-[160px] w-[220px] rounded-xl bg-lime-400 text-lime-700 flex justify-center items-center text-2xl mt-6 ml-[87px]'>
        <h1>{`${props.grade} %`}</h1>
    </div>
  )
}

export default Grade
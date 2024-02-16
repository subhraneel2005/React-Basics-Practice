import React, { useState } from 'react'

function Third({colorOne="red", colorTwo="green", colorThree="blue", tOne="Red", tTwo="Green", tThree="Blue", title="Card 2", dColor="black"}) {

    const [subhomoy, setSubhomoy] = useState(dColor);

  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='h-[400px] w-[400px]'>
            <div style={{backgroundColor : subhomoy}} className='h-full w-full rounded-xl flex justify-center items-center'>
                <h1 className='text-4xl text-white'>{title}</h1>
            </div>
            <div className='grid grid-cols-3 gap-6 p-3 bg-slate-800 rounded-md text-slate-400'>
                <button className='rounded-xl px-4 py-2' onClick={() => setSubhomoy(colorOne)}>{tOne}</button>
                <button className='rounded-xl px-4 py-2' onClick={() => setSubhomoy(colorTwo)}>{tTwo}</button>
                <button className='rounded-xl px-4 py-2' onClick={() => setSubhomoy(colorThree)}>{tThree}</button>
            </div>
        </div>
    </div>
  )
}

export default Third
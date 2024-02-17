import React, { useState } from 'react'

function FIve() {

    const [light, setLight] = useState('gray');

  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='h-[500px] w-[500px] flex justify-center items-center bg-slate-800 rounded-xl'>
            <div className='block'>
                <div className='h-[250px] w-[250px] rounded-full flex justify-center items-center text-2xl' style={{backgroundColor:light}}>Light Bulb</div>

                <div className='flex justify-between mt-3'>
                    <button className='px-4 py-2 bg-green-600 text-green-200' onClick={() => setLight('yellow')}>ON</button>
                    <button className='px-4 py-2 bg-red-600 text-red-200' onClick={() => setLight('white')}>OFF</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FIve
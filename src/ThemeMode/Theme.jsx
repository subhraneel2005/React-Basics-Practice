import React, { useContext } from 'react'
import UseContext from '../contexts/UseContext'

function Theme() {

    const{toggle} = useContext(UseContext);
    const{changeTheme} = useContext(UseContext);
    const{toggleText} = useContext(UseContext);
    const{textColor} = useContext(UseContext);

  return (
    <div className='h-screen w-full flex justify-center items-center'> 
        <div 
        style={{backgroundColor : toggle}}
        className='w-[500px] h-[500px] rounded-xl flex justify-center items-center'>
            <div className='block'>
                <div className='p-2 bg-black rounded-full mr-28' onClick={changeTheme}>{toggleText}</div>
                <h1 style={{color:textColor}} className='text-center'>Lorem ipsum dolor sit</h1>
                <p style={{color:textColor}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam officiis sint perferendis recusandae qui odit molestias suscipit assumenda voluptate ipsam, numquam quia, distinctio ducimus maiores cum nam facere, unde voluptatem?</p>
            </div>
        </div>
    </div>
  )
}

export default Theme
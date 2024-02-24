import React, { useContext } from 'react'
import UseContext from '../contexts/UseContext'

function Theme() {

    const{toggle} = useContext(UseContext);
    const{changeTheme} = useContext(UseContext);

  return (
    <div className='h-screen w-full flex justify-center items-center'> 
        <div>
            <button></button>
        </div>
    </div>
  )
}

export default Theme
import React, { useContext, useState } from 'react'
import UseContext from '../contexts/UseContext'

function LoginContext() {

    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const {setUser} = useContext(UseContext);

  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='w-[500px] h-[500px] rounded-e-xl bg-lime-500'>
            <div className='block'>
                <h1></h1>
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <button>Login</button>
            </div>
        </div>
    </div>
  )
}

export default LoginContext
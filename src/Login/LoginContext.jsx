import React, { useContext, useState } from 'react'
import UseContext from '../contexts/UseContext'

function LoginContext() {

    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const {setUser} = useContext(UseContext);

    const handleClick = (e) => {
        e.preventDefault();
        setUser({username,email,password});
    }

  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='w-[500px] h-[500px] rounded-e-xl bg-lime-500'>
            <div className='block'>
                <h1></h1>
                <input placeholder='Username'
                onChange={(e)=>setUsername(e.target.value)} value={username}
                type="text" />
                <input
                value={email}
                onChange={(e)=>setEmail(e.target.value)} 
                placeholder='Email' type="text" />
                <input onChange={(e)=>setPassword(e.target.value)} value={password}
                placeholder='Password' type="text" />
                <button onClick={handleClick}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default LoginContext
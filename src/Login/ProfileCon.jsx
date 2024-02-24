import React, { useContext } from 'react'
import UseContext from '../contexts/UseContext'
function ProfileCon() {

    const {userData} = useContext(UseContext);

  if(!userData)
  {
    return <div className='text-4xl text-slate-800'>{userData.username}</div>
  }
  else
  {
    return <h1>Please Login</h1>
  }
}

export default ProfileCon
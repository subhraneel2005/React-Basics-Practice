import React, { useContext } from 'react'
import UseContext from '../contexts/UseContext'
function ProfileCon() {

    const {userData} = useContext(UseContext);

  return (
    <div className='text-4xl text-slate-800'>{userData.username}</div>
  )
}

export default ProfileCon
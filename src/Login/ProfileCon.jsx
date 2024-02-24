import React, { useContext } from 'react'
import UseContext from '../contexts/UseContext'
function ProfileCon() {

    const {userData} = useContext(UseContext);

  if(!userData)
  {
    return <h1>Please Login</h1>
  }
  else
  {
    return (<div>
      <h1 className='text-4xl text-slate-800'>Welcome {userData.username}</h1>
      {/* <h1 className='text-4xl text-slate-800'>Your Email is {userData.email}</h1> */}
    </div>
            
    )
  }
}

export default ProfileCon
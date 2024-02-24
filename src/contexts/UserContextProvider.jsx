import React from 'react'
import UseContext from './UseContext'

const UserContextProvider = ({children}) => {

  return (
    <UseContext.Provider>
        {children}
    </UseContext.Provider>
  )
}

export default UserContextProvider
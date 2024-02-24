import React from 'react'
import UseContext from './UseContext'

const UserContextProvider = ({children}) => {

    const[toggle, setToggle] = React.useState('gray');
    const[toggleText,setToggleText] = React.useState('Dark');

    const changeTheme = () => {
        if(toggle === 'gray')
        {
            setToggle('black')
        }
        else
        {
            setToggle('gray')
        }
    }
  return (
    <UseContext.Provider value={[toggle, changeTheme]}>
        {children}
    </UseContext.Provider>
  )
}

export default UserContextProvider
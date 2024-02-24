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

        if(toggleText === 'Dark')
        {
            setToggleText('Light')
        }
        else
        {
            setToggleText('Light')
        }
    }
  return (
    <UseContext.Provider value={{toggle, changeTheme,toggleText}}>
        {children}
    </UseContext.Provider>
  )
}

export default UserContextProvider
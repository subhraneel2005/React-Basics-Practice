import React from 'react'
import UseContext from './UseContext'
import { FaMoon, FaSun } from 'react-icons/fa';

const UserContextProvider = ({children}) => {

    const[toggle, setToggle] = React.useState('gray');
    const[toggleText,setToggleText] = React.useState('Dark mode');
    const[textColor, setTextColor] = React.useState('black');

    const changeTheme = () => {
        if(toggle === 'gray')
        {
            setToggle('black')
        }
        else
        {
            setToggle('gray')
        }

        if(toggleText === 'Dark mode')
        {
            setToggleText('Light Mode')
        }
        else
        {
            setToggleText('Dark mode')
        }

        if(textColor === 'black')
        {
            setTextColor('white')
        }
        else
        {
            setTextColor('black')
        }
    }
  return (
    <UseContext.Provider value={{toggle, changeTheme,toggleText, textColor}}>
        {children}
    </UseContext.Provider>
  )
}

export default UserContextProvider
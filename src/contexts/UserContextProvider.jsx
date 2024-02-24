import React from 'react'
import UseContext from './UseContext'
import { FaMoon, FaSun } from 'react-icons/fa';

const UserContextProvider = ({children}) => {

    const[toggle, setToggle] = React.useState('gray');
    const[toggleText,setToggleText] = React.useState(<FaMoon className='text-white'/>);
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

        if(toggleText === <FaMoon className='text-white'/>)
        {
            setToggleText(<FaSun className='text-white'/>)
        }
        else
        {
            setToggleText(<FaMoon className='text-white'/>)
        }

        if(textColor === 'black')
        {
            setTextColor('white')
        }
        if(textColor === 'white')
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
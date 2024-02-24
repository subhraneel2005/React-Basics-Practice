import React, { useState } from 'react'
import UseContext from './UseContext'


const UserContextProvider = ({children}) => {

    //for theme changer

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

    
        //for Login Page

        const[userData, setUserData] = useState({});

  return (
    <UseContext.Provider value={{toggle, changeTheme,toggleText, textColor,userData, setUserData}}>
        {children}
    </UseContext.Provider>
  )
}

export default UserContextProvider
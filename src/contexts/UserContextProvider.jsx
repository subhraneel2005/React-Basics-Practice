import React, { useState } from 'react'
import UseContext from './UseContext'


const UserContextProvider = ({children}) => {

    //for pokemon data

    const [pokemenData, setPokemenData] = useState([]);

    const  getPokemons = () => {

        const url = 'https://pokemon-api3.p.rapidapi.com/pokemon?name=%3CREQUIRED%3E';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c316315315msh0c888c6e83b886bp1d4caajsn67bd28eb77e9',
                'X-RapidAPI-Host': 'pokemon-api3.p.rapidapi.com'
            }
        };

        fetch(url,options)
        .then(res => res.json())
        .then(json => setPokemenData(json));
    }


    //for login page

    const[userData, setUserData] = React.useState({});

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

  return (
    <UseContext.Provider value={{toggle, changeTheme,toggleText, textColor,userData, setUserData}}>
        {children}
    </UseContext.Provider>
  )
}

export default UserContextProvider
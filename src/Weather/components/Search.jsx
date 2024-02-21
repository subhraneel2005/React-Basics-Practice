import React, { useState } from 'react'
import Temp from './Temp';
import { data } from 'autoprefixer';

function Search() {

    const[seacrhValue, setSearchValue] = useState('');
    const[showValue, setShowValue] = useState('');
    const[weather, setWeather] = useState([]);
    
    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }

    const getWeather = () => {
        const apiKey = "1aab87aff8b5dbfe0e1dba0c5aa7fe83";
        const city = seacrhValue;

        if(!city)
        {
            alert("Please enter a city !!!")
            return;
        }

        const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}$appid=${apiKey}`;

        fetch(currentWeatherUrl)
        .then(res => res.json())
        .then(data => {setWeather(data)
            console.log(data);
        })
        

        .catch(error => {console.error("Error 404", error)})

        setShowValue(seacrhValue);
    }
  return (
    <div>
        <input placeholder='Enter a city name' type="text" className='px-6 py-2 bg-slate-600 rounded-xl border-none outline-none' onChange={handleChange}/>
        <button onClick={getWeather} className='bg-green-500 rounded-xl py-2 px-4'>Search</button>

        <Temp seacrhValue ={seacrhValue} showValue={showValue} />
    </div>
  )
}

export default Search
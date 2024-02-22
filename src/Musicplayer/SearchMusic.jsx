import React, { useState } from 'react'
import Player from './Player';

function SearchMusic() {

    const[searchValue,setSearchValue] = useState("");
    const[music,setMusic] = useState("");
    const[list,setList] = useState([]);


    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }

    const getData = () => {
        const url = `https://spotify81.p.rapidapi.com/download_track?q=${searchValue}&onlyLinks=1`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c316315315msh0c888c6e83b886bp1d4caajsn67bd28eb77e9',
                'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
	        }
        };

        fetch(url,options)
        .then(res => res.json())
        .then(json => {setList(json)
            console.log(json);
        })
        
        .catch(error => {console.error("Error 404", error)});

        list.map((index)=>{
            setMusic(index.url);
        })

        

    }
  return (
    <div className='block'>
        <div className='flex w-full bg-slate-600 text-white rounded-xl'>
            <input className='border-none outline-none bg-transparent p-3' placeholder='Search for a song' type="text" onChange={handleChange} />
            <button className='p-3 bg-red-500 rounded-xl text-white' onClick={getData}>Search</button>
        
        </div>
        <Player music= {music}/>
    </div>
  )
}

export default SearchMusic
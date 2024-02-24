import React, { useState } from 'react'
import AiOutput from './AiOutput';

function SearchBar() {

    const[searchData,setSearchData] = useState('');
    const[data, setData] = useState([]);
    const[showOutput, setShowOutput] = useState('');

    const getData = () => {
        const url = `https://humor-jokes-and-memes.p.rapidapi.com/jokes/search?exclude-tags=nsfw&keywords=${searchData}&min-rating=7&include-tags=one_liner&number=3&max-length=200`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c316315315msh0c888c6e83b886bp1d4caajsn67bd28eb77e9',
                'X-RapidAPI-Host': 'humor-jokes-and-memes.p.rapidapi.com'
            }
        };

        fetch(url,options)
        .then(res => res.json())
        .then(json => {setData(json)
            console.log(json);
        })
        .catch(error => {console.error("Error 404", error)});

        data.map((index) => {
            setShowOutput(index.jokes.joke)
        })
    }

  return (
    <div className='block'>
    <div className='flex bg-slate-800 text-slate-300 rounded-xl w-full p-3 mb-6'>
        <input
        onChange={(e) => setSearchData(e.target.value)}
        className='border-none outline-none bg-transparent p-2' type="text" />

        <button className='bg-sky-600 text-white px-3 py-2 rounded-xl ml-12'
        onClick={getData}
        >Submit</button>
    </div>
    <AiOutput showOutput={showOutput}/>
    </div>
  )
}

export default SearchBar
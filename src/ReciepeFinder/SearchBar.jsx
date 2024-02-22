
import React, { useState } from 'react'

function SearchBar() {

    const[recipe,setRecipe] = useState('');
    const[ingredients,setIngredients] = useState('');
    const[list, setList] = useState([]);

    const handleChange = (e) => {
        setRecipe(e.target.value);
    }

    const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${recipe}`;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c316315315msh0c888c6e83b886bp1d4caajsn67bd28eb77e9',
		'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
	}
    };

    const getData = () => {
        fetch(url,options)
        .then(res => res.json())
        .then(json => {setList(json)
            console.log(json);
        })

        .catch(error => {console.error("Error 404", error)})
    }

  return (
    <div className='w-full h-full'>
        <div className='flex'>
            <input className='border-none bg-slate-600 p-3 outline-none w-[80%] rounded-xl text-white' placeholder='Enter recipe you want' type="text" onChange={handleChange}/>
            <button className='p-3 rounded-xl bg-red-400' onClick={getData}>Search</button>
        </div>
        
    </div>
  )
}

export default SearchBar
import React, { useState } from 'react'

function Flight() {

    const [result,setResult] = useState([]);

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const getflightData = () => {
        const url = 'https://siddiq-such-flight-v1.p.rapidapi.com/search?to=LHE&from=DXB&depart-date=2015-03-31&return-date=2015-04-07';
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c316315315msh0c888c6e83b886bp1d4caajsn67bd28eb77e9',
            'X-RapidAPI-Host': 'siddiq-such-flight-v1.p.rapidapi.com'

            
        }};

        fetch(url,options)
        .then(res =>  res.json())
        .then(json => {setResult(json)
            console.log(json);
        })
    }
  return (
    <div className='h-screen w-full flex justify-center items-center bg-sky-400'>
        <div className='w-[80%] h-[60%] rounded-xl bg-sky-600'>
            <div className='block ml-10'>
                <input type="text" placeholder='From...' onChange={(e) =>setFrom(e.target.value)}
                className='border-none ouitline-none p-3 text-white outline-none mt-6 bg-slate-800 rounded-xl'
                />
                <input type="text" placeholder='To...'  onChange={(e) =>setTo(e.target.value)}
                className='rounded-xl border-none ouitline-none p-3 text-white outline-none mt-6 ml-3 bg-slate-800'
                />

                <button className='p-3 ml-3 bg-slate-800 text-slate-400 rounded-xl cursor-pointer'
                onClick={getflightData}
                >Search</button>

                

                <h1 className='text-3xl text-center text-white mt-11'>Flight Results : </h1>
            </div>
        </div>
    </div>
  )
}

export default Flight
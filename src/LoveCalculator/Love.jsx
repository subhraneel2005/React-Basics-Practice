import React, { useState } from 'react'

function Love() {

  const[yourName, setYourName] = useState('');
  const[loverName, setLoverName] = useState('');
  const[per,setPer] = useState('');
  const[des,setDes] = useState('');
  const [alData, setAllData] = useState([]);

 const getLoveData = () => {
  const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${yourName}&fname=${loverName}`;
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c316315315msh0c888c6e83b886bp1d4caajsn67bd28eb77e9',
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
	}
  };

  fetch(url,options)
  .then(response => response.json())
  .then(json => {setAllData(json)
    setPer(json.percentage);
    setDes(json.result);
    console.log(json);
  });
 }

  return (
    <div className='h-screen w-full flex justify-center items-center bg-pink-400'>
      <div className='h-[400px] w-[350px] rounded-xl bg-pink-600 flex justify-center items-center'>
        <div className='block'>
          <input className=' ml-6 px-4 py-2 bg-slate-700 text-white border-none outline-none' 
          onChange={(e) => setYourName(e.target.value)}
          placeholder='Type Your Name'
          type="text" />
          <input className=' ml-6 mt-4 px-4 py-2 bg-slate-700 text-white border-none outline-none' 
          onChange={(e) => setLoverName(e.target.value)}
          placeholder='Type Lovers Name'
          type="text" /><br/>
          <button className='bg-slate-800 text-slate-300 p-3 rounded-xl cursor-pointer ml-6 mt-5' onClick={getLoveData}>Submit</button>

          <h1 className='text-center text-3xl text-white font-bold mt-5'>{`${per}%`}</h1>
          <p className='text-center text-xl text-white font-bold mt-3'>{des}</p>
        </div>
      </div>
    </div>
  )
}

export default Love
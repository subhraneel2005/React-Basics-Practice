import React, { useState } from 'react'
import BmiResults from './BmiResults';

function Bmi() {

    const [bmi, setBmi] = useState(null);
    const [weight, setWeight] =useState();
    const [ height,setHeight] = useState();

    const calculate = () => {
      if (!height || !weight) return alert("Enter the required values !!!");

      setBmi(weight/(height*height));
    }

  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='bg-yellow-300 shadow-2xl rounded-lg p-8 flex justify-center items-center w-[400px] h-[450px]'>
            <div className='block'>
                <h1>BMI Calculator</h1>
                <input type="text"
                className='px-3 py-2 rounded-xl bg-slate-700 text-white border-none outline-none'
                placeholder='Enter weight in kgs'
                onChange={(e) => setWeight(e.target.value)}/>
                <input type="text"
                placeholder='Enter height in meters'
                className='px-3 py-2 rounded-xl bg-slate-700 text-white border-none outline-none'
                onChange={(e) => setHeight(e.target.value)}/>
                <button className='p-3 cursor-pointer' onClick={calculate}>Calculate BMI</button>
                <BmiResults  bmi={bmi} />
            </div>
        </div>
    </div>
  )
}

export default Bmi
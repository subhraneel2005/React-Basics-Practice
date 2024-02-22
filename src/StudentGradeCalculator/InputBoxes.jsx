import React, { useState } from 'react'
import Grade from './Grade';

function InputBoxes() {

const[grade, setGrade] = useState(0);
const[totalMarks, setTotalMarks] = useState(0);
const[yourMarks, setYourMarks] = useState(0);

const Ymarks = (e) => {
  setYourMarks(e.target.value);
}

const Tmarks = (e) => {
  setTotalMarks(e.target.value);
}

const calculateGrade = () => {

  
    if(!yourMarks && !totalMarks)
    {
      alert("Please enter the values !!!");
    }
    else{
      if(yourMarks > totalMarks)
      {
        setGrade("Invalid");
      }
      else
      {
        let newGrade = (yourMarks/totalMarks)*100;
        newGrade = newGrade.toFixed(2);
        setGrade(newGrade);
      }
    }
  

}
  return (
    <div className='w-[80%] h-[400px] flex justify-center items-center'>
        <div className='block'>
            <input className='border-none bg-slate-600 p-3 outline-none w-full text-white' placeholder='Enter marks you got' type="text" onChange={Ymarks}/>
            <input className='border-none bg-slate-600 p-3 outline-none w-full mt-3 text-white' placeholder='Enter total marks' type="text" onChange={Tmarks} />
            <button className='px-4 py-2 rounded-xl bg-red-400 mt-4 ml-[140px]' onClick={calculateGrade}>Calculate</button>
            <Grade grade = {grade}/>
        </div>
    </div>
  )
}

export default InputBoxes
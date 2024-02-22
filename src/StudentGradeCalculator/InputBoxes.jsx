import React, { useState } from 'react'

function InputBoxes() {

const[grade, setGrade] = useState();
const[totalMarks, setTotalMarks] = useState();
const[yourMarks, setYourMarks] = useState();

const Ymarks = (e) => {
  setYourMarks(e.target.value);
}

const Tmarks = (e) => {
  setTotalMarks(e.target.value);
}

const calculateGrade = () => {
  let grade = (yourMarks / totalMarks) * 100;
  setGrade(grade);
}
  return (
    <div className='w-[80%] h-[400px] flex justify-center items-center'>
        <div className='block'>
            <input className='border-none bg-slate-600 p-3 outline-none w-full text-white' placeholder='Enter marks you got' type="text" onChange={Ymarks}/>
            <input className='border-none bg-slate-600 p-3 outline-none w-full mt-3 text-white' placeholder='Enter total marks' type="text" onChange={Tmarks} />
            <button className='px-4 py-2 rounded-xl bg-red-400' onClick={calculateGrade}>Calculate</button>
        </div>
    </div>
  )
}

export default InputBoxes
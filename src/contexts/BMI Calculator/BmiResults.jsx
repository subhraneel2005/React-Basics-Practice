import React from 'react'

function BmiResults(props) {
  if(!props.bmi)
  {
    return <h1 className='text-center'>Please enter all details </h1>
  }
  else
  {
    <h1 className='text-center'>BMI : {props.bmi}</h1>
  }
}

export default BmiResults
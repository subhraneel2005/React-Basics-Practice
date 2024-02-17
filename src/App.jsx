import React from 'react'
import First from './First'
import Second from './Second'
import PropsPractice from './PropsPractice'
import Third from './Third'
import Fourth from './Fourth'
import FIve from './FIve'



function App() {

 
  return (
    <div>
      <First/>
      {/* <Second/> */}
      <div className='grid grid-cols-3 p-4'>
      <PropsPractice username="Chacha" />
      <PropsPractice username="JeetChomuLord"/>
      <PropsPractice username="Chachi" />
      <PropsPractice/><PropsPractice/>
      </div>
      <div className='flex gap-20'>
        <Third colorOne="yellow" colorTwo="orange" colorThree="gray" tOne='Yellow' tTwo='Orange' tThree='Gray' title="Card 1" dColor="green" />
        <Third/>
      </div>
      <Fourth/>
      <FIve/>
    </div>
  )
}

export default App
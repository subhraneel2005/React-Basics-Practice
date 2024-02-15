import React from 'react'
import First from './First'
import Second from './Second'
import PropsPractice from './PropsPractice'



function App() {

  let user = {
    username:'JeetChomuLord',
    description:'As u can see i am not dead !!!',
  }
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
    </div>
  )
}

export default App
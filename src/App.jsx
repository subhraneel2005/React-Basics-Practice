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
      <PropsPractice username="Chacha" />
      <PropsPractice username="JeetChomuLord"/>
      <PropsPractice username="Chachi" />
      <PropsPractice/><PropsPractice/>
    </div>
  )
}

export default App
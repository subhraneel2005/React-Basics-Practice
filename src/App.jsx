import React from 'react'
import First from './First'
import Second from './Second'
import PropsPractice from './PropsPractice'
import Third from './Third'
import Fourth from './Fourth'
import FIve from './FIve'
import Six from './Six'
import Seven from './Seven'


import one from './assets/one.jpg'
import two from './assets/two.jpg'
import three from './assets/three.jpg'
import four from './assets/four.jpg'
import five from './assets/five.jpg'
import six from './assets/six.jpg'
import Eight from './Todo/Todo'
import Todo from './Todo/Todo'
import Nine from './Nine'



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
      <Six/>

      <div className='h-screen w-full flex justify-center items-center select-none'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
          <Seven pics={one} title='Car1' description='Car1 description'/>
          <Seven pics={two} title='Car2' description='Car2 description'/>
          <Seven pics={three} title='Car3' description='Car3 description'/>
          <Seven pics={four} title='Car4' description='Car4 description'/>
          <Seven pics={five} title='Car5' description='Car5 description'/>
          <Seven pics={six} title='Car6' description='Car6 description'/>
        </div>
      </div>

      <Todo/>
      <Nine/>
    </div>
  )
}

export default App
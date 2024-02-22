import React from 'react'

function Player(props) {
  return (
    <div className='mt-[50px]'>
      <audio src={props.music} controls></audio>
    </div>
  )
}

export default Player
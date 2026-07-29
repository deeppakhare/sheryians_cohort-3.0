import React, { useState } from 'react'

const Increment = ({count,setCount}) => {
  return (
    <div>
      <button className='button' onClick={() => {
        setCount(count + 1);
      }}>Increment</button>
    </div>
  )
}

export default Increment

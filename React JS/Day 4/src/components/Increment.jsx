import React, { useState } from 'react'

const Increment = ({count,setCount}) => {
  return (
    <div>
      <button className='left' onClick={() => {
        setCount(count + 1);
      }}>Increment</button>
    </div>
  )
}

export default Increment

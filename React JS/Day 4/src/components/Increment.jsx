import React, { useState } from 'react'

const Increment = ({count,setCount}) => {
    console.log(count);
    console.log(setCount);
    
    
  return (
    <div>
      <h1>Increment - {count}</h1>
      <button onClick={() => {
        setCount(count + 1);
      }}>Increment</button>
    </div>
  )
}

export default Increment

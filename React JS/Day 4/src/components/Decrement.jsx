import React, { useState } from 'react'

const Decrement = ({count,setcount}) => {
  return (
    <div>
      <button onClick={() => {
        setCount(count - 1);
      }}>Decrement</button>
      <h1>Decrement :- {count}</h1>
    </div>
  )
}

export default Decrement

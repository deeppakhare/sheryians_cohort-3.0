import React, { useState } from 'react'

const Decrement = ({count,setCount}) => {
    if (count <= 0) {
        alert("count is 0, Please increment")
    }
  return (
    <div>
      <button className='right' onClick={() => {
        setCount(count - 1);
      }}>Decrement</button>
    </div>
  )
}

export default Decrement

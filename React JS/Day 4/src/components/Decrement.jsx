import React, { useState } from 'react'
import Increment from './Increment'

const Decrement = () => {
    const [state, setstate] = useState(0)
    let inc = <Increment/>
    console.log(inc);
    
    
  return (
    <div>
      <button onClick={() => {
        setstate(state + 1);
      }}>Decrement</button>
      <h1>Decrement :- {state}</h1>
    </div>
  )
}

export default Decrement

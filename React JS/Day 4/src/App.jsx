import React from 'react'
import { useState } from 'react'
import Increment from './components/Increment'
import Decrement from './components/Decrement'


const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Hello</h1>
      <h1>Count is :- {count}</h1>
      <Increment
      count = {count}
      setCount = {setCount}
      />
      <Decrement
      count = {count}
      setCount = {setCount}
      />
    </div>
  )
}

export default App

import React from 'react'
import { useState } from 'react'
import Increment from './components/Increment'
import Decrement from './components/Decrement'


const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Hello</h1>
      <Increment
      count = {count}
      setcount = {setCount}
      />
      <Decrement
      count = {count}
      setcount = {setCount}
      />
    </div>
  )
}

export default App

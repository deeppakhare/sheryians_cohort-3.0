import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div className='text-[100px]'>
      <h1>Count is {count}</h1>
      <button className='border-4 bg-amber-300' onClick={() => {
        setCount(count + 1);
      }}>Increment</button>
    </div>
  )
}
let count = 0

export default Counter

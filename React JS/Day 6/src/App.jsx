import React from 'react'
import { useState } from 'react'

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className='w-screen h-screen bg-amber-600 flex justify-center items-center border-50 border-amber-50'>
      <div className='h-[70%] w-[70%] bg-blue-400 flex flex-col justify-evenly items-center'>
          <div className='flex flex-col justify-evenly h-[50%]'>
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter name'  className='border-2'/>
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter name'  className='border-2'/>
            <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Enter name'  className='border-2'/>
          </div>
          <div className='h-[50%] flex flex-col justify-evenly'>
            <h1>Name is - {name}</h1>
            <h1>Email is - {email}</h1>
            <h1>password is - {password}</h1>
          </div>
      </div>
    </div>
  )
}

export default App

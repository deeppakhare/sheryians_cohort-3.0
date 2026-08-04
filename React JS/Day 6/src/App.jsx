import React from 'react'
import { useState } from 'react'

const App = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: ""
  })


  
  return (
    <div className='w-screen h-screen bg-amber-600 flex justify-center items-center border-50 border-amber-50'>
      <div className='h-[70%] w-[70%] bg-blue-400 flex flex-col justify-evenly items-center'>
          <div className='flex flex-col justify-evenly h-[50%]'>
            <input name='name' onChange={handelChange} type="text" placeholder='Enter name'  className='border-2'/>
            <input name='email' onChange={handelChange} type="text" placeholder='Enter name'  className='border-2'/>
            <input name='password' onChange={handelChange} type="text" placeholder='Enter name'  className='border-2'/>
          </div>
          <div className='h-[50%] flex flex-col justify-evenly'>
            <h1>Name is - {formdata.name}</h1>
            <h1>Email is - {formdata.email}</h1>
            <h1>password is - {formdata.password}</h1>
          </div>
      </div>
    </div>
  )
}

export default App

import React from 'react'

const Register = () => {
  return (
    <div className='bg-green-200 flex flex-col justify-evenly border-2 rounded-2xl w-100 h-90 gap-3 p-6 text-2xl font-mono'>
      <div className='flex justify-center items-center'>
    <h1>Register Form</h1>
      </div>
    <form className='flex flex-col gap-6 ' action="">
        <input type="text" placeholder='Enter Email' className='border p-1'/>
        <input type="password" placeholder='Enter Password' className='border p-1'/>
        <button className='border rounded p-3 hover:bg-amber-400'>Login</button>
    </form>
    <div className='flex justify-center items-center text-xl'>
    <p>Dont have account ? <span className='text-blue-400 cursor-pointer'>Log in</span></p>
    </div>
    </div>
  )
}

export default Register

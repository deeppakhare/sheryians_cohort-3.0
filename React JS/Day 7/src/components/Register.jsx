import React from 'react'

const Register = () => {
  return (
    <div className='bg-green-200 flex flex-col justify-evenly border-2 rounded-2xl w-100 h-90 gap-3 p-5'>
    <h1>Register Form</h1>
    <form className='flex flex-col gap-3 ' action="">
        <input type="text" placeholder='Enter Email'/>
        <input type="password" placeholder='Enter Password'/>
        <button>Register</button>
    </form>
    <p>Dont have account <span>Sign in</span></p>
    </div>
  )
}

export default Register

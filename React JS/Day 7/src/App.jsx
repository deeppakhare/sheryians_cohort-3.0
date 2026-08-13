import React from 'react'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
  return (
    <div className='bg-gray-300 h-screen  flex flex-col justify-center items-center '>
      <Login/>
      <Register/>
    </div>
  )
}

export default App
